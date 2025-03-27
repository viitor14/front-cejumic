import styled from 'styled-components';

export const SectionTop = styled.section`
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding-bottom: 21px;
  border-bottom: 1px solid rgba(209, 209, 209, 1);
  //margin-bottom: 21px;

  button {
    background: rgba(0, 128, 255, 1);
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .iconPlus {
    height: 20px;
    width: 20px;
  }
`;

export const SearchBar = styled.div`
  max-width: 100%; /* container (por padrão, o container do Tailwind tem largura máxima responsiva) */
  border: 1px solid rgba(209, 209, 209, 1);
  border-radius: 10px;
  .lupa {
    display: flex; /* flex */
    align-items: center; /* items-center */
    padding: 0.5rem; /* p-2 (0.5rem = 8px) */
    background-color: #f3f4f6; /* bg-gray-100 */
    border-radius: 9999px; /* rounded-full */
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
    max-width: 100%; /* max-w-64 (16rem = 256px) */
  }

  .searchIcon {
    width: 1.25rem; /* w-5 (1.25rem = 20px) */
    height: 1.25rem; /* h-5 (1.25rem = 20px) */
    margin-left: 0.5rem;
  }

  .barraPesquisa {
    flex-grow: 1; /* flex-grow */
    padding-left: 1rem; /* px-4 (1rem = 16px) */
    padding-right: 1rem; /* px-4 (1rem = 16px) */
    padding-top: 1px; /* py-px (1px) */
    padding-bottom: 1px; /* py-px (1px) */
    background-color: transparent;
    border: none;
  }

  .barraPesquisa:focus {
    outline: none;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: none;
    width: 50%;
    border: 1px solid rgba(209, 209, 209, 1);
  }

  img {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

export const TextInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  color: #727278;
  padding-bottom: 21px;
  border-bottom: 1px solid rgba(209, 209, 209, 1);
`;

export const TableData = styled.table`
  width: 100%;
  border-collapse: collapse;
  //border-spacing: 0 21px;

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

  .dataColumn2 span {
    padding: 10px 5px;
    border-radius: 10px;
    background: #d1fae5;
  }
`;
