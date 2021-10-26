import axios from 'axios';
import authHeader from './auth-header';
import { environment } from '../environments/environment';

const API_URL = environment.API_TERMO_URL;
const API_URL_DELETE = environment.API_URL + "usuario/excluir";

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

    async excluir() {
        return axios
            .delete(
                API_URL_DELETE ,
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
