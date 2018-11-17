<template>
  <div id="app">
    <router-link to="/login">跳转到登录界面</router-link>
    <router-link to="/todo">跳转到todo</router-link>
    <router-link to="/home">跳转到桌面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
