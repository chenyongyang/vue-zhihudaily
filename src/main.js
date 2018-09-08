import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'normalize.css' // 相当于reset.css
import 'lib-flexible' // 需要配套px2rem-loader解析
import '@/styles/common.scss'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    error: './static/error.png',
    loading: './static/loading.png'
})

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})