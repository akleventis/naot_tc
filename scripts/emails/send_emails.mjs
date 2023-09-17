import commandLineArgs from 'command-line-args'
import dotenv from "dotenv";
import fs from "fs";
import csv from "csv-parser";
import axios from "axios";

// Load environment variables from .env.local file
dotenv.config();

const requiredVars = [
  'POSTMARK_BROADCAST_TEMPLATE_ID_V1',
  'POSTMARK_BROADCAST_TEMPLATE_ID_V2',
  'POSTMARK_DEFAULT_FROM',
  'POSTMARK_BROADCAST_KEY',
  'POSTMARK_BROADCAST_STREAM_ID',
];

const [
  fromAddress, 
  serverKey, 
  streamID
] = [
  process.env.POSTMARK_DEFAULT_FROM,
  process.env.POSTMARK_BROADCAST_KEY,
  process.env.POSTMARK_BROADCAST_STREAM_ID
]

const templateMapping = {
  'template_v1': process.env.POSTMARK_BROADCAST_TEMPLATE_ID_V1,
  'template_v2': process.env.POSTMARK_BROADCAST_TEMPLATE_ID_V2
}

const options = commandLineArgs([
  {name: 'batch', type: String},
  {name: 'template', type: String}
])

const main = async () => {
  validateEnvVariables(requiredVars)
  const [csvBatch, templateID] = processArgs(options)

  const emailsCSV = `./email_list/${csvBatch}.csv`;
  const rowKey = "emails";
  const apiUrl = "https://api.postmarkapp.com/email/batchWithTemplates";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Postmark-Server-Token": `${serverKey}`,
  };

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
        MessageStream: streamID,
        TemplateModel: {},
      }));
    
      // Create the data object for the request
      const requestData = {
        Messages: messages,
      };

      //  Make the POST request 
      axios.post(apiUrl, requestData, { headers })
        .then((response) => {
          console.log("Batch request successful:", response.data);
        })
        .catch((error) => {
          console.error("Error making batch request:", error);
        });
      console.log(messages);
    });
};

const validateEnvVariables = (requiredVars) => {
  const missingVars = requiredVars.filter((variable) => !process.env[variable]);
  if (missingVars.length > 0) {
    console.error('Fatal Error:', 'Missing environment variables:', missingVars.join(', '));
    process.exit(1);
  }
}

const processArgs = (options) => {
  let csvBatch = options['batch']
  if (csvBatch === undefined) {
    console.error('Fatal Error:', 'must provide --file arg');
    process.exit(1);
  }

  let template = options['template']
  if (template == undefined) {
    console.error('Fatal Error:', 'must provide --template arg');
    process.exit(1);
  }

  const templateID = templateMapping[template]
  if (templateID == undefined) {
    console.error('Fatal Error:', `template '${template}' not found`);
    process.exit(1);
  }
  return [csvBatch, templateID]
}

main();