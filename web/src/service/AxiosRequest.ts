import { Axios } from "axios";

import { inject } from "vue";

export class AxiosRequest {

  getAxios() {

    const axios = inject('axios') as Axios;

    return axios;

  }

}