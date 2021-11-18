import React, { useState } from 'react';
import { Security } from './Pages/Security';
import { Dev } from './Pages/Dev/Dev';
import { Backup } from './Pages/Backup/Backup';
import AuthService from '../../services/auth.service.js';
import { useHistory } from 'react-router-dom';

function Sidebar_Component(admin, setState) {
  return (
    <div style={{ width: '200px' }}>
      <div style={{ margin: '10px' }} onClick={() => setState('1')}>
        Segurança e Privacidade
      </div>
      {admin && (
        <div style={{ margin: '10px' }} onClick={() => setState('2')}>
          Criação de Conta Dev
        </div>
      )}
      {admin && (
        <div style={{ margin: '10px' }} onClick={() => setState('3')}>
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
    case '2':
      return <Dev />;
    case '3':
      return <Backup />;
    default:
      return <Security />;
  }
}

export default function Sidebar() {
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState('1');
  var login = AuthService.authUser();
  var admin = null;
  if (login) {
    admin = login.autorizacao === 'ROLE_ADMIN';
  }

  if (login) {
    return (
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr' }}
        className="main_container"
      >
        {Sidebar_Component(admin, setCurrentTab)}
        {loadTab(currentTab)}
      </div>
    );
  } else {
    history.push('/');
    alert('Faça o login para acessar essa página.');

    return <div />;
  }
}
