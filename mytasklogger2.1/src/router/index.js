import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Student from "../views/Student";

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
  { path: '/Student/:id',
    component: Student,
    name: 'Student' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
