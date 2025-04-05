import { React, useState } from 'react';

import DataTable from '../../components/tableData';
import BoxIntroduction from '../../components/introduction';

// import FilterModal from '../../components/introduction/FilterModal';

import { PageBackground, DivMain, SectionMain } from '../../styles/GlobalStyles';

import { data, columns } from './data';

import iconRecipient from './assets/images/icon-beneficiario.png';

export default function Recipient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('');

  //OS DADOS PRECISAM SER PASSADOS POR ESSA CONSTANTE PARA FAZER COM QUE A BARRA DE PESQUISA POR NOME FUNCIONE. SOMENTE
  const filteredData = [...data]
    .filter((item) => item.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
    .filter((item) => (filterStatus ? item.infoColumn2 === filterStatus : true));

  return (
    <PageBackground>
      <DivMain>
        <SectionMain>
          <div>
            <BoxIntroduction
              icon={iconRecipient}
              alt="Icone Beneficiario"
              title="Beneficiario"
              text="Gerenciamento de beneficiários do CEJUMIC"
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              linkButtonAdd="/Novo beneficiário"
              setFilterStatus={setFilterStatus}
            />
          </div>
          <DataTable columns={columns} data={filteredData} />
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
