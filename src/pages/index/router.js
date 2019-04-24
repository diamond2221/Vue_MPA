import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("./pages/home/home.vue"),
        meta: {
            needAuth: true,
            title: "我的MPA-Vue APP"
        }
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
