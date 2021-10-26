import React from 'react';
import { Security } from './Pages/Security';
import AuthService from '../../services/auth.service.js';
import { useHistory } from 'react-router-dom';

export default function Sidebar() {
  const history = useHistory();
  var user = AuthService.authUser();

  if (user) {
    return (
      <div className="main_container">
        <Security />
      </div>
    );
  } else {
    history.push('/');
    alert('Faça o login para acessar essa página.');

    return <div />;
  }
}
