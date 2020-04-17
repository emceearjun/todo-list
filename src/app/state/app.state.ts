export interface AppState {
  todos: Todo[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export class Todo {
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean) {
    this.title = title;
    this.completed = completed;
  }
}
