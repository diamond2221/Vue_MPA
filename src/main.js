import Vue from "vue";
import App from "./App.vue";
// import store from './store'

Vue.config.productionTip = false;
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/list/"
        }
    ]
});

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount("#app");
