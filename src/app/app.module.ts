import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { FormsModule } from "@angular/forms";
import { TodosEffects } from './state/todos.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from "./state/todos.reducers";

@NgModule({
  declarations: [
    AppComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ todos: todosReducer }),
    EffectsModule.forRoot([TodosEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
