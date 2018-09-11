import axios from 'axios'
export default {
    getThemes({ commit }) {
        return axios.get('/api/4/themes').then((res) => {
            if (res.status === 200) {
                commit('SETTHEMES', res.data.others);
            }
        });
    },
    getThemeContent({ commit }, themeId) {
        return axios.get('/api/4/theme/' + themeId).then((res) => {
            if (res.status === 200) {
                commit('SETTHEME', res.data);
            }
        })
    },
    getNewsLatest({ commit }) { // 解构store实例中的commit方法
        // 每一个action会默认传入一个context参数，它指向store实例
        return axios.get('/api/4/news/latest').then(res => {
            if (res.status === 200) {
                commit('SETTOPSTORIES', res.data.top_stories)
                commit('SETTODAYHOTSTORIES', res.data.stories)
                commit('SETDATE', res.data.date)
            }
        });
    },
    getBefore({ state, commit }) { // 解构store实例中的state属性和commit方法
        let date = ''
        if (state.beforeStories.length === 0) {
            date = state.date
        } else {
            date = state.beforeStories[state.beforeStories.length - 1].date
        }
        let api = '/api/4/news/before/' + date
        return axios.get(api).then(res => {
            if (res.status === 200) {
                commit('ADDSTORIES', res.data)
            }
        });
    }
}