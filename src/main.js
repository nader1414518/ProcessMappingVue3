import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVueNext from 'bootstrap-vue-next'

// Optional, since every component imports their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import loading from 'vue3-loading-screen'

import axios from 'axios'
import VueAxios from 'vue-axios'

// console.log(process.env.VUE_APP_API_URL_LOCAL)

axios.defaults.baseURL = process.env.VUE_APP_API_URL_LOCAL;

createApp(App)
    .use(store)
    .use(router)
    .use(BootstrapVueNext)
    .use(loading, /*{...options}*/)
    .use(VueAxios, axios)
    .mount('#app')
