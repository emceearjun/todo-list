
import { createAction, props } from "@ngrx/store";
import { Todo } from './app.state';

export class TodosActions {
    
    static LoadTodos = createAction("[Todos] Load Todos");
    static LoadTodosSuccess = createAction("[Todos] Load Todos Success", props<{ todos: Todo[] }>());
    static LoadTodosFailure = createAction("[Todos] Load Todos Failure", props<{ error: any }>());

    static CreateTodo = createAction("[Todos] Create Todo", props<{ todo: Todo }>());
    static CreateTodoSuccess = createAction("[Todos] Create Todo Success", props<{ todo: Todo }>());
    static CreateTodoFailure = createAction("[Todos] Create Todo Failure", props<{ error: any }>());

    static UpdateTodo = createAction("[Todos] Update Todo", props<{ todo: Todo, id: number }>());
    static UpdateTodoSuccess = createAction("[Todos] Update Todo Success", props<{ todo: Todo, id: number }>());
    static UpdateTodoFailure = createAction("[Todos] Update Todo Failure", props<{ todo: Todo, id: number, error: any }>());
}