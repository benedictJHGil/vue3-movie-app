import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from "./NotFound";

export default createRouter({
    // Hash, History(서버 세팅 필요)
    // ex) https://google.com/#/search
    history: createWebHashHistory(),
    scrollBehavior() {
        return { top:0 }
    },
    // page
    routes: [
        {
            path: '/', // https://google.com/
            component: Home
        },
        {
            path: '/movie/:id',
            component: Movie
        },
        {
            path: '/about', // https://google.com/about
            component: About
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
})