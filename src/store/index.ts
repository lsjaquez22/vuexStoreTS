import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import { addToDo, addToDo2 } from "./actions/action1";
import { deleteToDo } from "./actions/action2";
import { addToDoMut, deleteToDoMut } from "./mutations/mutations";
import { getTotal } from "./getters/getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  mutations: { addToDoMut, deleteToDoMut },
  actions: { addToDo, addToDo2, deleteToDo },
  getters: { getTotal }
});
