import { React, useState } from 'react';

import DataTable from '../../components/tableData';
import BoxIntroduction from '../../components/introduction';

import { PageBackground, DivMain, SectionMain } from '../../styles/GlobalStyles';

import { data, columns } from './data';

import iconRecipient from './assets/images/icon-beneficiario.png';

export default function Recipient() {
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
              icon={iconRecipient}
              alt="Icone Beneficiario"
              title="Beneficiario"
              text="Gerenciamento de beneficiários do CEJUMIC"
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              linkButtonAdd="/Novo beneficiário"
            />
          </div>
          <DataTable columns={columns} data={filteredData} />
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
