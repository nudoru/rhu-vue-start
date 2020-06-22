import Vue from 'vue';
import VueDummy from 'vue-dummy';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/scss/styles.scss';
import '@/components/globals';

Vue.use(VueDummy);

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
