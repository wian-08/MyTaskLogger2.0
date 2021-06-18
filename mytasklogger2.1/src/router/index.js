import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import EditPage from "../views/EditPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  { path: '/EditPage/:id',
    component: EditPage,
    name: 'EditPage' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
