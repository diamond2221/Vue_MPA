import Vue from "vue";
import App from "./index.vue";
import router from "./router.js";
import store from "./store.js";

export default new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#index");
