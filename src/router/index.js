import Vue from 'vue'
import Router from 'vue-router'
import todo from '@/components/views/todo/todo'
import layouts from '@/components/views/layouts'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: layouts,
    // 设置嵌套路由，以todo的id来进行切换界面
    children: [{
      path: '/todo/:id',
      name: 'todo',
      component: todo
    }]
  }]
})
