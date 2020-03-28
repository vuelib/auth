import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from '../../views/Login.vue'

Vue.use(VueRouter);

declare module 'vue/types/vue' {
  interface Vue {
    $vueRouter: VueRouter;
  }
}

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
]

export default Vue.prototype.$vueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
