import styled from 'styled-components';

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

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
  padding: 16px;
  
`;

export const Logo = styled.img`
  margin-bottom: 16px;
`;

export const Map = styled.div`
  background-color: #000;
  width: calc(100vw - 360px);
  height: 100vh;
`;