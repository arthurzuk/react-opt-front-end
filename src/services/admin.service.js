import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/';

//código para conectar com o backend

class AdminService {
  async backup() {
    return axios
      .post(API_URL + 'backup', {

      })
      .then((response) => {
        return response;
      });
  }

  async sendMail() {
    return axios
      .post(API_URL + 'sendMail', {

      })
      .then((response) => {
        return response;
      });
  }



}


  

export default new AdminService();
