import styled from 'styled-components';

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
  return (
    <Item img={image} > 
      <Label>{title}</Label>
    </Item>
  );
}

export default CarouselItem;