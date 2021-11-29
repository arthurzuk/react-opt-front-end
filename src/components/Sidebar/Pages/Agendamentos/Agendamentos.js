import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../../../services/auth.service.js';
import UserService from '../../../../services/user.service.js';
import './Agendamentos.css';

function addTermoAceite(params) {
  var html = [];

  //um html.push por atributo
  params.forEach((e) => {
    html.push(<div>{e.consentimentoEndereco}</div>);
    html.push(<div>{e.consentimentoContatoEmail}</div>);
    html.push(<div>{e.consentimentoContatoTel}</div>);
    html.push(<div>{e.criacao}</div>);
    html.push(<div>{e.atualizado}</div>);
  });

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

export function Agendamentos() {
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

  return <div id="user_data"></div>;
}
