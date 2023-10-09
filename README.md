# Zip Code Info

A simple npm package to retrieve zip code information for Luxembourg without external dependencies.

## Installation

To install this package, you can use npm or yarn:

```bash
npm install zip-code-luxembourg
````

## Usage 
Get postal information (district, canton, municipality, city, street) linked to a zip code.

````javascript
const {getInfos} = require('zip-code-luxembourg');
const result = getInfos({zipCode:'1234'});
console.log(result);
````
#### Output
````typescript
[
  {
    district: 'LUXEMBOURG',
    canton: 'LUXEMBOURG-VILLE',
    municipality: 'Luxembourg',
    city: 'Luxembourg',
    street: 'Rue Marguerite-Séraphine Beving',
    zipCode: '1234'
  }
]
````

### Alternative usage
You can filter by any postal information (district, canton, municipality, city, street, zip code)
For example if you want to get all the streets of one city:

````javascript
const {getInfos} = require('zip-code-luxembourg');
const result = getInfos({city:'Belvaux'}).map((item) => item.street);
console.log(result);
````

#### Output
````typescript
 [
      'Avenue du Blues',
      'Avenue du Swing',
      'Avenue Michel Majerus',
      'Belval-Rédange-Halte',
      ...
]
````

## Data source
Our npm package leverages data from the [Registre national des localités et des rues
](https://data.public.lu/fr/datasets/registre-national-des-localites-et-des-rues/#resources)  dataset issued by [Administration du cadastre et de la topographie](https://data.public.lu/fr/organizations/administration-du-cadastre-et-de-la-topographie/), a comprehensive source of information on cities, streets, and postal codes in Luxembourg
The data is converted to json with `/lib/convert-csv-to-json.js`
This package will be updated along the source dataset.

## License
This package is distributed under the MIT License. See the LICENSE file for details.