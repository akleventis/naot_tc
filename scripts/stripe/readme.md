### export.mjs

Description
---
This script is responsible for creating a registration list for each workshop. 
Currently there's no straightfoward way to retrive all successful purchases for an individual product. 
What we do have are:
  - Checkout sessions
  - Line items
  - Payment Intents

Workflow
---
1. Retrieve all successful checkout sessions
2. For each successful checkout session
	- Confirm the request originated from a payment link (failsafe)
	- Use the payment intent to query for 'latest charge' which will indicate if a refund has been issued, henceforth making that session invalid
3. Use the line item's id to retrieve product information (workshop name, quantity purchased)
4. Format collected information into a product mapping (see details below)
5. Pipe data into an excel sheet and export to operating system `/Desktop/registration.xlsx`

Data Structure
---
`registrationMap` maps each product_id to a object of relevant information requested by the client. The structure is designed to store an array of attendee information for each product. 
```
 {
   {product_id}: [
     {
       attendee_full_name: {attendee_full_name},
       address: {address},
       email: email,
       name: {name},
       phone: {phone},
       amount_total: {amount_total},
       product_description: {product_description},
       product_id: {product_id},
       quantity: {quantity}
     },
     ...etc,
   ],
   {product_id}: [],
   {product_id}: [],
 }
```

Run
---
1. `cd /scripts/stripe`
2. `node export.mjs --env={environment}`
    - `dev` or `prod`