import VueX from "vuex";
import Vue from "vue";
Vue.use(VueX);

const store = new VueX.Store({
    state: {
        num: 0
    },
    mutations: {
        addNum(state, _data) {
            state.num++;
        }
    }
});

export default store;
