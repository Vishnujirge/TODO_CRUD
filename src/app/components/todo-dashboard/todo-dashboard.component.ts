// import { Component, OnInit, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/module/todoT';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss'],
})
export class TodoDashboardComponent implements OnInit {
  @ViewChild('todoItem') todoItem!: ElementRef;
  edit_id!: string;
  isInEditMode = false;

  todoArr: Array<Itodo> = [
    {
      todoItem: 'JS',
      todoId: '100',
    },
    {
      todoItem: 'TS',
      todoId: '101',
    },
    {
      todoItem: 'Angular',
      todoId: '102',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onEdit(todo: Itodo) {
    console.log(todo);
    this.edit_id = todo.todoId;
    this.todoItem.nativeElement.value = todo.todoItem;
    this.isInEditMode = true;
  }

  update() {
    let UpdateObj: Itodo = {
      todoItem: this.todoItem.nativeElement.value,
      todoId: this.edit_id,
    };
    console.log(UpdateObj);

    let getIndex = this.todoArr.findIndex((t) => t.todoId === UpdateObj.todoId);

    this.todoArr[getIndex] = UpdateObj;
    this.isInEditMode = false;
    this.todoItem.nativeElement.value = '';
  }

  onRemove(id: string) {
    let getIndex = this.todoArr.findIndex((t) => id === t.todoId);

    this.todoArr.splice(getIndex, 1);
  }

  OnAdd() {
    
    let todoObj: Itodo = {
      todoItem: this.todoItem.nativeElement.value,
      todoId: Date.now().toString(),
    };

    this.todoArr.push(todoObj);

    this.todoItem.nativeElement.value = '';
  }
}
