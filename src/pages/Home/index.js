import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../services/axios';

import BoxIntroduction from '../../components/introduction';
import BoxContent from '../../components/boxContent';
import { PageBackground } from '../../styles/GlobalStyles';
import { DivMain, SectionMain } from './styled';
import iconDashboard from '../../assets/images/Icon-with-border.png';

export default function Home() {
  return (
    <PageBackground>
      <DivMain>
        <SectionMain>
          <BoxIntroduction
            icon="../../assets/images/Icon-with-border.png"
            title="Dashboad"
            text="Visão geral das atividades da CEJUMIC"
          />

          <BoxContent
            title="Beneficiários"
            value="312"
            percentage="+8%"
            icon="../../assets/images/icon-beneficiario.png"
          />

          <BoxContent
            title="Voluntários"
            value="33"
            percentage="+23"
            icon="../../assets/images/icon-voluntarios.png"
          />

          <BoxContent
            title="Doações (Mês)"
            value="R$15.650"
            percentage="-3%"
            icon="../../assets/images/icon-doacao.png"
            textColor="#ff0000"
          />

          <BoxContent
            title="Projetos Ativos"
            value="8"
            percentage="+25%"
            icon="../../assets/images/icon-projetos.png"
            textColor="#ff0000"
          />
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
