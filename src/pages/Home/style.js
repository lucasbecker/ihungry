import styled from 'styled-components';
import Slider from 'react-slick';


export const ContainerWrapper = styled.div`
  display: flex;
`;

export const Sidebar = styled.aside`
  background-color: ${ props => props.theme.colors.background };
  width: 360px;
  height: 100vh;
  overflow-y: auto;

  //Estilizando scroll
  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
      width: 6px;
      background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
      background: #dad7d7;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
  padding: 16px;
  
  overflow-x: hidden;
`;

export const Logo = styled.img`
  margin: 16px 0;
`;

export const CarouselTitle = styled.h2`
  font-family: ${ props => props.theme.fonts.regular };
  color: ${ props => props.theme.colors.text };
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;

export const Map = styled.div`
  background-color: #000;
  width: calc(100vw - 360px);
  height: 100vh;
`;