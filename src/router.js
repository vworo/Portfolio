import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// Define route components - These can be imported from other files
import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Resume from './views/Resume.vue'
import Contact from './views/Contact.vue'

// Define some routes - Each route should map to a component.
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/resume', component: Resume },
    { path: '/contact', component: Contact },
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;