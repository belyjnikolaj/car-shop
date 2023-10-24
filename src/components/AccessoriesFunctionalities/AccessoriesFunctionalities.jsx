import {
  Subject,
  Section,
  List,
  Item,
} from './AccessoriesFunctionalities.styled';

const AccessoriesFunctionalities = ({ car }) => {
  const { accessories, functionalities } = car;

  return (
    <Section>
      <Subject>Accessories and functionalities:</Subject>
      <List>
        {accessories.map(item => (
          <Item key={item} title={item}>
            {item}
          </Item>
        ))}
      </List>
      <List>
        {functionalities.map(item => (
          <Item key={item} title={item}>
            {item}
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default AccessoriesFunctionalities;
