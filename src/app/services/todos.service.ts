import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../state/app.state";

@Injectable({
  providedIn: "root",
})
export class TodosService {
  private BASE_URL = "http://localhost:3000/todos";

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.BASE_URL);
  }

  addTodo(todo: Todo): Observable<Todo[]> {
    return this.http.post<Todo[]>(this.BASE_URL, todo);
  }

  completeTodo(todo: Todo, id: number): Observable<Todo> {
    return this.http.put<Todo>(`${this.BASE_URL}/${id}`, todo);
  }
}
