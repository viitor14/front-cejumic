import { React, useState } from 'react';
import { toast } from 'react-toastify';

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

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [skills, setSkills] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');

  const options = [
    { label: 'Dias úteis', value: 'Dias úteis' },
    { label: 'Manhãs', value: 'Manhãs' },
    { label: 'Noites', value: 'Noites' },
    { label: 'Tardes', value: 'Tardes' },
    { label: 'Finais de Semana', value: 'Finais de Semana' }
  ];

  function handleSubmitForm(e) {
    e.preventDefault();
    let formErrors = false;

    console.log(disponibilidade);

    if (!nome.trim()) {
      toast.error('Nome precisa ser preenchido');
      formErrors = true;
      return;
    }
    if (!email.trim()) {
      toast.error('Email precisa ser preenchido');
      formErrors = true;
      return;
    }
    if (!telefone.trim()) {
      toast.error('Telefone precisa ser preenchido');
      formErrors = true;
      return;
    }
    if (!endereco.trim()) {
      toast.error('Endereço precisa ser preenchido');
      formErrors = true;
      return;
    }
    if (!bairro.trim()) {
      toast.error('Bairro precisa ser preenchido');
      formErrors = true;
      return;
    }
    if (!cep.trim()) {
      toast.error('CEP precisa ser preenchido');
      formErrors = true;
      return;
    }
    if (!cidade.trim()) {
      toast.error('Cidade precisa ser preenchido');
      formErrors = true;
      return;
    }
    if (!skills.trim()) {
      toast.error('Habilidades e competências precisa ser preenchido');
      formErrors = true;
      return;
    }
    if (!disponibilidade.trim()) {
      toast.error('Escolha uma disponibilidade do voluntário');
      formErrors = true;
      return;
    }
    //Se não tiver error ele faz envio do form
    if (!formErrors) {
      toast.success('Formulario enviado');
      console.log({
        nome,
        email,
        telefone,
        endereco,
        bairro,
        cep,
        cidade,
        skills,
        disponibilidade
      });
      history.goBack();
    }
  }

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
          <FormAddBeneficiario onSubmit={handleSubmitForm}>
            <BoxInputGetData>
              <div className="titleBox">
                <img src={IconUser} alt="" />
                <p>Informações Pessoais</p>
              </div>

              <InputGetData
                text="Nome Completo"
                textPlaceholder="Nome completo do voluntário"
                onChange={(e) => setNome(e.target.value)}
              />
              <InputGetData
                text="E-mail"
                textPlaceholder="exemplo@gmail.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGetData
                text="Telefone"
                textPlaceholder="(99)99999-9999"
                onChange={(e) => setTelefone(e.target.value)}
              />

              <div className="titleBox">
                <img src={IconLocation} alt="" />
                <p>Endereço</p>
              </div>

              <InputGetData
                text="Endereço"
                textPlaceholder="Rua, numero, complemento"
                onChange={(e) => setEndereco(e.target.value)}
              />
              <InputGetData
                text="Bairro"
                textPlaceholder="Bairro"
                onChange={(e) => setBairro(e.target.value)}
              />
              <InputGetData
                text="CEP"
                textPlaceholder="CEP"
                onChange={(e) => setCep(e.target.value)}
              />
              <InputGetData
                text="Cidade"
                textPlaceholder="Cidade"
                onChange={(e) => setCidade(e.target.value)}
              />

              <div className="titleBox">
                <img src={IconSkills} alt="" />
                <p>Habilidades e Disponibilidade</p>
              </div>

              <div className="boxTextArea">
                <p>Habilidades e Competências</p>
                <textarea
                  placeholder="Descreba as habilidades e competências do voluntário"
                  onChange={(e) => setSkills(e.target.value)}></textarea>
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
                        checked={disponibilidade === opt.value}
                        onChange={() => setDisponibilidade(opt.value)}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </DivInputRadio>
            </BoxInputGetData>
            <div className="actionsForm">
              <button type="submit">Cadastrar Voluntário</button>
              <button type="button" onClick={() => history.goBack()}>
                Cancelar
              </button>
            </div>
          </FormAddBeneficiario>
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
