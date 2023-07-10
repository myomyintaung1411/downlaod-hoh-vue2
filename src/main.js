import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/style.css';
import 'babel-polyfill'; //for ie support
import 'es6-promise/auto';//for ie support
import 'es6-object-assign/auto';//for ie support

import './index.css';
Vue.config.productionTip = false;

Vue.use(Vant);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
