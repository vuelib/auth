<template>
  <div id="app-auth">
    <!-- <login msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from './views/Login.vue';

@Component({
  name: 'auth',
  components: {
    Login,
  },
})
export default class Auth extends Vue {}
</script>

<style>
#app-auth {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
