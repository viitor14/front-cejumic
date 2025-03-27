import styled from 'styled-components';

export const TableData = styled.table`
  width: 100%;
  border-collapse: collapse;
  //border-spacing: 0 21px;
  color:red;

  th,
  td {
    padding: 21px 0;
    text-align: left;
    vertical-align: middle; /* Alinha o conteúdo verticalmente */
    //border: 1px solid #ddd; /* Adiciona borda nas células */
    border-bottom: 1px solid rgba(209, 209, 209, 1);
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

  /* Estilo para o cabeçalho */
  th {
    padding: 21px 0;
    color: #727278;
  }

  .dataColumn2{
    border-radius:10px;
    background: #D1FAE5;
  }
`;
