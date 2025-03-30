import { React } from 'react';
import { Link } from 'react-router-dom';

import InputGetData from '../../components/boxInputData';
import BoxIntroduction from '../../components/introduction';

import { BoxInputGetData, FormAddBeneficiario } from './styled';

import { PageBackground, DivMain, SectionMain } from '../../styles/GlobalStyles';

import IconNewBeneficiary from './assets/images/icon-beneficiario.png';
import IconUser from './assets/images/people 1.png';
import IconLocation from './assets/images/location 1.png';

export default function PageNewBeneficiary() {
  return (
    <PageBackground>
      <DivMain>
        <SectionMain>
          <BoxIntroduction
            icon={IconNewBeneficiary}
            text="Adicionar um novo beneficiário ao sistema"
            title="Novo Beneficiário"
          />

          <FormAddBeneficiario action="">
            <BoxInputGetData>
              <div className="titleBox">
                <img src={IconUser} alt="" />
                <p>Informações Pessoais</p>
              </div>

              <InputGetData text="Nome Completo" textPlaceholder="Nome completo do beneficiário" />
              <InputGetData text="CPF" textPlaceholder="000.000.000-00" />
              <InputGetData
                text="Data de Nascimento"
                textPlaceholder="Selecione uma data"
                type="date"
              />

              <div className="titleBox">
                <img src={IconLocation} alt="" />
                <p>Endereço</p>
              </div>

              <InputGetData text="Endereço" textPlaceholder="Rua, numero, complemento" />
              <InputGetData text="Bairro" textPlaceholder="Bairro" />
              <InputGetData text="CEP" textPlaceholder="CEP" />
              <InputGetData text="Cidade" textPlaceholder="Cidade" />
              <InputGetData text="Estado" textPlaceholder="Estado" />
              <div className="boxTextArea">
                <p>Observações</p>
                <textarea placeholder="Informações adicionais sobre o beneficiário"></textarea>
              </div>
            </BoxInputGetData>
            <div className="actionsForm">
              <button>Salvar beneficiário</button>
              <Link to="/Beneficiario">Cancelar</Link>
            </div>
          </FormAddBeneficiario>
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
