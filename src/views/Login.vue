<template>
  <div class="login-card">
    <p>Login</p>
    <span>{{ name }}</span>
    <div>
      <input type="text" id="login" @change="isFilled" v-model="username" />
      <label for="login">Usuario</label>
    </div>
    <div>
      <input type="password" id="password" @change="isFilled" v-model="password" />
      <label for="password">Senha</label>
    </div>
    <div>
      <button class="logout" @click="logout()" v-if="!isGuest">Desconectar</button>
      <button class="login" @click="login()">Entrar</button>
    </div>
  </div>
</template>
<script lang="ts">
import LoginState from './LoginState.vue';
import Component from 'vue-class-component';

Component({
  name: 'Login',
});
export default class Login extends LoginState {}
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
  font-size: 24px;
  margin-bottom: 45px;
}
.login-card > span {
  margin-bottom: 15px;
  display: inline-block;
  font-size: 14px;
  font-style: italic;
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
  color: #fff;
}
.login-card > div button.login {
  background-color: #0084ff;
}
.login-card > div button.logout {
  color: #444;
  background-color: #ccc;
}
.loading {
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100vw;
  height: 100vh;
}
.loading::after {
  content: '';
  width: 90px;
  height: 90px;
  display: block;
  position: absolute;
  top: calc(50% - 45px);
  left: calc(50% - 45px);
  background-color: transparent;
  border: 6px solid #fff;
  border-radius: 100%;
  border-right: transparent;
  border-top: transparent;
  animation: loading_animation 1s infinite;
}
@keyframes loading_animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(36deg);
  }
  20% {
    transform: rotate(72deg);
  }
  30% {
    transform: rotate(108deg);
  }
  40% {
    transform: rotate(144deg);
  }
  50% {
    transform: rotate(216deg);
  }
  60% {
    transform: rotate(252deg);
  }
  70% {
    transform: rotate(279deg);
  }
  80% {
    transform: rotate(306deg);
  }
  90% {
    transform: rotate(333deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
