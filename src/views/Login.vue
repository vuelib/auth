<template>
  <div class="login-card">
    <p> Login </p>
    <div>
      <input type="text" id="login" @change="isFilled" v-model="username">
      <label for="login">Usuario</label>
    </div>
    <div>
      <input type="password" id="password" @change="isFilled" v-model="password">
      <label for="password">Senha</label>
    </div>
    <div>
      <button @click="login()">Entrar</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

Component({
  name: 'Login',
})
export default class Login extends Vue {
  private username: string;
  private password: string;

  constructor() {
    super();

    this.username = '';
    this.password = '';
  }

  private isFilled(value: any): void {
    if (value.target.value !== '') {
      value.target.classList.add('filled')
    } else {
      value.target.classList.remove('filled')
    }
  }

  private login(): void {
    this.$auth.login({
      // 'username': this.username,
      // 'password': this.password,
      'username': 'carlos2103t1@mailinator.com',
      'password': 'carlos2103t1',
    })
    .then((response) => {
      if (this.$auth.isAuthenticated()) {
        this.$vueRouter.push('/companies')
      }
    })
  }
}
</script>

<style>
* { box-sizing: border-box; }
.login-card { width: 400px; height: 400px; padding: 30px; position: absolute; top: calc(50% - 200px); left: calc(50% - 200px);  }
.login-card > p { font-family: sans-serif; font-size: 22px; margin-bottom: 45px; }
.login-card > div { position: relative; padding: 10px 20px; margin: 15px 0; }
.login-card > div input { padding: 10px 12px; width: 100%; color: #666; border-radius: 5px; border: 1px solid #aaa; outline: none; }
.login-card > div input + label { position: absolute; left: 35px; top: 20px; color: #aaa; transition: .3s; font-size: 14px;}
.login-card > div input:focus + label, .login-card > div input.filled + label { top: -10px; left: 24px; transition: .3s; color: #444; }
.login-card > div button { padding: 12px 30px; margin-top: 15px; text-transform: uppercase; border: none; border-radius: 5px; background-color: #0084FF; color: #fff; }
</style>
