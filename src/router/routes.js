import * as VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Features from "../pages/Features.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/features", component: Features, name: "Features" },
];
const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHistory(),
});

export default router;
