import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';
import Recipient from '../pages/Recipient';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Recipient} />
      <MyRoute exact path="/Dashboard" component={Home} />
      <MyRoute exact path="/Beneficiario" component={Recipient} />
      \\Para rendizarar uma rota. EXACT para rendizarar a rota com caminho especifico
      <MyRoute path="*" component={Page404} />
      \\Qualquer rota que não existir/configurada vai cair numa pagina de erro
    </Switch>
  );
}
