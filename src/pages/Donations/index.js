import { React, useState } from 'react';

import DataTable from '../../components/tableData';
import BoxIntroduction from '../../components/introduction';

import { PageBackground, DivMain, SectionMain } from '../../styles/GlobalStyles';
import './teste.css';

import IconDonations from './assets/images/icon-doacao.png';

import { data, columns } from './data';

export default function PageDonations() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <PageBackground>
      <DivMain>
        <SectionMain>
          <div>
            <BoxIntroduction
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              icon={IconDonations}
              alt="Icone de doação"
              title="Doações"
              text="Gerenciamento de doações recebidas"
              textButtonTop="Nova Doação"
            />
          </div>
          <DataTable columns={columns} data={filteredData} />
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
