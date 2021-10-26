import axios from 'axios';

import { environment } from '../environments/environment';

const API_URL = environment.API_URL;

class AuthService {
  async login(email, password) {
    return axios
      .post(API_URL + 'login', {
        username: email,
        password: password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  async cadastro(email, password, endereco, cidade, estado) {
    return axios
      .post(API_URL + 'usuario', {
        email: email,
        senha: password,
        logradouro: endereco,
        cidade: cidade,
        ufNome: estado,
      })
      .then((response) => {
        return response;
      });
  }

  async authUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();
