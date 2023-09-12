import { createApp } from 'vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { LaHomeSolid, BiPerson, MdLibrarybooksOutlined, HiDocumentText, HiMail } from "oh-vue-icons/icons";

import App from './App.vue'
import router from './router'
import './style.css'

// Icons documentation - https://oh-vue-icons.js.org/docs
addIcons(LaHomeSolid, BiPerson, MdLibrarybooksOutlined, HiDocumentText, HiMail);

// Create and mount the root instance.
const app = createApp(App)

// Make sure to _use_ the router instance to make the whole app router-aware.
app.use(router)

app.component("v-icon", OhVueIcon);
app.mount('#app')