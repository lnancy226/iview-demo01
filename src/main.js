// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

// 全局配置axios
const AUTH_TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGUiOjE1MzM1NDQyNzk2OTAsImV4cCI6MTUzNDE0OTA3OSwidXNlcm5hbWUiOiJ3YW5nY2oifQ.bEOoAqmgT1_x8cXgHato_TwxwSEhaco7OJsvaA8mDG4'
axios.defaults.baseURL = 'http://10.0.0.24:8100';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';

// Vue.use(VueRouter)
Vue.use(iView);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$qs = qs;

//axios.defaults.baseURL = 'http://192.168.31.99:8040'
if (localStorage.getItem('id_token')) {
  console.log(localStorage.getItem('id_token'))

}

// 全局的请求拦截器
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem('id_token')) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})

/* eslint-disable no-new */


new Vue({
  router, render: h => h(App)
}).$mount('#app')
// router.push('/login')
