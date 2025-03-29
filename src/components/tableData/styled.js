import styled from 'styled-components';

export const DivData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;

  p {
    span {
      font-weight: 700;
    }

    color: rgba(113, 113, 122, 1);
    font-size: 12px;
  }
`;

export const TableData = styled.table`
  width: 100%;
  border-collapse: collapse;

  //border-spacing: 0 21px;
  tr {
    border-bottom: 1px solid rgba(209, 209, 209, 1);
  }

  th,
  td {
    padding: 21px 0;
    text-align: left;
    vertical-align: middle; /* Alinha o conteúdo verticalmente */
    //border: 1px solid #ddd; /* Adiciona borda nas células */
  }

  /* Estilo para o cabeçalho */
  th {
    padding: 21px 0;
    color: #727278;
  }

  td {
    font-size: 12px;
  }

  /* Se necessário, pode ajustar a largura de cada coluna */
  th:nth-child(1),
  td:nth-child(1) {
    text-align: left;
  }
  th:nth-child(2),
  td:nth-child(2) {
    text-align: center;
  }
  th:nth-child(3),
  td:nth-child(3) {
    text-align: center;
  }

  /* Alinhar conteúdo dentro do <span> */
  td span {
    display: inline-block; /* Garante que o conteúdo seja exibido inline */
  }

  td > img {
    width: 17px;
    height: 15px;
  }

  .columnName {
    > span {
      font-weight: bold;
    }

    .tel {
      margin-top: 10px;
      font-weight: 400;
      color: rgba(114, 114, 120, 1);
    }
  }

  .dataColumn2 span {
    border-radius: 10px;
    padding: 6px;
    background: #d1fae5;
    color: rgba(5, 150, 105, 1);
    font-weight: bold;
    font-size: 12px;
  }

  button {
    background: none;
  }
`;

export const ButtonNavPagination = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;

  button {
    font-size: 12px;
  }

  .active {
    font-weight: 700;
    color: rgba(0, 128, 255, 1);
    border: 1px solid rgba(196, 226, 255, 1);
    padding: 6px 10px;
  }

  .buttonNumberPage {
    padding: 6px 10px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonNextPage = styled.button`
  padding: 7px 10px;
  font-weight: 600;
  color: ${(props) => (props.disabled ? 'rgb(114, 114, 120)' : 'rgb(0, 0, 0)')};
  border: ${(props) => (props.disabled ? 'none' : '1px solid rgba(0, 0, 0, 0.2);')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
