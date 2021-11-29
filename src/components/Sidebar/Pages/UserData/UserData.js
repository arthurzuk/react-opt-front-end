import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../../../services/auth.service.js';
import UserService from '../../../../services/user.service.js';
import './UserData.css';

function addTermoAceite(params) {
  var html = [];
  params.forEach(e => {
    html.push(
      <tr>
        <td>{e.consentimentoEndereco ? "Aceito": "Não aceito"}</td>
        <td>{e.consentimentoContatoEmail ? "Aceito": "Não aceito"}</td>
        <td>{e.consentimentoContatoTel ? "Aceito": "Não aceito"}</td>
        <td>{e.criacao}</td>
        <td>{e.atualizado}</td>
      </tr>
    )
  });

  return (
    <table>
    <thead>
      <tr>
        <th>Endereco</th>
        <th>Email</th>
        <th>Telefone</th>
        <th>Data criação</th>
        <th>Data atualização</th>
      </tr>
      </thead>
    <tbody>
      {html}
    </tbody>
    </table>
  )
}

export default function UserData() {
  const [termoAceiteLista, setTermoAceiteLista] = useState([{}]);

  useEffect(() => {
    const addUserDataAPI = async () => {
      var data = await UserService.userDataGet();
      setTermoAceiteLista(data.termosUsuario);
    }
    addUserDataAPI();
  }, []);

  const history = useHistory();
  var login = AuthService.authUser();
  if (login) {
    return (
      <div id="user_data">
        {addTermoAceite(termoAceiteLista)}
      </div>
    );
  } else {
    history.push("/");
  }
}
