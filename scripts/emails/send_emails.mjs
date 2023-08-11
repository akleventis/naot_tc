import commandLineArgs from 'command-line-args'
import dotenv from "dotenv";
import fs from "fs";
import csv from "csv-parser";
import axios from "axios";

// Load environment variables from .env.local file
dotenv.config();

const options = commandLineArgs([
  {name: 'batch', type: String}
])
let csvBatch = options['batch']
if (csvBatch === undefined) {
  console.error('Fatal Error:', 'must provide --file arg');
  process.exit(1);
}

const fromAddress = process.env.POSTMARK_DEFAULT_FROM;
const serverKey = process.env.POSTMARK_BROADCAST_KEY;
const streamID = process.env.POSTMARK_BROADCAST_STREAM_ID;
const templateID = process.env.POSTMARK_BROADCAST_TEMPLATE_ID;
if (fromAddress === undefined) {
  console.error('Fatal Error:', 'error processing .env file')
}

const emailsCSV = `./email_list/${csvBatch}.csv`;
const rowKey = "emails";
const apiUrl = "https://api.postmarkapp.com/email/batchWithTemplates";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Postmark-Server-Token": `${serverKey}`,
};

if (serverKey === undefined || streamID == undefined) {
  process.exit(1);
}

const main = async () => {

  // Array to store the emails
  const emailArray = [];

  // Read the CSV file
  fs.createReadStream(emailsCSV)
    .pipe(csv())
    .on("data", (row) => {
      const emails = row[rowKey].split(",");
      emailArray.push(...emails);
    })
    .on("end", () => {
      // Prepare the array of messages
      const messages = emailArray.map((email) => ({
        From: fromAddress,
        To: email,
        TemplateId: templateID,
        TemplateModel: {},
      }));

      // Create the data object for the request
      const requestData = {
        Messages: messages,
      };

      console.log(requestData)
    //  Make the POST request using axios
    //   axios.post(apiUrl, requestData, { headers })
    //     .then((response) => {
    //       console.log("Batch request successful:", response.data);
    //     })
    //     .catch((error) => {
    //       console.error("Error making batch request:", error);
    //     });
    //   console.log(messages);
    });
};

main();