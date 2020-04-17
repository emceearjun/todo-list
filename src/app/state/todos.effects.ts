import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { TodosService } from "../services/todos.service";
import { TodosActions } from "./todos.actions";

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todosService: TodosService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.LoadTodos),
      mergeMap(() =>
        this.todosService.getTodos().pipe(
          map((todos) => {
            return TodosActions.LoadTodosSuccess({ todos });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(TodosActions.LoadTodosFailure({ error: "Error fetching Todos List" }));
          })
        )
      )
    )
  );

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.CreateTodo),
      mergeMap((state) =>
        this.todosService.addTodo(state.todo).pipe(
          map(() => {
            return TodosActions.CreateTodoSuccess({ todo: state.todo });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(TodosActions.CreateTodoFailure({ error: "Error creating Todo" }));
          })
        )
      )
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.UpdateTodo),
      mergeMap((state) =>
        this.todosService.completeTodo(state.todo, state.id).pipe(
          map(() => {
            return TodosActions.UpdateTodoSuccess({ todo: state.todo, id: state.id });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(TodosActions.UpdateTodoFailure({ error: `Error updating Todo: ${state.id}`, todo: state.todo, id: state.id }));
          })
        )
      )
    )
  );
}
