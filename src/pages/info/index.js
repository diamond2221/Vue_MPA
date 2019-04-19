import Vue from "vue";
import router from "./router.js";
import store from "./store.js";
import Info from "./info.vue";

export default new Vue({
    router,
    store,
    render: h => h(Info)
}).$mount("#info");
