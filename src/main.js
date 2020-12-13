import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import firebase from 'firebase';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { firebaseConfig } from "./config/firebaseConfig";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

firebase.initializeApp(firebaseConfig);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount('#app')
