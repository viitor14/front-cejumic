import { React, useState } from 'react';

import DataTable from '../../components/tableData';
import BoxIntroduction from '../../components/introduction';
import { PageBackground, DivMain, SectionMain } from '../../styles/GlobalStyles';

import { SectionTop, SearchBar, Filter } from './styled';

import iconRecipient from './assets/images/icon-beneficiario.png';
import iconPlus from './assets/images/iconPlus.png';
import iconSearch from '../../assets/images/search.png';
import iconFilter from './assets/images/filter 1.png';
import iconDownArrow from './assets/images/down-arrow 1.png';
import iconUpDown from './assets/images/up-down 1.png';
import iconActions from './assets/images/png.png';

export default function Recipient() {
  const columns = ['Nome', 'Status', 'Ações']; // Definição das colunas
  const data = [
    { name: 'João', tel: '343432', infoColumn2: 'Ativo' },
    { name: 'Maria', tel: '987654', infoColumn2: 'Inativo' },
    { name: 'Pedro', tel: 81996912012, infoColumn2: 'Inativo' },
    { name: 'Ana', tel: '987654321', infoColumn2: 'Ativo' },
    { name: 'Carlos', tel: '912345678', infoColumn2: 'Ativo' },
    { name: 'Julia', tel: '987654123', infoColumn2: 'Inativo' },
    { name: 'Lucas', tel: '923456789', infoColumn2: 'Ativo' },
    { name: 'Fernanda', tel: '876543210', infoColumn2: 'Inativo' },
    { name: 'Roberto', tel: '932845671', infoColumn2: 'Inativo' },
    { name: 'Mariana', tel: '987654765', infoColumn2: 'Ativo' },
    { name: 'Fernanda', tel: '876543210', infoColumn2: 'Inativo' },
    { name: 'Fernanda', tel: '876543210', infoColumn2: 'Inativo' },
    { name: 'Fernanda', tel: '876543210', infoColumn2: 'Inativo' },
    { name: 'Fernanda', tel: '876543210', infoColumn2: 'Inativo' },
    { name: 'Carlos', tel: '912345678', infoColumn2: 'Ativo' },
    { name: 'Carlos', tel: '912345678', infoColumn2: 'Ativo' },
    { name: 'Carlos', tel: '912345678', infoColumn2: 'Ativo' },
    { name: 'Carlos', tel: '912345678', infoColumn2: 'Ativo' },
    { name: 'Carlos', tel: '912345678', infoColumn2: 'Ativo' }
  ];

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
          <DataTable
            columns={columns}
            data={data.map((item) => ({ ...item, iconActions: iconActions }))}
          />
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
