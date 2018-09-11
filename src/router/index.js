import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: () =>
                import ('@/pages/Home')
        }, {
            path: '/newsDetail/:id',
            name: 'NewsDetail',
            component: () =>
                import ('@/pages/NewsDetail')
        },
        {
            path: '/newsDetail/:id/comment',
            name: 'Comment',
            component: () =>
                import ('@/pages/Comment')
        },
        {
            path: '/theme/:themeid',
            name: 'ThemeContent',
            component: () =>
                import ('@/pages/ThemeContent')
        }
    ]
})