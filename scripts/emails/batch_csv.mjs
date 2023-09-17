import path from 'path'
import fs from "fs";
import csv from "csv-parser";


const batch_size = 500;
const batchDirectory = 'email_list'; // Directory to store batch files

if (!fs.existsSync(batchDirectory)) {
  fs.mkdirSync(batchDirectory);
}

let batchCount = 1;
let currentBatch = [];

function writeBatchToFile() {
  if (currentBatch.length === 0) {
    return;
  }

  const batch_filename = `batch_${batchCount}.csv`;
  const batch_path = path.join(batchDirectory, batch_filename);

  const csvData = ['emails', ...currentBatch];
  fs.writeFileSync(batch_path, csvData.join(',\n'));

  currentBatch = [];
  batchCount++;
}

fs.createReadStream('safe_emails.csv')
  .pipe(csv())
  .on('data', (row) => {
    currentBatch.push(row['emails']);

    if (currentBatch.length >= batch_size) {
      writeBatchToFile();
    }
  })
  .on('end', () => {
    writeBatchToFile();
    console.log(`${batchCount - 1} batches created.`);
  });