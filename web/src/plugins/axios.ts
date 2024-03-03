import axios from 'axios';



const AxiosPoint = axios.create({

baseURL: import.meta.env.VITE_VUE_APP_API

});

AxiosPoint.interceptors.request.use(

async (config) => {



return config;

},

async (error) => {


return Promise.reject(error);

}

);

AxiosPoint.interceptors.response.use(

async (response) => {



return response;

},

async (error) => {


if (error.response) {


}

return Promise.reject(error);

}

);

export { AxiosPoint }