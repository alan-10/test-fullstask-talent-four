import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_VUE_APP_API

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Adiciona um interceptador na resposta
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});


export default axios;