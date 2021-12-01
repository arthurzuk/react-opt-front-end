import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/auth.service.js';
import { Backup } from './Pages/Backup/Backup';
import { Dev } from './Pages/Dev/Dev';
import { Security } from './Pages/Security';
import { UserData } from './Pages/UserData/UserData';

function Sidebar_Component(admin, login, setState) {
  return (
    <div style={{ width: '200px' }}>
      <div style={{ margin: '10px' }} onClick={() => setState('1')}>
        Segurança e Privacidade
      </div>
      {login && (
        <div style={{ margin: '10px' }} onClick={() => setState('3')}>
          Dados do usuário
        </div>
      )}
      {admin && (
        <div style={{ margin: '10px' }} onClick={() => setState('4')}>
          Criação de Conta Dev
        </div>
      )}
      {admin && (
        <div style={{ margin: '10px' }} onClick={() => setState('5')}>
          Envio de Emails
        </div>
      )}
    </div>
  );
}

function loadTab(state) {
  switch (state) {
    case '1':
      return <Security />;
    case '3':
      return <UserData />;
    case '4':
      return <Dev />;
    case '5':
      return <Backup />;

    default:
      return <Security />;
  }
}

export default function Sidebar() {
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState('1');
  var login = AuthService.authUser();
  if (login) {
    var admin = login.autorizacao === 'ROLE_ADMIN';
    return (
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto 1fr' }}
        className="main_container"
      >
        {Sidebar_Component(admin, login, setCurrentTab)}
        {loadTab(currentTab)}
      </div>
    );
  } else {
    history.push('/');
    alert('Faça o login para acessar essa página.');

    return <div />;
  }
}
