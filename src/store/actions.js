import axios from 'axios'
export default {
    getNewsLatest({ commit }) { // 解构store实例中的commit方法
        // 每一个action会默认传入一个context参数，它指向store实例
        return axios.get('/api/4/news/latest').then(res => {
            if (res.status === 200) {
                commit('SETTOPSTORIES', res.data.top_stories)
                commit('SETTODAYHOTSTORIES', res.data.stories)
                commit('SETDATE', res.data.date)
            }
        })
    },
    getBefore({ state, commit }) { // 解构store实例中的state属性和commit方法
        let date = ''
            // 如果没有数据，则使用全局的date日期
        if (state.beforeStories.length === 0) {
            date = state.date
        } else {
            date = state.beforeStories[state.beforeStories.length - 1].date
        }
        let api = '/api/4/news/before/' + date
        axios.get(api).then(res => {
            if (res.status === 200) {
                commit('ADDSTORIES', res.data)
            }
        })
    }
}