import { useDispatch } from 'react-redux';

import { fetchCars } from 'redux/cars/carsOperations';
import { Button, BoxBtn } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ page, setPage, setShowButton }) => {
  const dispatch = useDispatch();

  const handleLoadMore = async () => {
    const { payload } = await dispatch(fetchCars(page + 1));
    setPage(prevPage => prevPage + 1);
    if (payload.length >= 8) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <BoxBtn>
      <Button onClick={handleLoadMore}>Load more</Button>
    </BoxBtn>
  );
};

export default ButtonLoadMore;
