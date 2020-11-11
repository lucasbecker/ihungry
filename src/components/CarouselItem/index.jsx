import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Skeleton from '../Skeleton';

const Item = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 6px;

  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.span`
  color:#fff;
  font-family: ${ props => props.theme.fonts.regular};
  font-size: 16px;
  text-shadow: 2px 2px 2px #000;
  text-align: center;
  width: inherit;
  word-wrap: break-word;
`;

function CarouselItem({ image, title }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = image;
    imageLoader.onload = () => setImageLoaded(true);
  }, [image])

  return (
    <>
    {imageLoaded ? (
      <Item img={image} > 
        <Label>{title}</Label>
      </Item>
    ) : (
      <Skeleton width='90px' height='90px' />
    )}
    </>
  );
}

export default CarouselItem;