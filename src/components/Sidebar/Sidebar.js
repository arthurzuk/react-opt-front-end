import React from 'react';
import { Security } from './Pages/Security';
import AuthService from '../../services/auth.service.js';
import { useHistory } from 'react-router-dom';

export default function Sidebar() {
  const history = useHistory();
  var login = AuthService.getCurrentUser();

  if (login == true) {
    return (
      <div class="main_container">
        <Security />
      </div>
    );
  } else {
    history.push('/');
    alert('Faça o login para acessar essa página.');

    return <div />;
  }
}
