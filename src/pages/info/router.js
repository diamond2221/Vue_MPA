import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/info/",
        name: "login",
        component: () => import("./pages/login/login.vue"),
        meta: {
            title: "详情"
        }
    }
];

export default new VueRouter({
    mode: "history",
    routes
});
