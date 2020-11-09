import Vue from "vue";
import Vuex from "vuex";

import pokemon from "./modules/pokemon"
import categories from "./modules/categories"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemon,
    categories
  }
});
