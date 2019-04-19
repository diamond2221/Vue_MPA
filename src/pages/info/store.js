import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        num: 0
    },
    mutations: {
        addNum(state) {
            state.num++;
        },
        setNum(state, num) {
            state.num = num;
        }
    }
});
