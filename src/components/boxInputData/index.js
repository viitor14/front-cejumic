import { React } from 'react';
import PropTypes from 'prop-types';

import { BoxInput } from './styled';

export default function InputGetData({ text, textPlaceholder, type = 'text', value, onChange }) {
  return (
    <BoxInput>
      <div className="boxInput">
        <p>{text}</p>
        <input type={type} placeholder={textPlaceholder} onChange={onChange} />
      </div>
    </BoxInput>
  );
}

InputGetData.propTypes = {
  text: PropTypes.string,
  textPlaceholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
