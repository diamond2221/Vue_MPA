import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/list/",
        name: "login",
        component: () => import("./pages/login/login.vue"),
        meta: { title: "列表" }
        // component: () => import("./pages/login/login")
    }
];

export default new VueRouter({
    mode: "history",
    routes
});
