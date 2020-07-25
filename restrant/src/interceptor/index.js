import axios from 'axios';

axios.defaults.baseURL = '/';

axios.interceptors.request.use(
  (e) => {
    const { method, params, data } = e;
    if (method === 'get') {
      e.params = {
        ...params,
        v: Date.now(),
      };
    } else {
      e.data = {
        ...data,
      };
    }
    return e;
  },
  (err) => Promise.reject(err),
);

axios.interceptors.response.use(
  (res) => {
    if (res && res.data && res.data.code) {
      if (res.data.code !== '0') {
        console.log(2);
      }
    }
    return res;
  },
  (err) => {
    if (typeof err.response === 'undefined') {
      window.location.reload();
    } else {
      console.log(1);
    }
    return Promise.reject(err);
  },
);

export default axios;
