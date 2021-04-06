<template>
  <div id="app">
      <Demo />
  </div>
</template>

<script>
import Demo from './components/Demo.vue';

export default {
  name: 'App',
  components: {
    Demo,
  },
};
</script>

<style lang="scss">
@import "./assets/all.scss";

#app {
  font-family: PingFangTC-Regular, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
