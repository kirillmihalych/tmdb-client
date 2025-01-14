import { createRouter, createWebHistory } from "vue-router";
import MovieListView from "../views/MovieListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MovieListView,
    },
    {
      path: "/movies/:id",
      name: "movie",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MovieView.vue"),
    },
  ],
});

export default router;
