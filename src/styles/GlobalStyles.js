import { styled, createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  :root{
    --toastify-icon-color-success: white;
    --toastify-icon-color-error: white;
  }

  * {
    margin:0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Poppins', 'sans-serif';
  }

  body{
    font-family: 'Poppins', 'sans-serif';
    background-color: ${colors.primaryColor};
    color: #000;
  }

  html, body, #root{
    height: 100%;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 10px;
  }

  a{
    display: flex;
    width: fit-content;
    text-decoration: none;
    color: #000;
    text-align: center;
  }

  ul {
    list-style: none;
  }

  //Mudar css do Toastify
  body .Toastify .Toastify__toast-container .Toastify__toast--success{
    background: ${colors.succesColor};
    color: #fff;
  }

  .Toastify__progress-bar--success {
  background: white;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error{
    background: ${colors.errorColor};
  }

  .Toastify__progress-bar--error {
    background: white;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background-color: white;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const PageBackground = styled.div`
  width: 100%;
  height: 100%;
`;

export const DivMain = styled.div`
  padding: 16px;
`;

export const SectionMain = styled.section`
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding: 4px;
`;
