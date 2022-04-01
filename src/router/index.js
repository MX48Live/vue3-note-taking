import { createRouter, createWebHistory } from 'vue-router'
import Notes from '@/pages/Notes.vue'
import Stats from '@/pages/Status.vue'

const routes = [
    {
        path: '/',
        name: 'notes',
        component: Notes
    },
    {
        path: '/stats',
        name: 'stats',
        component: Stats
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
