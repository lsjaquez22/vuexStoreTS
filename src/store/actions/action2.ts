export const deleteToDo = (context: any) => {
  return new Promise((resolve, reject) => {
    context.commit('deleteToDoMut');
    resolve();
  });
};
