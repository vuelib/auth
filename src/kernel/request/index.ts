import Axios, { AxiosInstance } from 'axios';

declare module 'vue/types/vue' {
  interface Vue {
    $request: AxiosInstance;
  }
}

export default {
  install(Vue: any) {
    Vue.prototype.$request = Axios.create({
      baseURL: 'https://auth-staging.platafoor.com',
      headers: {
        'App-Id': '7d04acde-118b-4a87-abde-af7d5a15d14f',
        'Content-Type' : 'application/json'
      }
    });
  },
};
