export type zipCodeInfo = {
    zipCode: string,
    street: string,
    city: string
};

export function getInfoByZipCode(zipCode: string): zipCodeInfo[];
export function getInfoByCity(city: string): zipCodeInfo[];