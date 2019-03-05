import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {sync} from 'vuex-router-sync';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import store from '@/store/store';

Vue.config.productionTip = false;

Vue.use(Vuetify);

sync(store, router);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
