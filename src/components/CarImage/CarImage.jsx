import React, { useState, useEffect } from 'react';

import Loader from '../Loader/Loader';

import { Img } from './CarImage.styled';

const CarImage = ({ img, alt, width, height }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = img;

    image.onload = () => {
      setIsLoading(false);
    };

    image.onerror = () => {
      setIsLoading(false);
      setImageError(true);
    };
  }, [img]);

  if (isLoading) {
    return <Loader />; 
  }

  if (imageError) {
    return (
      <Img
        src="https://gdr.one/simg/274x268/12141780/fff?text=No%20image"
        alt={alt}
        width={width}
        height={height}
      />
    );
  }

  return <Img src={img} alt={alt} width={width} height={height} />;
};

export default CarImage;
