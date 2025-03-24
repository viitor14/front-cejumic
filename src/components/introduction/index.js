import React from 'react';
import PropTypes from 'prop-types';

import { Introduction, DashboardContainer } from './styled';

export default function BoxIntroduction({ icon, alt, title, text }) {
  return (
    <Introduction>
      <img src={icon} alt="icon-dashboard" />

      <DashboardContainer>
        <h2>{title}</h2>
        <p>{text}</p>
      </DashboardContainer>
    </Introduction>
  );
}
BoxIntroduction.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
