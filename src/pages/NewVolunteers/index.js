import { React, useState } from 'react';

import InputGetData from '../../components/boxInputData';
import BoxIntroduction from '../../components/introduction';

import history from '../../services/history';

import {
  PageBackground,
  SectionMain,
  DivMain,
  FormAddBeneficiario,
  BoxInputGetData
} from '../../styles/GlobalStyles';

import { DivInputRadio } from './styled';

import IconVolunteer from '../Volunteers/assets/images/icon-beneficiario.png';
import IconUser from '../NewDonations/assets/images/people.png';
import IconLocation from './assets/images/location (1) 1.png';
import IconSkills from './assets/images/user-outline (1) 1 (1).png';

export default function PageNewVolunteers() {
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    { label: 'Dias úteis', value: 'Dias úteis' },
    { label: 'Manhãs', value: 'Manhãs' },
    { label: 'Noites', value: 'Noites' },
    { label: 'Tardes', value: 'Tardes' },
    { label: 'Finais de Semana', value: 'Finais de Semana' }
  ];

  return (
    <PageBackground>
      <DivMain>
        <SectionMain>
          <BoxIntroduction
            icon={IconVolunteer}
            text="Registre um novo voluntário"
            title="Novo Voluntário"
            hideSearchBarAndFilter={true}
            iconBackPage={true}
            styleButton={{ backgroundColor: 'transparent', border: '1px solid #D1D1D1' }}
          />
          {/** ABAIXO É UM FORM NORMAL, SÓ QUE ESTA COM A TAG DIFERENTE MAS RECEBE AS MESMA PROPRIEDADES */}
          <FormAddBeneficiario action="">
            <BoxInputGetData>
              <div className="titleBox">
                <img src={IconUser} alt="" />
                <p>Informações Pessoais</p>
              </div>

              <InputGetData text="Nome Completo" textPlaceholder="Nome completo do voluntário" />
              <InputGetData text="E-mail" textPlaceholder="exemplo@gmail.com" type="email" />
              <InputGetData text="Telefone" textPlaceholder="(99)99999-9999" />

              <div className="titleBox">
                <img src={IconLocation} alt="" />
                <p>Endereço</p>
              </div>

              <InputGetData text="Endereço" textPlaceholder="Rua, numero, complemento" />
              <InputGetData text="Bairro" textPlaceholder="Bairro" />
              <InputGetData text="CEP" textPlaceholder="CEP" />
              <InputGetData text="Cidade" textPlaceholder="Cidade" />

              <div className="titleBox">
                <img src={IconSkills} alt="" />
                <p>Habilidades e Disponibilidade</p>
              </div>

              <div className="boxTextArea">
                <p>Habilidades e Competências</p>
                <textarea placeholder="Descreba as habilidades e competências do voluntário"></textarea>
              </div>

              <DivInputRadio>
                <p>Disponibilidade</p>
                <div>
                  {options.map((opt, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="pagamento"
                        value={opt.value}
                        checked={selectedOption === opt.value}
                        onChange={() => setSelectedOption(opt.value)}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </DivInputRadio>
            </BoxInputGetData>
            <div className="actionsForm">
              <button>Cadastrar Voluntário</button>
              <button onClick={() => history.goBack()}>Cancelar</button>
            </div>
          </FormAddBeneficiario>
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
