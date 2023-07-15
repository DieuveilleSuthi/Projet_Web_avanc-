import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/exercice1",
        component: () => import("../components/ExerCice1.vue")
    },
    {
        path: "/exercice2",
        component: () => import("../components/ExerCice2.vue")
    },
    {
        path: "/groupeA",
        component: () => import("../components/GroupeA.vue"),
        name: "GroupeA"
    },
    {
        path: "/groupeB",
        component: () => import("../components/GroupeB.vue"),
        name: "GroupeB"
    },
    {
        path: "/groupeAB",
        component: () => import("../components/GroupeAB.vue"),
        name: "GroupeAB"
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
