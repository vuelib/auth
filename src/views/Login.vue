<template>
  <sant-card theme="dark" class="login-card">
    <sant-card-header>
      <img src="../assets/persona.png" alt="" />
      <span>{{ name }}</span>
    </sant-card-header>
    <sant-card-content>
      <div>
        <input type="text" id="login" v-if="isGuest" @change="isFilled" v-model="username" />
        <label for="login" v-if="isGuest">Usuario</label>
      </div>
      <div>
        <input type="password" id="password" @change="isFilled" v-model="password" />
        <label for="password">Senha</label>
      </div>
    </sant-card-content>
    <sant-card-footer>
      <div>
        <button class="login" @click="login()">Entrar</button>
      </div>
      <div>
        <button class="logout flat" @click="logout()" v-if="!isGuest">Sair</button>
      </div>
    </sant-card-footer>
  </sant-card>
</template>

<style>
* {
  box-sizing: border-box;
}
.login-card {
  width: 450px;
  /* height: 560px; */
  /* padding: 30px; */
  position: absolute;
  top: calc(50% - 280px);
  left: calc(50% - 225px);
  /* background: #000; */
  color: #fff;
  border-radius: 10px;
}
.login-card div.header > img {
  border-radius: 100%;
  height: 150px;
  display: block;
  position: relative;
  left: calc(50% - 75px);
}
.login-card div.header > span {
  margin: 25px 0 0;
  display: inline-block;
  position: relative;
  font-size: 20px;
}
.login-card > div.container {
  padding: 20px;
  width: 100%;
}
.login-card > div.container div {
  position: relative;
  padding: 10px 20px;
  margin: 10px 0;
}
.login-card > div.container input {
  padding: 14px 20px;
  width: 300px;
  color: #fff;
  background-color: #222;
  border: none;
  border-radius: 100px;
  outline: none;
}
.login-card > div.container input + label {
  position: absolute;
  left: 60px;
  top: 24px;
  color: #aaa;
  transition: 0.3s;
  font-size: 14px;
}
.login-card > div.container input:focus + label,
.login-card > div.container input.filled + label {
  top: -10px;
  left: 55px;
  transition: 0.3s;
  color: #fff;
}
.login-card > div.footer button {
  padding: 12px 30px;
  margin-top: 5px;
  text-transform: uppercase;
  border: none;
  border-radius: 100px;
  color: #fff;
}
.login-card > div.footer button:hover {
  cursor: pointer;
}
.login-card > div.footer button.login {
  background-color: #0084ff;
  width: 160px;
}
.login-card > div.footer button.logout {
  color: #aaa;
  font-size: 12px;
  background-color: transparent;
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

<script lang="ts">
import LoginState from './LoginState';
import Component from 'vue-class-component';

Component({
  name: 'Login',
});
export default class Login extends LoginState {}
</script>
