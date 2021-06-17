import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ToDoEdit from "../views/ToDoEdit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "ToDoEdit",
    component: ToDoEdit,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
