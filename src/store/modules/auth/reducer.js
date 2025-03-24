import * as types from '../types';

const initialState = {
  botaoClicado: false,
  data: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      console.log('SUCESSO');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      newState.data = action.payload;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      console.log('Deu erro');
      return state;
    }

    case types.LOGIN_REQUEST: {
      //console.log('Estou fazendo a requesição');
      return state;
    }

    default:
      return state;
  }
}
