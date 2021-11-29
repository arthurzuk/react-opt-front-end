import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../../../services/auth.service.js';
import UserService from '../../../../services/user.service.js';
import './UserData.css';

function addTermoAceite(e) {
  var html = [
    <div class={e.consentimentoEndereco ? 'aceito' : 'n_aceito'}>
      {e.consentimentoEndereco ? 'Aceito' : 'Não aceito'}
    </div>,
    <div class={e.consentimentoEndereco ? 'aceito' : 'n_aceito'}>
      {e.consentimentoContatoEmail ? 'Aceito' : 'Não aceito'}
    </div>,
    <div class={e.consentimentoEndereco ? 'aceito' : 'n_aceito'}>
      {e.consentimentoContatoTel ? 'Aceito' : 'Não aceito'}
    </div>,
    <div>{e.criacao}</div>,
    <div>{e.atualizado}</div>,
  ];

  return (
    <div class="wrapper">
      <div class="head">Endereco</div>
      <div class="head">Email</div>
      <div class="head">Telefone</div>
      <div class="head">Data criação</div>
      <div class="head">Data atualização</div>
      {html}
    </div>
  );
}

export function UserData() {
  const [termoAceiteLista, setTermoAceiteLista] = useState([{}]);
  const history = useHistory();
  var login = AuthService.authUser();

  useEffect(() => {
    if (login) {
      const addUserDataAPI = async () => {
        var data = await UserService.userDataGet();
        setTermoAceiteLista(data.termosUsuario);
      };
      addUserDataAPI();
    } else {
      history.push('/');
    }
  }, []);

  return <div id="user_data">{addTermoAceite(termoAceiteLista)}</div>;
}
