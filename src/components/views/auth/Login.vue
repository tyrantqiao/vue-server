<template>
<div class="center">
  <input v-model="account" placeholder="请输入你的账号">
  <input v-model="password" placeholder="请输入你的密码">
  <button @click="signButton">登录/注册</button>
</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      data: {
        body: {
          username: null,
          password: null
        }
      },
      error: null
    };
  }
};
</script>

<style>

</style>