import styled from 'styled-components';
import { secundaryColor } from '../../config/colors';
export const Head = styled.header`
  display: flex; /* flex */
  align-items: center; /* items-center */
  justify-content: space-between; /* justify-between */
  padding: 1rem; /* p-4 (1rem = 16px) */
  background-color: white; /* bg-white */
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */

  .menuIcon {
    width: 32px;
    height: 32px;
  }

  .notification {
    height: 2rem; /* h-8 (2rem = 32px) */
    width: 2.25rem;
  }
`;

export const Container = styled.div`
  max-width: 100%; /* container (por padrão, o container do Tailwind tem largura máxima responsiva) */
  padding: 16px; /* p-4 (1rem = 16px) */
  margin-left: auto;
  margin-right: auto;

  .lupa {
    display: flex; /* flex */
    align-items: center; /* items-center */
    padding: 0.5rem; /* p-2 (0.5rem = 8px) */
    margin-left: auto; /* mx-auto */
    margin-right: auto; /* mx-auto */
    background-color: #f3f4f6; /* bg-gray-100 */
    border-radius: 9999px; /* rounded-full */
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
    max-width: 16rem; /* max-w-64 (16rem = 256px) */
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
