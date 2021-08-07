import axios from 'axios';

export const config = {
  base: 'https://dev4.kqwest.com/sijing',
  api: '/wp-json/wc/v3',
  key: 'ck_354a2550f86709b993951cc565a3274fb6fcf462',
  secret: 'cs_63dc11a90afd5523ac8999cdd5b9342518b255ba'
};

const get = (path, body) => {
  const url = `${config.base}${config.api}${path}`;
  return axios.get(url, {params:{...body, consumer_key: config.key, consumer_secret: config.secret}});
};

const post = (path, body) => {
  const url = `${config.base}${config.api}${path}`;
  return axios.post(url, {}, {params:{...body, consumer_key: config.key, consumer_secret: config.secret}});
};

const put = (path, body) => {
  const url = `${config.base}${config.api}${path}`;
  return axios.put(url, body, {params:{consumer_key: config.key, consumer_secret: config.secret}});
};

const del = (path, body) => {
  const url = `${config.base}${config.api}${path}`;
  return axios.delete(url, {params:{...body, consumer_key: config.key, consumer_secret: config.secret}});
};

export default {
  get,
  post,
  put,
  del
};

//https://dev4.kqwest.com/sijing/wp-json/wc/v3/products?consumer_key=ck_354a2550f86709b993951cc565a3274fb6fcf462&consumer_secret=cs_63dc11a90afd5523ac8999cdd5b9342518b255ba