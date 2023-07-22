### export.mjs

Run
---
1. `cd /scripts`
2. `node export.mjs --env={environment}`
    - `dev` or `prod`

Data Structure
---
`registrationMap` maps each product_id to a list of relevant information for registration. The structure is designed to store multiple sets of attendee information for each product. With this data, we can export registration lists for each event.
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
