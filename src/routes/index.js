import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Dashboard from '../pages/Dashboard';
import Recipient from '../pages/Recipient';
import Donations from '../pages/Donations';
import Volunteers from '../pages/Volunteers';
import NewBenefiaciary from '../pages/NewBeneficiary';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={NewBenefiaciary} />
      <MyRoute exact path="/Dashboard" component={Dashboard} />
      <MyRoute exact path="/Beneficiario" component={Recipient} />
      <MyRoute exact path="/Doações" component={Donations} />
      <MyRoute exact path="/Voluntários" component={Volunteers} />
      <MyRoute exact path="/Novo beneficiário" component={NewBenefiaciary} />
      \\Para rendizarar uma rota. EXACT para rendizarar a rota com caminho especifico
      <MyRoute path="*" component={Page404} />
      \\Qualquer rota que não existir/configurada vai cair numa pagina de erro
    </Switch>
  );
}
