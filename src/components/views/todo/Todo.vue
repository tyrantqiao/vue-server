<template>
import func from './vue-temp/vue-editor-bridge';
import Vue from 'vue';
  <section class="section">
    <header class="header">
      <h1>todo lists,input things you want to do</h1>
      <input class="input-todo" type="text" name="todoInput" id="todoInput"
        placeholder="Input task..." v-model="newTodo" @keyup.enter="addTodo"/>
    </header>
    <!-- v-show根据值决定css v-cloak编译结束后再展示 -->
    <section class="main" v-show="todos.length" v-cloak>
      <input type="checkBox" class="allToggle" v-model="allTodos">
      <ul class="todo-list">
        <li v-for="todo in todos"
        class="todo"
        :key="todo.id"
        :class="{ completed: todo.completed, editing: todo == editedTodo }">
          <div class="view">
            <input type="checkbox" v-model="todo.completed" class="toggle">
            <label @dblclick="editTodo(todo)">{{todo.title}}</label>
            <button class="destory" @click="removeTodo(todo)"></button>
          </div>
          <input type="text"
          class="edit"
          v-model="todo.title"
          v-todo-focus="todo==editedTodo"
          @blur="editDone(todo)"
          @keydown.enter="editDone(todo)"
          @keydown.esc="editCancel(todo)"
          >
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="todos.length" v-cloak>
      <span class="todo-size">
        <!-- | pluralize vue的过滤器用来给结果变为复数显示 -->
        <strong>{{remaining}}</strong> {{remaining|pluralize}} left
      </span>
      <ul class="filters">
        <li><a href="#/all" :class="{selected: visibility=='all'}">所有</a></li>
        <li><a href="#/done" :class="{selected: visibility=='done'}">已完成</a></li>
        <li><a href="#/active" :class="{selected: visibility=='active'}">活跃</a></li>        
      </ul>
      <button class="clear-done" @click="clearDoneTodos" v-show="todos.length > remaining">
        清除完成任务······Done
      </button>
    </footer>
  </section>
</template>
<script>
var STORAGE_KEY = "todos-vuejs-2.0";
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY || "[]"));
    todos.array.forEach(element => {
      element.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};

// filters visibility all | done | active
var filters = {
  all: function(todos) {
    return todos;
  },
  // 需要对完成的todo进行一次筛选，用done标签来筛选
  done: function(todos) {
    return todos.filter(function(todo) {
      return todos.done;
    });
  },
  active: function(todos) {
    return todos.filter(function(todo) {
      return !todos.done;
    });
  }
};

var vue = new Vue({
  data: {
    todos: todoStorage.fetch(),
    newTodo: '',
    editedTodo: null,
    visibility: 'all'
  },
  watch: {
    todos: {
      // handler使得上来就会对对象进行处理，不然的话得等第一次变化后才会发生改变
      handler: function(todos){
        this.todoStorage.save(todos)
      },
      // 对obj的属性进行深度监听
      deep: true
    }
  },
  computed: {
    filteredTodos: function(){
      return filters[this.visibility](this.todos)
    },
    remaining: function(){
      return this.todos.length
    },
    allDone: {
      get: function(){
        return this.remaining==0
      },
      set: function(value){
        this.todos.forEach(function(todo){
          todo.completed=value
        })
      }
    }
  },
  filters: {
    // 使结果呈现单复数的形式，通过n来判断
    pluralize: function(n){
      return n==1?'item':'items'
    }
  },
  methdos: {
    addTodo: function(){
      var value=this.newTodo && this.newTodo.trim()
      // 空处理
      if(!value){
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        title: value,
        completed: false
      })
      this.newTodo=''
    },
    //TODO 早起继续还有好多个方法
    removeTodo: function(){

    }
  }
});

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

li {
  text-align: left;
  font-size: 40px;
  list-style: none;
  margin: 0;
}

li:hover {
  text-decoration: line-through;
}
</style>
