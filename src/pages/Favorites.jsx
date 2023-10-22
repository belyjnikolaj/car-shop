import CarsList from 'components/CarsList/CarsList';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/favorite/favoriteSelectors';
import styled from 'styled-components';

const Text = styled.p`
  padding: 0px 40px;
  color: #111;
  font-size: 35px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  text-align: center;
`;

const Favorites = () => {
  const { favoriteCars } = useSelector(selectFavorite);

  return (
    <section>
      {favoriteCars.length > 0 ? (
        <CarsList carsArray={favoriteCars} />
      ) : (
        <Text>
          Your favorites list is empty. Go to the catalog to add cars to your
          favorites list.
        </Text>
      )}
    </section>
  );
};

export default Favorites;
