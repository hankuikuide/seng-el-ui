import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: () =>
            import ('@/components/app-layout')
    },
    {
        path: '/login',
        name: 'login'
    }
]

const router = new VueRouter({
    routes
})

export default router