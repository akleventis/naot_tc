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
  'POSTMARK_BROADCAST_TEMPLATE_ID_V3',
  'POSTMARK_BROADCAST_TEMPLATE_ID_V4',
  'POSTMARK_BROADCAST_TEMPLATE_ID_V5',
  'POSTMARK_BROADCAST_TEMPLATE_ID_V6',
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
  'template_v2': process.env.POSTMARK_BROADCAST_TEMPLATE_ID_V2,
  'template_v3': process.env.POSTMARK_BROADCAST_TEMPLATE_ID_V3,
  'template_v4': process.env.POSTMARK_BROADCAST_TEMPLATE_ID_V4,
  'template_v5': process.env.POSTMARK_BROADCAST_TEMPLATE_ID_V5,
  'template_v6': process.env.POSTMARK_BROADCAST_TEMPLATE_ID_V6,
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
      const requestData = formatRequest(emailArray, templateID)

      //  Perform POST request against https://api.postmarkapp.com/email/batchWithTemplates
      axios.post(apiUrl, requestData, { headers })
        .then((response) => {
          console.log("Batch request successful:", response.data);
        })
        .catch((error) => {
          console.error("Error making batch request:", error);
        });
    });
};

// validateEnvVariables makes sure all environment variables are present before proceeding into the script
const validateEnvVariables = (requiredVars) => {
  const missingVars = requiredVars.filter((variable) => !process.env[variable]);
  if (missingVars.length > 0) {
    console.error('Fatal Error:', 'Missing environment variables:', missingVars.join(', '));
    process.exit(1);
  }
}

// processArgs reads and processes command line arguments for script.
// 1. batch: File to process (ex. batch_0.csv)
// 2. template: Email template name (ex. template_v1)
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

// formatRequest converts the array of emails into a formatted batch request.
// See: https://api.postmarkapp.com/email/batchWithTemplates
const formatRequest = (emailArray, templateID) => {
  const messages = emailArray.map((email) => ({
    From: fromAddress,
    To: email,
    TemplateId: templateID,
    MessageStream: streamID,
    TemplateModel: {},
  }));

  const requestData = {
    Messages: messages,
  };

  return requestData
}

main();