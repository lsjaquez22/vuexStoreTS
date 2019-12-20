import { Todo, State } from '../../interfaces/interfaces';

export const addToDoMut = (state: State, todoModel: Todo) => {
  state.todos.push(todoModel);
};

export const deleteToDoMut = (state: State) => {
  state.todos.pop();
};
