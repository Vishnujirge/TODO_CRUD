import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import { TodoTwoComponent } from './components/todo-two/todo-two.component';
import { CRUDThreeComponent } from './components/crud-three/crud-three.component';
import { TodoFourComponent } from './components/todo-four/todo-four.component';
import { TodoDashboardIOComponent } from './IO_CRUD_Comp/todo-dashboard-io/todo-dashboard-io.component';
import { TodoFormComponent } from './IO_CRUD_Comp/todo-form/todo-form.component';
import { TodoListComponent } from './IO_CRUD_Comp/todo-list/todo-list.component';
// import {MatButtonModule} from 
@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoTwoComponent,
    CRUDThreeComponent,
    TodoFourComponent,
    TodoDashboardIOComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
