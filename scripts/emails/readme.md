Note: The contents of these files are concealed to protect sensitive information (emails):
 - `safe_emails.csv`
 - `email_list/{batches.csv}`
 
### batch_csv.mjs
 - Processes a large CSV file containing email addresses and organizes them into batches of 50
 - These batches are stored in `scripts/emails/emails_list/*`

Run
---
1. `cd /scripts/emails`
2. `node batch_csv.mjs`

### send_emails.mjs
 - Facilitates sending batches of emails using the Postmark API
 - It reads email addresses from a CSV file, processes them, and sends templated emails to the specified recipients
   - See: https://api.postmarkapp.com/email/batchWithTemplates

Run
---
1. `cd /scripts/emails`
2. `node send_emails.mjs --batch={batch} --template={template}`
  - batch ex. `batch_0`
  - template ex. `template_v1`

Request Format:
```bash
curl "https://api.postmarkapp.com/email/batchWithTemplates" \
  -X POST \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -H "X-Postmark-Server-Token: server token" \
  -d '{
    "Messages": [
        {
            "From": "",
            "To": "",
            "TemplateModel": {}
        }
    ]
}'
```


#### TODO: Automate purchase confirmation
---

```json

"TemplateModel": {
    "customer": "",
    "event": {
        "date": "Sat Sept. 16th, 2023",
        "location": "Chicago, IL",
        "url": "https://mynaot.com/chicago"
    }
}
"TemplateModel": {
    "customer": "",
    "event": {
        "date": "Sat Oct 21st, 2023",
        "location": "St. Louis, MO",
        "url": "https://mynaot.com/st_louis"
    }
}
"TemplateModel": {
    "customer": "",
    "event": {
        "date": "Sat Nov 4th, 2023",
        "location": "Atlanta, GA",
        "url": "https://mynaot.com/atlanta"
    }
}
```
