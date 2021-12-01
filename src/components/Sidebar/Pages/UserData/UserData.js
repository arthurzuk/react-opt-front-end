import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../../../../services/auth.service.js";
import UserService from "../../../../services/user.service.js";
import "./UserData.css";

function addTermoAceite(termos) {
  var html = [];
  termos.forEach((e) => {
    html.push(
      <tr>
        <td>{e.consentimentoEndereco ? "Aceito" : "Não aceito"}</td>
        <td>{e.consentimentoContatoEmail ? "Aceito" : "Não aceito"}</td>
        <td>{e.consentimentoContatoTel ? "Aceito" : "Não aceito"}</td>
        <td>{e.criacao}</td>
        <td>{e.atualizado ? e.atualizado : "----"}</td>
      </tr>
    );
  });

  return (
    <table class="tabela">
      <thead>
        <tr>
          <th>Endereco</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Data criação</th>
          <th>Data atualização</th>
        </tr>
      </thead>
      <tbody>{html}</tbody>
    </table>
  );
}

function addAgendamento(agendamento, personal) {
  var html = [];
  agendamento.forEach((e) => {
    html.push(
      <tr>
        <td>
          {e.data} / {e.diasSemana ? e.diasSemana.diasSemana : "---"}
        </td>
        <td>
          {e.horarioInicio} / {e.horarioFim}
        </td>
        <td>{e.observacao}</td>
        <td>
          {e.agendamentoStatus ? e.agendamentoStatus.agendamentoStatus : "---"}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div>
        <p>Personal: {personal.nomePersonal}</p>
        <p>Email contato: {personal.emailPersonal}</p>
        <p>Formação/Especialização: {personal.formacao}</p>
      </div>
      <table class="tabela">
        <thead>
          <tr>
            <th>Data / Dia da semana</th>
            <th>Início / Fim</th>
            <th>Observação</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{html}</tbody>
      </table>
    </div>
  );
}

function addDados(data) {
  return (
    <div>
      <b>Nome</b>: {data.nome}<br/>
      <b>Email</b>: {data.email}<br/>
      <b>Data nascimento</b>: {data.dataNascimento}<br/>
    </div>
  )
}

export function UserData() {
  const [termoAceiteLista, setTermoAceiteLista] = useState([]);
  const [allData, setAllData] = useState({});
  const [agendamento, setAgendamento] = useState([{}]);
  const [personalTrainer, setPersonalTrainer] = useState({});
  const history = useHistory();
  var login = AuthService.authUser();

  useEffect(() => {
    if (login) {
      const addUserDataAPI = async () => {
        var data = await UserService.userDataGet();
        setAllData(data);
        setTermoAceiteLista(data.termosUsuario);
        setAgendamento(data.agendamento);
        setPersonalTrainer(data.personalTrainer);
      };
      addUserDataAPI();
    } else {
      history.push("/");
    }
  }, []);

  return (
    <div id="user_data">
      <div>
        <h4>Seus dados</h4>
        {addDados(allData)}
        </div>
      <br/>
      <div>
        <h4>Agendamentos</h4>
        {addAgendamento(agendamento, personalTrainer)}
        </div>
      <br/>
      <div>
      <h4>Histórico Termo de Aceite</h4>
        {addTermoAceite(termoAceiteLista)}
      </div>
    </div>
  );
}
