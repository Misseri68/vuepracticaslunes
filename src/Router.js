import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CollatzComponent from "./components/CollatzComponent.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";
import TablaMultiplicar3 from "./components/TablaMultiplicar3.vue";
import TablaMultiplicar2 from "./components/TablaMultiplicar2.vue";

const myRoutes = [
    {path: "/", component: HomeComponent},
    {path: "/collatz", component: CollatzComponent},
    {path: "/tabla1", component: TablaMultiplicar},
    {path: "/tabla2", component: TablaMultiplicar2},
    {path: "/tabla3", component: TablaMultiplicar3},
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;