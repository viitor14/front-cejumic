import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Popup.css';
import { DivMain } from './styled';

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <DivMain onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <div></div>

        {children}
      </div>
    </DivMain>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Deve ser booleano e obrigatório
  onClose: PropTypes.func.isRequired, // Deve ser uma função e obrigatória
  children: PropTypes.node // Pode ser qualquer elemento renderizável
};

// Valores padrão (opcional)

export default Popup;
