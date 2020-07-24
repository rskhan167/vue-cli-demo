import Vue from 'vue'
import App from './App.vue'
import home from './components/home.vue';

Vue.config.productionTip = false

Vue.component('app-servers', home);

new Vue({
  //el: '#app',
  render: h => h(App),
}).$mount('#app')
