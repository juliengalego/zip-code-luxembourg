const {getInfoByCity,getInfoByZipCode} =  require('../lib/index.js');
const {getInfos} = require("../lib");

describe('Deprecated method', () => {
    it('should return information for a valid zip code', () => {
        const sampleZipCode = '1234';
        const result = getInfoByZipCode(sampleZipCode);
        const allHaveSameZipCode = result.every((item) => item.zipCode === sampleZipCode);
        expect(result).toEqual([{ zipCode: '1234', street: 'Rue Marguerite-Séraphine Beving', district:  'LUXEMBOURG',
            municipality: 'Luxembourg', city: 'Luxembourg', canton: 'LUXEMBOURG-VILLE'}]);
        expect(allHaveSameZipCode).toBe(true);
    });

    it('should return empty array for an invalid zip code', () => {
        const result = getInfoByZipCode('ABC');
        expect(result).toEqual([]);
    });

    it('should return multiple results for a valid city', () => {
        const sampleCity = 'Belvaux';
        const result = getInfoByCity(sampleCity);
        const allHaveSameCity = result.every((item) => item.city === sampleCity);
        expect(result.length).toBeGreaterThan(100);
        expect(allHaveSameCity).toBe(true);
    });
});


describe('getInfos', () => {
    it('should return all rows for one city', () => {
        const sampleCity = 'Belvaux';
        const result = getInfos({city: sampleCity});
        const allHaveSameCity = result.every((item) => item.city === sampleCity)
        expect(result.length).toBeGreaterThan(1);
        expect(allHaveSameCity).toBe(true);
    });

    it('should return all rows for one district written in lowercase', () => {
        const sampleDistrict = 'Diekirch';
        const result = getInfos({district: sampleDistrict});
        const allHaveSameDistrict = result.every((item) => item.district === sampleDistrict.toUpperCase())
        expect(result.length).toBeGreaterThan(1);
        expect(allHaveSameDistrict).toBe(true);
    });
    
    it('should return Technology Partner HQ address (all filters)', () => {
        const technologyPartnerHq = {district: 'LUXEMBOURG', canton: 'ESCH-SUR-ALZETTE'
            , municipality: 'Mondercange', city: 'Pontpierre', street: 'Rue de Luxembourg', zipCode: '4391'};
        const result = getInfos(technologyPartnerHq);
        expect(result).toEqual([technologyPartnerHq]);
    });

    it('should NOT return Technology Partner HQ address (incorrect zipCode)', () => {
        const technologyPartnerHq = {district: 'Luxembourg', canton: 'ESCH-SUR-ALZETTE'
            , municipality: 'Mondercange', city: 'Pontpierre', street: 'Rue de Luxembourg', zipCode: '777'};
        const result = getInfos(technologyPartnerHq);
        expect(result).toEqual([]);
    });


    it('should return all row', () => {
        const result = getInfos();
        expect(result.length).toBeGreaterThan(100);
    });
});


describe('readme examples', () => {
    it('should work (get by zip code)', () => {
        const result = getInfos({zipCode:'1234'});
        console.log(result);
        expect(result.length).toBe(1);
    });

    it('should work (get by city)', () => {
        const result = getInfos({city:'Belvaux'}).map((item) => item.street);
        console.log(result);
        expect(result.length).toBeGreaterThan(30);
    });
    
});