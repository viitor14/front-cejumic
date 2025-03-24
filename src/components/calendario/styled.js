import styled from 'styled-components';

export const paragrafo = styled.p`
  color: red;
`;

export const DivMain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.84);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  div {
    background: rgb(90, 80, 80);
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    position: relative;
  }
`;
