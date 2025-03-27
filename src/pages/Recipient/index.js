import React from 'react';
import BoxIntroduction from '../../components/introduction';
import { PageBackground, DivMain, SectionMain } from '../../styles/GlobalStyles';

import { SectionTop, SearchBar, Filter, TextInformation, TableData } from './styled';

import iconRecipient from './assets/images/icon-beneficiario.png';
import iconPlus from './assets/images/iconPlus.png';
import iconSearch from '../../assets/images/search.png';
import iconFilter from './assets/images/filter 1.png';
import iconDownArrow from './assets/images/down-arrow 1.png';
import iconUpDown from './assets/images/up-down 1.png';
import iconActions from './assets/images/png.png';

export default function Recipient() {
  return (
    <PageBackground>
      <DivMain>
        <SectionMain>
          <SectionTop>
            <BoxIntroduction
              icon={iconRecipient}
              alt="Icone Beneficiario"
              title="Beneficiario"
              text="Gerenciamento de beneficiários do CEJUMIC"
            />
            <button>
              <img src={iconPlus} alt="Icone Botão" className="iconPlus" />
            </button>

            <SearchBar>
              <div className="lupa">
                <img src={iconSearch} alt="lupa" className="searchIcon" />

                <input type="text" placeholder="Pesquisar..." className="barraPesquisa" />
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
          <TableData>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>João</span>
                  <br></br>
                  <span>232424</span>
                </td>
                <td>Inativo</td>
                <td>
                  <img src={iconActions}></img>
                </td>
              </tr>
            </tbody>
          </TableData>
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
