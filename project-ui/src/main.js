import Vue from 'vue';
import App from './App.vue';
import router from './router';
import'./assets/styles/global.css';
import store from "./store";
import axios from './plugins/axios';
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$httpUrl='http://localhost:8899/'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
