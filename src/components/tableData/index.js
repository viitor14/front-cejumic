import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisH } from 'react-icons/fa';

import { TableData, DivData, ButtonNavPagination, ButtonNextPage } from './styled';

export default function DataTable({ columns, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calcular os índices dos itens a serem exibidos
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Função para mudar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calcular o número total de páginas
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calcular o número total de itens
  const totalItems = data.length;

  // Função para gerar os números das páginas
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Calcular o intervalo de exibição atual
  const startItem = indexOfFirstItem + 1;
  const endItem = Math.min(indexOfLastItem, totalItems);

  return (
    <DivData>
      <TableData>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td className="columnName">
                <span>{item.name}</span>
                {item.tel && (
                  <>
                    <br />
                    <span className="tel">{item.tel}</span>
                  </>
                )}
              </td>

              <td className="dataColumn2">
                <span className={item.infoColumn2}>
                  {typeof item.infoColumn2 === 'number'
                    ? `R$${item.infoColumn2.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                    : item.infoColumn2}
                </span>
              </td>

              <td className="dataColumn3">
                {item.infoColumn3 ? (
                  <span className={item.infoColumn3}>{item.infoColumn3}</span>
                ) : (
                  <button>
                    <FaEllipsisH />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </TableData>

      {/* Botões de navegação */}
      <p>
        Exibindo <span>{endItem}</span> de <span>{totalItems}</span> beneficiários
      </p>
      <ButtonNavPagination className="pagination">
        <ButtonNextPage onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </ButtonNextPage>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? 'active' : 'buttonNumberPage'}>
            {number}
          </button>
        ))}

        <ButtonNextPage
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}>
          Próxima
        </ButtonNextPage>
      </ButtonNavPagination>
    </DivData>
  );
}

DataTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tel: PropTypes.string,
      infoColumn2: PropTypes.string,
      infoColumn3: PropTypes.string,
      iconActions: PropTypes.string
    })
  ).isRequired
};
