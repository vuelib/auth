import Vue from 'vue';
import App from './App.vue';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false;

// Resquest
import Request from './kernel/request';
Vue.use(Request);

// Authentication
import Auth from './kernel/authentication';
Vue.use(Auth);

// Router
import router from './kernel/router';

// Essencia UI
import EssenciaUI from '@essencia-ui/vue-santorini';
Vue.use(EssenciaUI);

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#auth',
    render: (r: any) => r(App),
    router,
    // store,
  },
});

export const bootstrap = [vueLifecycles.bootstrap];

export const mount = [vueLifecycles.mount];

export const unmount = [vueLifecycles.unmount];
