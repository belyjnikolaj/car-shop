import fon from 'assets/S.png';

import {
  FonUrl,
  BoxFon,
  Text,
  TextOfCatalog,
  TextOfFavorites,
  TextDropdown,
  TextDropdownBrand,
  TextDropdownPrice,
  TextDropdownMileage,
} from './Fon.styled';

const Fon = () => {
    return (
      <BoxFon>
        <FonUrl src={fon} alt="many cars" />
        <Text>
          "Car Shop" is an application that allows you to browse and rent cars
          in Ukraine.
        </Text>
        <TextOfCatalog>
          Here you can browse a catalog of cars with various configurations and
          filter them by different parameters such as brand, hourly rental
          price, and car mileage.
        </TextOfCatalog>
        <TextOfFavorites>
          Additionally, you can add advertisements to your favorites and view
          them on the respective page.
        </TextOfFavorites>
        <TextDropdown>Search by:</TextDropdown>
        <TextDropdownBrand>by brand</TextDropdownBrand>
        <TextDropdownPrice>by price</TextDropdownPrice>
        <TextDropdownMileage>by mileage</TextDropdownMileage>
      </BoxFon>
    );
};
export default Fon;
