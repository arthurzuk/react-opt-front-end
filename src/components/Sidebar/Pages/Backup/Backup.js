import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdminService from '../../../../services/admin.service.js';

import AuthService from '../../../../services/auth.service.js';
import { useHistory } from 'react-router-dom';

export default function Backup() {
  const history = useHistory();
  var login = AuthService.authUser('adminAuth');

  if (login === true) {
    return <div />;

    
  } 
  else {
    alert('Usuário não autenticado');
    history.push('/');
    return <div />;
  }
}
