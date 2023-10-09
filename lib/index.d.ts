interface IZipCodeInfo {
    zipCode: string,
    street: string,
    city: string,
    district: string,
    municipality: string,
    canton: string
}

/**
 * @deprecated Use {@link getInfos} instead
 */
export function getInfoByZipCode(zipCode: string): IZipCodeInfo[];
/**
 * @deprecated Use {@link getInfos} instead
 */
export function getInfoByCity(city: string): IZipCodeInfo[];
export function getInfos(filter?: Partial<IZipCodeInfo>): string[];