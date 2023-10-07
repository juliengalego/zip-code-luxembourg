const fs = require('fs');
const data = require('../data/data.json');

function getInfoByZipCode(zipCode) {
    return data.filter((row) => row.zipCode === zipCode.toUpperCase());
}

function getInfoByCity(city) {
    return data.filter((row) => row.city === city.toUpperCase());
}

module.exports = {
    getInfoByZipCode,
    getInfoByCity,
};
