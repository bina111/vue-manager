import Vue from 'vue'
import App from './App.vue'
import {Button, Radio, Container, Main, Header, Aside, Menu, Submenu, MenuItemGroup, MenuItem, Dropdown, DropdownItem,
   DropdownMenu, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag, Form, FormItem, Input, Select, DatePicker, 
   Option, Switch, Dialog, Pagination, MessageBox, Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueRouter from "vue-router";
import router from './router/index'
import store from './store/index'

import '../api/mock.js'

import http from 'axios'

Vue.config.productionTip = false


Vue.use(VueRouter);
Vue.use(Button);
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Pagination)



Vue.prototype.$http = http;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message


//全局路由守卫
router.beforeEach((to,from,next)=>{
    store.commit('getToken');
    const token = store.state.user.token;
    if(!token && to.name !== 'login'){
      next({ name: 'login'});
    }
    else if(token && to.name === 'login'){
      next({ name: 'home' })
    }
    else{
      next();
    }
})

new Vue({
  router,
  store,
  render: h => h(App),
  //动态引入路由
  created(){
    // console.log("刷新重建vue")
    store.commit('addMenu',router)
  }
}).$mount('#app')
