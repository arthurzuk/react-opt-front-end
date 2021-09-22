import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api/test/';

//código para conectar com o backend

class UserService {
  async update(state) {
    return axios
      .post(API_URL + 'update', {
        headers: authHeader(),
        args: state,
      })
      .then((response) => {
        return response.data;
      });
  };

  async getConfigs(state) {
    return axios
      .post(API_URL + 'getConfigs', {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  };
}


  

export default new UserService();
