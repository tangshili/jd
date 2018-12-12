import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//import * as uiv from 'uiv'



import "./assets/css/font-awesome.min.css"
import "./assets/css/weui.css"
import "./assets/css/reset.css"
//import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
