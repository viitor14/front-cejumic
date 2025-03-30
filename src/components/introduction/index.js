import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { SectionTop, SearchBar, Filter, Introduction, DashboardContainer } from './styled';

import iconPlus from './assets/images/iconPlus.png';
import iconSearch from './assets/images/search.png';
import iconFilter from './assets/images/filter 1.png';
import iconDownArrow from './assets/images/down-arrow 1.png';
import iconUpDown from './assets/images/up-down 1.png';

export default function BoxIntroduction({
  icon,
  alt,
  title,
  text,
  textButtonTop,
  searchTerm,
  setSearchTerm,
  linkButtonAdd
}) {
  return (
    <SectionTop>
      <Introduction>
        <img src={icon} alt="icon-dashboard" />

        <DashboardContainer>
          <h2>{title}</h2>
          <p>{text}</p>
        </DashboardContainer>
      </Introduction>

      <Link to={linkButtonAdd}>
        <button>
          <img src={iconPlus} alt="Icone Botão" className="iconPlus" />
          {textButtonTop && (
            <>
              <span>{textButtonTop}</span>
            </>
          )}
        </button>
      </Link>

      <SearchBar>
        <div className="lupa">
          <img src={iconSearch} alt="lupa" className="searchIcon" />

          <input
            type="text"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="barraPesquisa"
          />
        </div>
      </SearchBar>

      <Filter>
        <button>
          <img src={iconFilter} alt="" />
          <img src={iconDownArrow} alt="" />
        </button>
        <button>
          <img src={iconUpDown} alt="" />
          <img src={iconDownArrow} alt="" />
        </button>
      </Filter>
    </SectionTop>
  );
}
BoxIntroduction.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkButtonAdd: PropTypes.string,
  textButtonTop: PropTypes.string
};
