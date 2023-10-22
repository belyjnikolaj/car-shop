import { extractCountryAndCity, formattedTypeText } from 'helpers/helpersStyle';
import {
  Section,
  List,
  Item,
  ItemFunctionalities,
} from './DetailsGallery.styled';

const DetailsGallery = ({ car }) => {
  const { model, id, functionalities, rentalCompany, type, address } = car;
  const { country, city } = extractCountryAndCity(address);
  return (
    <Section>
      <List>
        <Item>{city}</Item>
        <Item>{country}</Item>
        <Item>{rentalCompany}</Item>
      </List>
      <List>
        <Item>{formattedTypeText(type)}</Item>
        <Item>{model}</Item>
        <Item>{id}</Item>
        <ItemFunctionalities title={functionalities[0]}>
          {functionalities[0]}
        </ItemFunctionalities>
      </List>
    </Section>
  );
};

export default DetailsGallery;
