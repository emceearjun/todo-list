import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "./state/app.state";
import { TodosService } from "./services/todos.service";
import { Store, select } from "@ngrx/store";
import { TodosActions } from "./state/todos.actions";
import {
  selectAllTodos,
  selectLoading,
  selectError,
  selectLoaded,
} from "./state/todos.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  $todos: Observable<Todo[]> = this.store.pipe(select(selectAllTodos));
  $loading: Observable<boolean> = this.store.pipe(select(selectLoading));
  $error: Observable<boolean> = this.store.pipe(select(selectError));
  $loaded: Observable<boolean> = this.store.pipe(select(selectLoaded));
  newTodoTitle: string;

  constructor(
    private store: Store<{ todos: Todo[] }>,
    private todosService: TodosService
  ) {}

  ngOnInit() {
    this.store.dispatch(TodosActions.LoadTodos());
  }

  onCompleteChanged(todo: Todo, id: number) {
    this.store.dispatch(TodosActions.UpdateTodo({todo, id}));
  }

  addTodo() {
    if (this.newTodoTitle.trim().length === 0) {
      return;
    }
    let newTodo = new Todo(this.newTodoTitle.trim(), false);
    this.store.dispatch(TodosActions.CreateTodo({ todo: newTodo }));
    this.newTodoTitle = null;
  }
}
