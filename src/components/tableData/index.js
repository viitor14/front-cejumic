import React from 'react';
import PropTypes from 'prop-types';

import { TableData } from './styled';

export default function Data({column, column2, column3}) {
  return (
    <TableData>
    <thead>
      <tr>
        <th>{column}</th>
        <th>{column2}</th>
        <th>{column3}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <span>João</span>
          <br></br>
          <span>232424</span>
        </td>
        <td className='dataColumn2'>Inativo</td>
        <td>
          <img src={iconActions}></img>
        </td>
      </tr>
    </tbody>
  </TableData>
  );
}

TableData.propTypes = {
  column: PropTypes.string.isRequired,
  column2: PropTypes.string,
  column3: PropTypes.string.isRequired,
};