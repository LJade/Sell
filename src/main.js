// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  {path: '/', redirect: '/goods'},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];
let router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
});
/* 在es6中 本来每次new的时候都要把new给一个实例
 * 但是在vue中不需要给某个实例 ，于是用eslint的这句话将其标注，
 * 以便于在eslint的时候跳过检查 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router: router
}).$mount('#app');
