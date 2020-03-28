import Axios, { AxiosInstance } from 'axios';
import { LocalStorage } from '@kernel-js/storage';
import { get } from 'lodash';
declare module 'vue/types/vue' {
  interface Vue {
    $request: AxiosInstance;
  }
}

const storage = new LocalStorage();

const Authorization = get(storage.get('auth'), 'access_token', false);

export default {
  install(Vue: any) {
    Vue.prototype.$request = Axios.create({
      baseURL: 'https://auth-staging.platafoor.com',
      headers: {
        'App-Id': '7d04acde-118b-4a87-abde-af7d5a15d14f',
        'Content-Type' : 'application/json',
        'Authorization': Authorization ? `Bearer ${Authorization}` : ''
      }
    });
  },
};
