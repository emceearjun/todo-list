import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from "@angular/core";
import { Todo } from 'src/app/state/app.state';

@Component({
  selector: "todo-list-item",
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.scss"],
})
export class TodoListItemComponent implements OnInit {
  @Input() title: string;
  @Input() completed: boolean = false;
  @Input() index: number;

  @Output() onCompleteChanged = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit(): void {}

  onChange($event: any) {
    let todo = new Todo(this.title, this.completed);
    this.onCompleteChanged.emit(todo);
  }
}
