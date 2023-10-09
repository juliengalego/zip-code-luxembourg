const fs = require('fs');
const data = require('../data/data.json');

function getInfoByZipCode(zipCode) {
    return data.filter((row) => row.zipCode === zipCode.toUpperCase());
}

function getInfoByCity(city) {
    return data.filter((row) => row.city.toUpperCase() === city.toUpperCase());
}

function getInfos(filter) {
    const filteredRow = [];

    data.forEach((row) => {
        if (
            (!filter?.zipCode || row.zipCode === filter.zipCode) &&
            (!filter?.street || row.street.toUpperCase() === filter.street.toUpperCase()) &&
            (!filter?.city || row.city.toUpperCase() === filter.city.toUpperCase()) &&
            (!filter?.district || row.district.toUpperCase() === filter.district.toUpperCase()) &&
            (!filter?.municipality || row.municipality.toUpperCase() === filter.municipality.toUpperCase()) &&
            (!filter?.canton || row.canton.toUpperCase() === filter.canton.toUpperCase())
        ) {
            if (!filteredRow.includes(row)) {
                filteredRow.push(row);
            }
        }
    });
    return filteredRow;
}


module.exports = {
    getInfoByZipCode,
    getInfoByCity,
    getInfos,
};
