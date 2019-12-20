import { Todo } from '../../interfaces/interfaces';

export const addToDo = (context: any, todoModel: Todo) => {
  return new Promise((resolve, reject) => {
    context.commit('addToDoMut', todoModel);
    resolve();
  });
};

export const addToDo2 = (context: any, todoModel: Todo) => {
  return new Promise((resolve, reject) => {
    context.commit('addToDoMut', todoModel);
    resolve();
  });
};
