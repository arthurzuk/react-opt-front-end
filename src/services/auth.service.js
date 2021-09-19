import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/';

class AuthService {
  async login(email, password) {
    return axios
      .post(API_URL + 'signin', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  async cadastro(email, password, endereco, cidade, estado) {
    return axios
      .post(API_URL + 'signup', {
        email,
        password,
        endereco,
        cidade,
        estado,
      })
      .then((response) => {
        return response.data;
      });
  }

  

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();
