import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css' // 相当于reset.css
import 'lib-flexible' // 需要配套px2rem-loader解析

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})