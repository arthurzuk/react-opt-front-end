import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/termo';

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
        API_URL,
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

  async getConfigs(state) {
    return axios
      .get(API_URL, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new UserService();
