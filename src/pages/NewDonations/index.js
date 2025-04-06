import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { toast } from 'react-toastify';

import history from '../../services/history';

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
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataDoacao, setDataDoacao] = useState('');
  const [tipoDoacao, setTipoDoacao] = useState('');
  const [quantidadeDoacao, setQuantidadeDoacao] = useState('');
  const [valor, setValor] = useState('');
  const [descDoacao, setDescDoacao] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();
    let formErrors = false;

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
    if (!dataDoacao.trim()) {
      toast.error('Data de doação precisa ser preenchido');
      formErrors = true;
      return;
    }
    if (!tipoDoacao.trim()) {
      toast.error('Escolha o tipo de doação');
      formErrors = true;
      return;
    }

    if (tipoDoacao === 'material' && !quantidadeDoacao.trim()) {
      toast.error('Quantidade precisa ser preenchido');
      formErrors = true;
      return;
    }
    if (!valor.trim()) {
      toast.error('Valor precisa ser preenchido');
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
        dataDoacao,
        tipoDoacao,
        quantidadeDoacao,
        valor,
        descDoacao
      });
      history.goBack();
    }
  }

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
          <FormAddBeneficiario onSubmit={handleSubmitForm}>
            <BoxInputGetData>
              <div className="titleBox">
                <img src={IconUser} alt="" />
                <p>Dados do Doador</p>
              </div>

              <InputGetData
                text="Nome do Doador"
                textPlaceholder="Nome completo do doador"
                onChange={(e) => setNome(e.target.value)}
              />
              <InputGetData
                text="Email"
                textPlaceholder="example@gmail.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGetData
                text="Telefone"
                textPlaceholder="(99)99999 9999"
                onChange={(e) => setTelefone(e.target.value)}
              />
              <InputGetData
                text="Data da Doação"
                textPlaceholder="Selecione uma data"
                type="date"
                onChange={(e) => setDataDoacao(e.target.value)}
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
                  onChange={(option) => setTipoDoacao(option.value)}
                />
              </InputTypeDonate>

              {tipoDoacao === 'material' && (
                <InputGetData
                  text="Quantidade"
                  textPlaceholder="0"
                  type="number"
                  onChange={(e) => setQuantidadeDoacao(e.target.value)}
                />
              )}

              <InputGetData
                text="Valor (R$)"
                textPlaceholder="0.00"
                type="number"
                step="0.01"
                onChange={(e) => setValor(e.target.value)}
              />
              <div className="boxTextArea">
                <p>Descrição da Doação</p>
                <textarea
                  placeholder="Descreva os itens doados ou a finalidade da doação"
                  onChange={(e) => setDescDoacao(e.target.value)}></textarea>
              </div>
            </BoxInputGetData>
            <div className="actionsForm">
              <button type="submit">Registrar Doação</button>
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
