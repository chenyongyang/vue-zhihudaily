export default {
    // 类型(名字) + 处理函数就构成了mutation，类似于事件
    // mutation 类型用大写常量表示
    SETTOPSTORIES(state, data) {
        state.topStories = data
    },
    SETTODAYHOTSTORIES(state, data) {
        state.todayHotStories = data
    },
    SETDATE(state, data) {
        state.date = data
    },
    ADDSTORIES(state, data) {
        state.beforeStories.push(data)
    }
}