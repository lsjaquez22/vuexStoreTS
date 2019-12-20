import { State } from "../../interfaces/interfaces";

export const getTotal = (state: State) => {
  let total = 0;
  state.todos.forEach(element => {
    total++;
  });
  return total;
};
