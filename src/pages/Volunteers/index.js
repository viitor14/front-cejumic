import { React, useState } from 'react';

import DataTable from '../../components/tableData';
import BoxIntroduction from '../../components/introduction';

import { PageBackground, DivMain, SectionMain } from '../../styles/GlobalStyles';

import iconVolunteers from './assets/images/icon-beneficiario.png';

import { data, columns } from './data';

export default function PageVolunteers() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <PageBackground>
      <DivMain>
        <SectionMain>
          <BoxIntroduction
            icon={iconVolunteers}
            alt="Icone de voluntário"
            title="Voluntários"
            text="Gerenciamento de voluntários"
            textButtonTop="Novo Voluntário"
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            linkButtonAdd="/NovoVoluntário"
          />
          <DataTable columns={columns} data={filteredData} />
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
