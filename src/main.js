import { createApp } from 'vue'

// https://oh-vue-icons.js.org/docs
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { LaHomeSolid, MdPersonoutline, MdLibrarybooksOutlined, HiDocumentText, HiMail } from "oh-vue-icons/icons";

// https://bootstrap-vue-next.github.io/bootstrap-vue-next/
import {createBootstrap} from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import App from './App.vue'
import router from './router'
import './style.css'

// Icons documentation - https://oh-vue-icons.js.org/docs
addIcons(LaHomeSolid, MdPersonoutline, MdLibrarybooksOutlined, HiDocumentText, HiMail);

// Create and mount the root instance.
const app = createApp(App)

// Make sure to _use_ the router instance to make the whole app router-aware.
app.use(router)
app.use(createBootstrap())

app.component("v-icon", OhVueIcon);
app.mount('#app')