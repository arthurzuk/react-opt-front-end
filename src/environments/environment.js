const debug = false;

const url_prod = 'http://gymarker-env.eba-p8gqs9cs.sa-east-1.elasticbeanstalk.com/';
const url_dev = 'http://localhost:5001/api/'
export const environment = {
    API_URL: debug ? url_dev : url_prod,
}