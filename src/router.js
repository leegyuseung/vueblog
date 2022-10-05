import { createWebHistory, createRouter } from "vue-router";
import ListBoard from "./components/ListBoard";
import HomePage from "./components/HomePage";

const routes = [
  {
    path: "/list",
    component: ListBoard,
  },
  {
    path: "/",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
