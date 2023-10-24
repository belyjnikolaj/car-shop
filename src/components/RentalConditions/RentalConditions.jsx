import { parseRentalConditions } from 'helpers/helpersStyle';

import { Span, Subject, Section, List, Item } from './RentalConditions.styled';

const RentalConditions = ({ car }) => {
  const { rentalPrice, rentalConditions, mileage } = car;
  const conditionsArray = parseRentalConditions(rentalConditions);
  const minimumAge = conditionsArray[0];
  const ageParts = minimumAge.split(': ');
  const ageValue = ageParts[1];
  const formattedMileage = mileage.toLocaleString('en-US', {
    useGrouping: true,
  });

  const formattedPrice = rentalPrice.replace(/(\$)(\d+)/, '$2$$');

  return (
    <Section>
      <Subject>Rental Conditions:</Subject>
      <List>
        <Item>
          Minimum age : <Span>{ageValue}</Span>
        </Item>
        <Item>{conditionsArray[1]}</Item>
      </List>
      <List>
        <Item>{conditionsArray[2]}</Item>
        <Item>
          Mileage: <Span>{formattedMileage}</Span>
        </Item>
        <Item>
          Price: <Span>{formattedPrice}</Span>
        </Item>
      </List>
    </Section>
  );
};

export default RentalConditions;
