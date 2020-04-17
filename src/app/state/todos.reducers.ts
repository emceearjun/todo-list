import { createReducer, on } from "@ngrx/store";
import { AppState, Todo } from "./app.state";
import { TodosActions } from "./todos.actions";

export const initialState: AppState = {
  todos: [],
  loading: false,
  loaded: false,
  error: null,
};

const errorStateHandler = (state, props) => {
  return {
    ...state,
    loading: false,
    error: props.error,
    loaded: true,
  };
}

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.LoadTodos, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(TodosActions.LoadTodosSuccess, (state, props) => {
    return {
      ...state,
      loading: false,
      error: null,
      loaded: true,
      todos: props.todos,
    };
  }),
  on(TodosActions.LoadTodosFailure, errorStateHandler),
  on(TodosActions.CreateTodo, (state, props) => {
    return {
      ...state
    };
  }),
  on(TodosActions.CreateTodoSuccess, (state, props) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      error: null,
      todos: [...state.todos, props.todo],
    };
  }),
  on(TodosActions.CreateTodoFailure, errorStateHandler),
  on(TodosActions.UpdateTodo, (state, props) => {
    return {
      ...state
    };
  }),
  on(TodosActions.UpdateTodoSuccess, (state, props) => {
    let updatedTodos = [...state.todos];
    updatedTodos[props.id - 1] = new Todo(props.todo.title, props.todo.completed);
    return {
      ...state,
      loading: false,
      loaded: true,
      error: null,
      todos: [...updatedTodos],
    };
  }),
  on(TodosActions.UpdateTodoFailure, (state, props) => {
    let revertedTodos = [...state.todos];
    revertedTodos[props.id - 1] = new Todo(props.todo.title, !props.todo.completed);
    return {
      ...state,
      loading: false,
      loaded: true,
      error: props.error,
      todos: [...revertedTodos],
    };
  }),
);


