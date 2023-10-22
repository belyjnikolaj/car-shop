export const formattedTypeText = type => {
  return type.toLowerCase().replace(/^\w/, c => c.toUpperCase());
};

export function extractCountryAndCity(address) {
  const companyAddress = address.split(',');
  const country = companyAddress[2];
  const city = companyAddress[1];
  return { country, city };
}

export function parseRentalConditions(rentalConditions) {
  return rentalConditions.split('\n');
}
