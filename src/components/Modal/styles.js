import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(78, 89,131, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-height: calc(100% - 144px);
  max-width:500px;

  padding: 16px;
  border-radius: 8px;

  background-color: #fff;
  box-shadow: 0px 0px 32px rgba(78,89,131,0.2);
`;