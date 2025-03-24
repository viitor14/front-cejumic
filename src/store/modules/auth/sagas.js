import { call, put, all, takeLatest } from 'redux-saga/effects';
//call - chama função assicrona
//put - disparar uma action
//all - Permite colocar mais de uma action
//takeLatest - Caso o usúario clique varias vezes no botão, só vai pegar o ultimo click
import { toast } from 'react-toastify';
import axios from '../../../services/axios';
import history from '../../../services/history';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* loginRequest({ payload }) {
  try {
    // yield call(requisicao);
    const id = payload;
    const response = yield call(axios.post, '/servicosTipos/', { id });
    yield put(actions.LoginSuccess(response.data));
    //toast.success('Você fez login');
    //history.push('/Home');
  } catch (e) {
    console.log(e);
    toast.error('Deu erro');
    yield put(actions.LoginFailure());
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
