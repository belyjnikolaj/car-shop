import Modal from '../Modal/Modal';
import {
  Image,
  ModalContent,
  Span,
  Title,
  Description,
  LinkBox,
  LinkStyle,
} from './CarDescription.styled';
import RentalConditions from 'components/RentalConditions/RentalConditions';
import AccessoriesFunctionalities from 'components/AccessoriesFunctionalities/AccessoriesFunctionalities';
import Details from 'components/Details/Details';

const CarDescription = ({ isModalOpen, closeModal, car }) => {
  const { year, make, model, img, description } = car;

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalContent>
        {img ? (
          <Image src={img} alt={model} width="461" height="248" />
        ) : (
          <Image
            src="https://gdr.one/simg/461x248/12141780/fff?text=No%20image"
            alt={model}
            width="461"
            height="248"
          />
        )}
        <Title>
          {make} <Span>{model}</Span>, {year}
        </Title>
        <Details car={car} />
        <Description>{description}</Description>
        <AccessoriesFunctionalities car={car} />
        <RentalConditions car={car} />
        <LinkBox>
          <LinkStyle to="tel:+380730000000">Rental car</LinkStyle>
        </LinkBox>
      </ModalContent>
    </Modal>
  );
};

export default CarDescription;
