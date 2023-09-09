import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "subcription",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/Cartview.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("../views/PaymentView.vue"),
    },
    {
      path: "/product",
      name: "Product",
      component: () => import("../views/ProductView.vue"),
    },
  ],
});

export default router;
