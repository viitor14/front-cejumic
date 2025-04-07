import { React, useState, useEffect } from 'react';

// IR EM services> axios.js e trocar a url
import axios from '../../services/axios';

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
  const [dados, setDados] = useState([]);
  /*
  useEffect(() => {
    async function getData() {
      const response = await axios.get('rota');
      setDados(response.data);
    }

    getData();
  }, []);
  */
  //Trocar data por dados
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
              linkButtonAdd="/NovoBeneficiário"
              setFilterStatus={setFilterStatus}
            />
          </div>
          <DataTable columns={columns} data={filteredData} />
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
