import Vue from 'vue'
import App from './App.vue'

// importando o módulo
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
// se não é utilizado export default tem que utilizar {} no import
import {routes} from './routes'

// registrando o módulo/plugin no global view object
Vue.use(VueResource)
Vue.use(VueRouter)

// com auxilo do VueRouter vai ser passado as rotas configuradas e ele vai devolver um roteador que será utilizado pela aplicação
const router = new VueRouter({ 
  routes: routes,
  mode: 'history'
 });

// Instancia vue
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
  /* Mesmo que:
  render: function(h) {
  h(App);
  */
})
