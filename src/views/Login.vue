<template>
  <div class="login-card">
    <p>Login</p>
    <div>
      <input type="text" id="login" @change="isFilled" v-model="username" />
      <label for="login">Usuario</label>
    </div>
    <div>
      <input type="password" id="password" @change="isFilled" v-model="password" />
      <label for="password">Senha</label>
    </div>
    <div>
      <button @click="login()">Entrar</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

Component({
  name: 'Login',
});
export default class Login extends Vue {
  /**
   *
   * @private
   * @type {string}
   * @memberof Login
   */
  private username: string;

  /**
   *
   * @private
   * @type {string}
   * @memberof Login
   */
  private password: string;

  /**
   *Creates an instance of Login.
   * @memberof Login
   */
  constructor() {
    super();

    this.username = '';
    this.password = '';
    this.$request.get('https://auth-staging.platafoor.com/api/me');
  }

  /**
   *
   * @private
   * @param {*} event
   * @memberof Login
   */
  private isFilled(event: any): void {
    if (event.target.value.includes('filled')) {
      event.target.classList.remove('filled');
    } else {
      event.target.classList.add('filled');
    }
  }

  /**
   *
   * @private
   * @memberof Login
   */
  private login(): void {
    this.$auth
      .login({
        // 'username': this.username,
        // 'password': this.password,
        username: 'carlos2103t1@mailinator.com',
        password: 'carlos2103t1',
      })
      .then(() => {
        if (this.$auth.isAuthenticated()) {
          // this.$vueRouter.push('/companies');
        }
      });
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
.login-card {
  width: 400px;
  height: 400px;
  padding: 30px;
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 200px);
}
.login-card > p {
  font-family: sans-serif;
  font-size: 22px;
  margin-bottom: 45px;
}
.login-card > div {
  position: relative;
  padding: 10px 20px;
  margin: 15px 0;
}
.login-card > div input {
  padding: 10px 12px;
  width: 100%;
  color: #666;
  border-radius: 5px;
  border: 1px solid #aaa;
  outline: none;
}
.login-card > div input + label {
  position: absolute;
  left: 35px;
  top: 20px;
  color: #aaa;
  transition: 0.3s;
  font-size: 14px;
}
.login-card > div input:focus + label,
.login-card > div input.filled + label {
  top: -10px;
  left: 24px;
  transition: 0.3s;
  color: #444;
}
.login-card > div button {
  padding: 12px 30px;
  margin-top: 15px;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  background-color: #0084ff;
  color: #fff;
}
</style>
