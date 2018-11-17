<template>
   <div id="todo">
      <input type="text" name="todoInput" id="todoInput" v-model="todoItem" />
      <input type="button" value="submit" />
      <ul id="todoItems">
        <li v-for="item in todoItems" :key=item.id>
          {{item.task}}
        </li>
      </ul>
      <router-link to="/home">跳转回桌面</router-link>
   </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      todoItems: [
        {
          task: "把todoList完成"
        },
        {
          task: "把登录完成"
        }
      ]
    };
  }
};
</script>

<style>
.text-center {
  text-align: center;
}
.spacing {
  margin-top: 30px;
}
.red {
  color: darkred;
}
ul li {
  display: inline-block;
  margin-right: 10px;
}
</style>
