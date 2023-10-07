const fs = require('fs');
const csv = require('csv-parser');
const results = [];


fs.createReadStream('data/zipcodes.csv')
    .pipe(csv()) // Skip the header row
    .on('data', (data) => {
        results.push({city: data.VILLE, street: data.RUE, zipCode: data.CODE_POSTAL});
    })
    .on('end', () => {
        fs.writeFileSync('data/data.json', JSON.stringify(results));
        console.log('CSV to JSON conversion complete.');
    });