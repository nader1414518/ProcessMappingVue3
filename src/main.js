import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import loading from 'vue3-loading-screen'

import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
    .use(store)
    .use(router)
    .use(BootstrapVue)
    .use(loading, /*{...options}*/)
    .use(VueAxios, axios)
    .mount('#app')
