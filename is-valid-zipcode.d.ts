/**
 * Checks if the given zipcode is valid for the country. Defaults to US if no country is given.
 * @param zipcode The zip or postal code to validate.
 * @param country Optional, the 2-digit ISO country code. Defaults to 'US'.
 * @throws {ReferenceError} When passed an invalid country code.
 * @throws {TypeError} When the country does not have a zip or postal codes.
 */
declare function isValidZipCode(zipcode: string, country?: string): boolean; 

export = isValidZipCode;