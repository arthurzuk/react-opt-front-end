import axios from 'axios';
import authHeader from './auth-header';
import { environment } from '../environments/environment';

const API_URL = environment.API_URL;

//código para conectar com o backend

class AdminService {
  async backup() {
    return axios
      .get(API_URL + 'backup', { headers: authHeader() })
      .then((response) => {
        return response;
      });
  }

  async restore() {
    return axios
      .get(API_URL + 'backup/restore', { headers: authHeader() })
      .then((response) => {
        return response;
      });
  }

  async listaUsuariosSemTermoAtualizado() {
    return axios
      .get(API_URL + 'admin/termo/listaUsuariosSemTermoAtualizado', {
        headers: authHeader(),
      })
      .then((response) => {
        return response;
      });
  }

  async sendMail() {
    return axios
      .post(
        API_URL + 'admin/termo/emailUsuariosSemTermoAtualizado',
        {},
        { headers: authHeader() }
      )
      .then((response) => {
        return response;
      });
  }

  async createDev(usuario) {
    return axios
      .post(
        API_URL + 'admin/termo/emailUsuariosSemTermoAtualizado',
        { usuario },
        { headers: authHeader() }
      )
      .then((response) => {
        return response;
      });
  }
}

export default new AdminService();
