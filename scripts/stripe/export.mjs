import Stripe from 'stripe';
import dotenv from 'dotenv';
import commandLineArgs from 'command-line-args';
const api_version = '2022-11-15';

// Load environment variables from .env.local file
dotenv.config();

// Determine which api key to use, sandbox vs. production, with cli arg --env={environment}
const options = commandLineArgs([{ name: 'env', type: String }]);

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
  let registrationMap = {}; // https://github.com/akleventis/naot_tc/tree/main/scripts#data-structure

  // checkout session list pagination
  let [lastObject, has_more] = [undefined, true];

  while (has_more) {
    // list all checkout sessions (https://stripe.com/docs/api/checkout/sessions#list_checkout_sessions)
    const session_list = await stripe.checkout.sessions.list({
      limit: 100,
      starting_after: lastObject,
    });

    // update pagination data
    has_more = session_list.has_more;
    lastObject = session_list.data[session_list.data.length - 1].id;

    // retrieve each session's line_item (product) information
    for (const session_item of session_list.data) {
      // verify the item's payment status and confirm derivation from a payment link
      if (session_item.payment_status === 'paid' && session_item.payment_link !== null) {
        // retrieve a session's line items (https://stripe.com/docs/api/checkout/sessions/line_items)
        const line_item = await stripe.checkout.sessions.listLineItems(session_item.id);

        // populate transaction fields to be stored in registrationMap
        let data = {
          attendee_full_name: session_item.custom_fields[0].text.value,
          employer:
            session_item.custom_fields.length > 1 ? session_item.custom_fields[1].text.value : null,
          address: parseAddress(session_item.customer_details.address),
          email: session_item.customer_details.email,
          name: session_item.customer_details.name,
          phone: session_item.customer_details.phone,
          amount_total: `$${session_item.amount_total / 100}`,
          product: line_item.data[0].description,
          // product_id: line_item.data[0].price.product,
          quantity: line_item.data[0].quantity,
        };

        // initialize the array if it doesn't exist
        registrationMap[data.product] ??= [];

        // push data into the array
        registrationMap[data.product].push(data);
      }
    }
  }
  console.log(registrationMap)
};

function parseAddress(addressObj) {
  const addressParts = [
    addressObj.line1,
    addressObj.line2,
    addressObj.city,
    addressObj.state,
    addressObj.postal_code,
    addressObj.country,
  ].filter((part) => part !== null && part !== undefined);

  return addressParts.join(', ');
}

main();
