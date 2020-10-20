import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Random from "../views/Random.vue";
import Pokemon from "../views/Pokemon.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories
  },
  {
    path: "/random",
    name: "Random",
    component: Random
  },
  {
    path: "/pokemon",
    name: "Pokemon",
    component: Pokemon
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
