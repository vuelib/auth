<template>
  <div id="app-auth" class="app-auth">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'auth',
})
export default class Auth extends Vue {
  /**
   *
   */
  constructor() {
    super();
  }
}
</script>

<style lang="scss">
.app-auth {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import '~@essencia-ui/vue-santorini/src/assets/scss/main';
</style>
