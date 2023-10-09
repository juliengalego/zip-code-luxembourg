const fs = require('fs');
const csv = require('csv-parser');
const results = [];


fs.createReadStream('data/caclr.csv', {encoding: 'latin1'})
    .pipe(csv({separator: ';'})) 
    .on('data', (data) => {
        results.push({
            district: data.DISTRICT_NOM
            , canton: data.CANTON_NOM
            , municipality: data.COMMUNE_NOM
            , city: data.LOCALITE_NOM
            , street: data.RUE_NOM
            , zipCode: data.CODE_POSTAL
        });
    })
    .on('end', () => {
        fs.writeFileSync('data/data.json', JSON.stringify(results));
        console.log('CSV to JSON conversion complete.');
    });