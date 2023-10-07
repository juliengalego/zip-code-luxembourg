const {getInfoByCity,getInfoByZipCode} =  require('../lib/index.js');

describe('ZipCodeLuxembourg', () => {
    it('should return information for a valid zip code', () => {
        const sampleZipCode = '1234';
        const result = getInfoByZipCode(sampleZipCode);
        const allHaveSameZipCode = result.every((item) => item.zipCode === sampleZipCode);
        expect(result).toEqual([{ zipCode: '1234', street: 'RUE MARGUERITE-SERAPHINE BEVING', city: 'LUXEMBOURG' }]);
        expect(allHaveSameZipCode).toBe(true);
    });

    it('should return empty array for an invalid zip code', () => {
        const result = getInfoByZipCode('ABC');
        expect(result).toEqual([]);
    });

    it('should return multiple results for a valid city', () => {
        const sampleCity = 'Sanem';
        const result = getInfoByCity(sampleCity);
        const allHaveSanemCity = result.every((item) => item.city === sampleCity.toUpperCase());
        expect(result.length).toBeGreaterThan(1);
        expect(allHaveSanemCity).toBe(true);
    });
});