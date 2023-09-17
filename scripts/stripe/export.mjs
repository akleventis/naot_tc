import Stripe from 'stripe';
import dotenv from 'dotenv';
import commandLineArgs from 'command-line-args';
import fs from "fs";
import path from "path";
import csvToXlsx from '@aternus/csv-to-xlsx';

// node export.mjs --env={environment}
const api_version = '2022-11-15';
const csvFile = 'workshop_data.csv';
const excelFile = 'registration.xlsx';

// Load environment variables from .env.local file
dotenv.config();

// Determine which api key to use, sandbox vs. production, with cli arg --env={environment}
const options = commandLineArgs([
  { name: 'env', type: String }
]);

let stripe_key;
switch (options['env']) {
  case 'dev':
    stripe_key = process.env.STRIPE_KEY_DEV;
    break;
  case 'prod':
    stripe_key = process.env.STRIPE_KEY_PROD;
    break;
}

if (stripe_key === undefined) {
  console.error('Fatal Error:', 'must provide --env arg');
  process.exit(1);
}

// Initialize Stripe client
const stripe = new Stripe(stripe_key, { apiVersion: api_version });

const main = async () => {
   // See: https://github.com/akleventis/naot_tc/tree/main/scripts#data-structure for details regarding registrationMap data structure
  let registrationMap = {};

  // checkout session list pagination
  let [last_object, has_more] = [undefined, true];

  while (has_more) {
    // list all checkout sessions (https://stripe.com/docs/api/checkout/sessions#list_checkout_sessions)
    const session_list = await stripe.checkout.sessions.list({
      limit: 100,
      starting_after: last_object,
    });

    // update pagination data
    [last_object, has_more] = [session_list.data[session_list.data.length - 1].id, session_list.has_more]

    // retrieve each session's line_item (product) information
    for (const session_item of session_list.data) {
      const valid = await isValidPayment(session_item) // validate checkout session
      if (valid)  {
        // retrieve a session's line items (https://stripe.com/docs/api/checkout/sessions/line_items)
        const line_item = await stripe.checkout.sessions.listLineItems(session_item.id);

        // populate transaction fields to be stored in registrationMap
        let data = formatData(session_item, line_item)

        // initialize the map key if product does not yet exist
        registrationMap[data.workshop] ??= [];

        // append data to corresponding map iaw with product key
        registrationMap[data.workshop].push(data);
      }
    }
  }
  exportData(registrationMap)
};

// isValidPayment validates
// 1. Checkout session was successful.
// 2. Request originates from a payment link.
// 3. The payment intent's latest charge is not a refund.
const isValidPayment = async (session_item) => {
  if (session_item.payment_status !== 'paid' || session_item.payment_link === null) {
    return false
  }
  const paymentIntent = await stripe.paymentIntents.retrieve(
    session_item.payment_intent,
    { expand: ['latest_charge'] }
  );

  const latest_charge = paymentIntent.latest_charge;
  return !latest_charge.refunded
};

// formatData formats and returns all data associated with a transaction (registration)
const formatData = (session_item, line_item) => {
  let employer = session_item.custom_fields.length > 1 ? session_item.custom_fields[1].text.value : null;
  let address = parseAddress(session_item.customer_details.address)
  let amount_total = `$${session_item.amount_total / 100}`

  return {
    attendee_full_name: session_item.custom_fields[0].text.value,
    employer: employer,
    address: address,
    email: session_item.customer_details.email,
    name: session_item.customer_details.name,
    phone: session_item.customer_details.phone,
    amount_total: amount_total,
    workshop: line_item.data[0].description,
    quantity: line_item.data[0].quantity,
  };
};

// parseAddress converts an address object to digestable string
const parseAddress = (addressObj) => {
  const addressParts = [
    addressObj.line1,
    addressObj.line2,
    addressObj.city,
    addressObj.state,
    addressObj.postal_code,
    addressObj.country,
  ].filter((part) => part !== null && part !== undefined);

  return addressParts.join(', ');
};

// Function to convert the registration data into an excel sheet exported to Desktop
function exportData(workshopData) {
  // Initialize an empty array to store the CSV lines
  const csvLines = [];
  const csvHeader = "Workshop Name,Full Name,Employer,Address,Email,Phone,Amount Total,Quantity";

  // Iterate through the workshop data
  for (const workshop in workshopData) {
    for (const item of workshopData[workshop]) {
      // Create a CSV line for each attendee
      const csvLine = `${workshop},"${item.attendee_full_name}","${item.employer}","${item.address}","${item.email}","${item.phone}",${item.amount_total},${item.quantity}`;
      csvLines.push(csvLine);
    }
  }
  
  // Join the CSV header and lines
  const csvContent = `${csvHeader}\n${csvLines.join("\n")}`;

  // Specify path to the CSV file to create/overwrite
  if (fs.existsSync(csvFile)) {
    fs.unlinkSync(csvFile);
  }

  // Write the CSV content to the file
  fs.writeFileSync(csvFile, csvContent, 'utf-8');

  // Specify path to the Excel file to create/overwrite
  const desktopPath = path.join(
    process.env.HOME,
    `Desktop/${excelFile}`
  );

  if (fs.existsSync(desktopPath)) {
    fs.unlinkSync(desktopPath);
  }

  // Convert the CSV to Excel using @aternus/csv-to-xlsx
  csvToXlsx.convertCsvToXlsx(csvFile, desktopPath);
  
  console.log("Export success: ", desktopPath)
}

main();