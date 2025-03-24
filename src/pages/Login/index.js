import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, DivLogin } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();
  //dispatch - usadora para disparar ações
  //ação - descrever para redux o que deve fazer

  function handleClick(e) {
    e.preventDefault();

    dispatch(actions.loginRequest());
  }
  return (
    <Container>
      <DivLogin>
        <form action="">
          <label htmlFor="nome">
            Login:
            <input type="text" name="nome" id="nome" />
          </label>

          <label htmlFor="senha">
            Senha:
            <input type="text" name="senha" id="senha" />
          </label>
        </form>
      </DivLogin>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
