import Stripe from 'stripe';
import dotenv from 'dotenv';
import commandLineArgs from 'command-line-args'
const api_version = '2022-11-15';

// Load environment variables from .env.local file
dotenv.config();

// Determine which api key to use, sandbox vs. production, with cli arg --env={environment}
const options = commandLineArgs([
  {name: 'env', type: String}
])

let stripe_key 
switch (options['env']) {
  case 'dev':
    stripe_key = process.env.STRIPE_KEY_DEV;
    break
  case 'prod':
    stripe_key = process.env.STRIPE_KEY_PROD
    break
}

if (stripe_key === undefined) {
  console.error('Fatal Error:', 'must provide --env arg');
  process.exit(1);
}

// Initialize Stripe client
const stripe = new Stripe(stripe_key, { apiVersion: api_version });

const main = async () => {
  let registrationMap = {}; // scripts/readme.md

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

        // populate customer data fields to be stored in registrationMap
        let data = {
          attendee_full_name: session_item.custom_fields[0].text.value,
          address: session_item.customer_details.address,
          email: session_item.customer_details.email,
          name: session_item.customer_details.name,
          phone: session_item.customer_details.phone,
          amount_total: session_item.amount_total,
          product_description: line_item.data[0].description,
          product_id: line_item.data[0].price.product,
          quantity: line_item.data[0].quantity,
        };
        data.address = JSON.stringify(data.address);

        // initialize the array if it doesn't exist
        registrationMap[data.product_id] ??= [];

        // push the data into the array
        registrationMap[data.product_id].push(data);
      }
    }
  }
  console.log(registrationMap)

  // export data to 2 csv's
  // one for registration, one w/ all information
};

main();
