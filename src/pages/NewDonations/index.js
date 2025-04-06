import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import {
  PageBackground,
  SectionMain,
  DivMain,
  FormAddBeneficiario,
  BoxInputGetData
} from '../../styles/GlobalStyles';

import { InputTypeDonate } from './styled';

import BoxIntroduction from '../../components/introduction';
import InputGetData from '../../components/boxInputData';

import IconNewDonations from '../NewDonations/assets/images/heart.png';
import IconUser from '../NewDonations/assets/images/people.png';

export default function PageNewDonations() {
  const typeDonate = [
    { value: 'dinheiro', label: 'Dinheiro' },
    { value: 'material', label: 'Material' }
  ];

  return (
    <PageBackground>
      <DivMain>
        <SectionMain>
          <BoxIntroduction
            icon={IconNewDonations}
            text="Registre uma nova doação recebida"
            title="Nova Doação"
            hideSearchBarAndFilter={true}
            iconBackPage={true}
            styleButton={{ backgroundColor: 'transparent', border: '1px solid #D1D1D1' }}
          />
          {/** ABAIXO É UM FORM NORMAL, SÓ QUE ESTA COM A TAG DIFERENTE MAS RECEBE AS MESMA PROPRIEDADES */}
          <FormAddBeneficiario action="">
            <BoxInputGetData>
              <div className="titleBox">
                <img src={IconUser} alt="" />
                <p>Dados do Doador</p>
              </div>

              <InputGetData text="Nome do Doador" textPlaceholder="Nome completo do doador" />
              <InputGetData text="Email" textPlaceholder="example@gmail.com" type="email" />
              <InputGetData text="Telefone" textPlaceholder="(99)99999 9999" />
              <InputGetData
                text="Data da Doação"
                textPlaceholder="Selecione uma data"
                type="date"
              />

              <div className="titleBox">
                <img src={IconNewDonations} alt="" />
                <p>Detalhes da Doação</p>
              </div>

              <InputTypeDonate>
                <p>Tipo de Doação</p>
                <Select
                  classNamePrefix="inputSelect"
                  options={typeDonate}
                  placeholder="Selecionar tipo de doação"
                />
              </InputTypeDonate>

              <InputGetData text="Quantidade" textPlaceholder="0" type="number" />

              <InputGetData text="Valor (R$)" textPlaceholder="0.00" type="number" step="0.01" />
              <div className="boxTextArea">
                <p>Descrição da Doação</p>
                <textarea placeholder="Descreva os itens doados ou a finalidade da doação"></textarea>
              </div>
            </BoxInputGetData>
            <div className="actionsForm">
              <button>Registrar Doação</button>
              <Link to="/Beneficiario">Cancelar</Link>
            </div>
          </FormAddBeneficiario>
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
