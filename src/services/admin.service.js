import axios from 'axios';
import authHeader from './auth-header';
import { environment } from '../environments/environment';

const API_URL = environment.API_URL;

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
    return axios.post(API_URL + 'admin/termo/enviar-emails', {})
    .then(response => {
      return response
    })
  }

}


  

export default new AdminService();
