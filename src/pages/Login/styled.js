import styled from 'styled-components';

export const Title = styled.h1`
  background: green;
`;

export const DivLogin = styled.div`
  background: gray;
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;

    input {
      height: 30px;
      width: 100%;
    }
  }
`;
