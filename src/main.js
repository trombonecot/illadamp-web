import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import VueGtag from "vue-gtag-next";
import { trackRouter } from "vue-gtag-next";


import Index from './pages/index.vue';
import Escriptura from './pages/escriptura.vue';
import Rol from './pages/rol.vue';
import App from './App.vue'


const routes = [
  { path: '/', component: Index },
  { path: '/escriptura', component: Escriptura },
  { path: '/rol', component: Rol },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

trackRouter(router);

const app = createApp(App);

app.use(router);

app.use(VueGtag, {
    property: {
      id: "UA-39279616-1"
    }
  });

app.mount('#app');
