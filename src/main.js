import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Store from './store/store.js'

import App from './App.vue'
import Add from './components/Add'
import ChangeItem from './components/ChangeItem.vue'
import Search from './components/Search.vue'
import ShowType from './components/ShowType.vue'
import ShowUsers from './components/ShowUsers.vue'
import ShowItem from './components/ShowItem.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

Vue.use(VueResource)
Vue.use(VueRouter)
const router = new VueRouter()
global.router = router

//配置前端请求基本路径
// const basePath = 'http://localhost/shop-api/'
const basePath = 'http://evanhung.me/shop-api/'
window.basePath = basePath

router.map({
  '/home': {
    component: Home,
    subRoutes: {
        '/add': {
          component: Add
        },
        '/search': {
          component: Search
        },
        '/show_item': {
          component: ShowItem
        },
        '/show_type': {
          component: ShowType
        },
        '/change_item': {
          component: ChangeItem
        },
        '/show_users': {
          component: ShowUsers
        }
    }
  },
  '/login': {
    component: Login
  }
})

router.redirect({
  '*': '/home'
})
router.beforeEach(function () {
  window.scrollTo(0, 0)
})
router.start(App, '#index')
