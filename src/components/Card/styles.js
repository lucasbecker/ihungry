import styled from 'styled-components';

export const RestaurantCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 8px;
  //margin: 8px 16px 0px 16px;
  //border-radius: 8px;
  padding:16px;
  background-color: #fff;
  border-left: 4px solid #fff;
  transition: all 0.2s;
  :hover {
    border-left-color: ${props => props.theme.colors.primary};
    background-color: ${ props => props.theme.colors.background}
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 8px;
`;

export const Address = styled.p`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin-top: 8px;
`;

export const Image = styled.div`
  width: 120px;
  height: 100px;
  border-radius: 6px;

  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff; 
  text-shadow: 2px 2px 2px #000;
`;