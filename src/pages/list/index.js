import Vue from "vue";
import router from "./router";
import List from "./list.vue";
Vue.use(import("vue-wechat-title"));

new Vue({ router, render: h => h(List) }).$mount("#list");
