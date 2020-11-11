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

  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;

  //Estilizando scroll
  ::-webkit-scrollbar-track {
    background-color: ${ props => props.theme.colors.background };
  }
  ::-webkit-scrollbar {
      width: 6px;
      background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.primary};
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

export const Logo = styled.h1`
  margin: 16px 0;
  width: 100%;
  height: 60px;
  text-align: center;
  color: ${ props => props.theme.colors.primary };
  font-family: ${ props => props.theme.fonts.regular };
  font-size: 60px;
  font-weight: bold;
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

export const MapSection = styled.section`
  background-color: #000;
  width: calc(100vw - 360px);
  height: 100vh;

  overflow: hidden;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 16px;
  letter-spacing: 0.11px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 8px;
  letter-spacing: 0.11px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-weight: normal;
  line-height: 19px;
  font-size: 16px;
`;