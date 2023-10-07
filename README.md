# Zip Code Info

A simple npm package to retrieve zip code information for Luxembourg without external dependencies.

## Installation

To install this package, you can use npm or yarn:

```bash
npm install zip-code-luxembourg
````

## Usage 
### Get Info By Zip Code

Get an array of city and address linked to a zip code.

````javascript
const {getInfoByZipCode} = require('zip-code-luxembourg');
const result = getInfoByZipCode('1234');
console.log(result);
````
#### Output
````json lines
[
  {
    "city": "LUXEMBOURG",
    "street": "RUE MARGUERITE-SERAPHINE BEVING",
    "zipCode": "1234"
  }
]
````

### Get Info By City

````typescript
getInfoByCity('Sanem')
````
#### Output
````json lines
[
  {
    "city": "SANEM",
    "street": "CITE SCHMIEDENACHT",
    "zipCode": "4993"
  },
  {
    "city": "SANEM",
    "street": "COIN DU LOHR",
    "zipCode": "4987"
  }
  // ... more data
]
````

## Data source
Our npm package leverages data from the [Villes, Rues et Codes Postaux de Luxembourg](https://data.public.lu/fr/datasets/villes-rues-et-codes-postaux-de-luxembourg-1/)  dataset issued by [Post Luxembourg](https://post.lu/), a comprehensive source of information on cities, streets, and postal codes in Luxembourg
The data is converted to json with `/lib/convert-csv-to-json.js`
This package will be updated along the source dataset.

## License
This package is distributed under the MIT License. See the LICENSE file for details.