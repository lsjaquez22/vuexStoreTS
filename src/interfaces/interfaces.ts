export interface Todo {
  Name: string;
  IsCompleted: boolean;
}

export interface State {
  todos: Todo[];
}
