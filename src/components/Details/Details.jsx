import { extractCountryAndCity, formattedTypeText } from 'helpers/helpersStyle';

import { Section, List, Item } from './Details.styled';

const Details = ({ car }) => {
  const { id, year, type, fuelConsumption, engineSize, address } = car;
  const { country, city } = extractCountryAndCity(address);
  return (
    <Section>
      <List>
        <Item>{city}</Item>
        <Item>{country}</Item>
        <Item>Id:{id}</Item>
        <Item>Year: {year}</Item>
        <Item>Type: {formattedTypeText(type)}</Item>
      </List>
      <List>
        <Item>Fuel Consumption: {fuelConsumption}</Item>
        <Item>Engine Size: {engineSize}</Item>
      </List>
    </Section>
  );
};

export default Details;
