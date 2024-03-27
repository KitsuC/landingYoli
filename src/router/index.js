import LandingView from "~/Layout/LandingView.vue";
import DetailView from "~/Layout/DetailView.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'LandingView',
        component: LandingView
    },
    {
        path: '/detail',
        name: 'DetailView',
        component: DetailView
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router