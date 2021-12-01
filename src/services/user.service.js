import axios from 'axios';
import { environment } from '../environments/environment';
import authHeader from './auth-header';

const API_URL = environment.API_URL;

//código para conectar com o backend

class UserService {
  async update(state) {
    var {
      consentimentoNotificacaoEmail,
      consentimentoConfirmacaoEmail,
      consentimentoNotificacaoSms,
      consentimentoConfirmacaoSms,
      email,
      telefone,
      endereco,
    } = state;
    return axios
      .put(
        API_URL + 'termo',
        {
          consentimentoNotificacaoEmail,
          consentimentoConfirmacaoEmail,
          consentimentoNotificacaoSms,
          consentimentoConfirmacaoSms,
          email,
          telefone,
          endereco,
        },
        {
          headers: authHeader(),
        }
      )
      .then((response) => {
        return response.data;
      });
  }

  async excluir() {
    return axios
      .delete(API_URL + 'usuario/excluir', {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  async getConfigs(state) {
    return axios
      .get(API_URL + 'usuario/termo', {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  async userDataGet() {
    return axios
      .get(API_URL + 'usuario/relatorio', {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  async getNotify() {
    return axios
      .get(API_URL + 'usuario/checar/termo', {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new UserService();
