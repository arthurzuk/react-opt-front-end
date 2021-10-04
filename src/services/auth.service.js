import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

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

  async authUser(answerType) {
    return axios
      .post(API_URL + 'auth', {
        user: JSON.parse(localStorage.getItem('user')),
        answerType: answerType,
      })
      .then((response) => {
        return response;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();
