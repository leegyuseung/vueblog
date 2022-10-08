import { createWebHistory, createRouter } from "vue-router";
import ListBoard from "./components/ListBoard";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";
import AuthorPage from "./components/AuthorPage";
import CommentPage from "./components/CommentPage";

const routes = [
  {
    path: "/list",
    component: ListBoard,
  },
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/detail/:id",
    component: DetailPage,
    children: [
      { path: "author", component: AuthorPage },
      {
        path: "comment",
        component: CommentPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
