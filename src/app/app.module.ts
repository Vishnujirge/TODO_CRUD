import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import { TodoTwoComponent } from './components/todo-two/todo-two.component';
// import {MatButtonModule} from 
@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
