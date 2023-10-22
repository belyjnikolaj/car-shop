import ButtonOpenModal from 'components/BtnOpenModal/BtnOpenModal';
import {
  Icon,
  IconFavorite,
  IconWrapper,
  ImageWrapper,
  Span,
  MainInformationBox,
  Wrapper,
} from './CarItem.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarById } from 'redux/cars/carsOperations';
import CarDescription from 'components/CarDescription/CarDescription';
import { addFavorite, removeFavorite } from 'redux/favorite/favoriteSlice';
import DetailsGallery from 'components/DetailsGallery/DetailsGallery';


import { selectFavorite } from 'redux/favorite/favoriteSelectors';
import CarImage from 'components/CarImage/CarImage';

const CarItem = ({ car }) => {
  const { year, make, model, img, rentalPrice } = car;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { favoriteCars } = useSelector(selectFavorite);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favoriteCars.some(favCar => favCar.id === car.id)) {
      setIsFavorite(true);
    }
  }, [favoriteCars, car]);

  const openModal = () => {
    setIsModalOpen(true);
    dispatch(fetchCarById(car.id));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleToFavorite = e => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);

    if (favoriteCars.some(favCar => favCar.id === car.id)) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <Wrapper>
      <ImageWrapper onClick={openModal}>
        <IconWrapper onClick={handleToFavorite}>
          {isFavorite ? (
            <IconFavorite width={20} height={20} />
          ) : (
            <Icon width={20} height={20} />
          )}
        </IconWrapper>
        <CarImage img={img} alt={model} width={274} height={268} />
      </ImageWrapper>

      <MainInformationBox>
        <h2>
          {make} <Span>{model}</Span>, {year}
        </h2>
        <p>{rentalPrice}</p>
      </MainInformationBox>
      <DetailsGallery car={car} />
      <ButtonOpenModal car={car} onClick={openModal} />
      {isModalOpen && (
        <CarDescription
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          car={car}
        />
      )}
    </Wrapper>
  );
};

export default CarItem;
