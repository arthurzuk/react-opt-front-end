const debug = true;

const url_prod = 'http://goapp-env.eba-bueymaei.us-east-2.elasticbeanstalk.com:8080/';
const url_dev = 'http://localhost:5000/api/'
export const environment = {
    API_URL: debug ? url_dev : url_prod,
}