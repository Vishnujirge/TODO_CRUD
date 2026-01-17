import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/module/todoT';

@Component({
  selector: 'app-crud-three',
  templateUrl: './crud-three.component.html',
  styleUrls: ['./crud-three.component.scss'],
})
export class CRUDThreeComponent implements OnInit {
  @ViewChild('todoItem') todoItem!: ElementRef;

  todoArr: Array<Itodo> = [
    {
      todoItem: 'JS',
      todoId: '111',
    },
    {
      todoItem: 'TS',
      todoId: '112',
    },
  ];
  isInEditMode = false;

  constructor() {}

  ngOnInit(): void {}

  send() {
    let todoObj: Itodo = {
      todoItem: this.todoItem.nativeElement.value,
      todoId: Date.now().toString(),
    };

    this.todoArr.push(todoObj);
  }

  onRemove(id: string) {
    let getIndex = this.todoArr.findIndex((t) => t.todoId === id);

    this.todoArr.splice(getIndex, 1);
  }

  edit_id!: string;
  onEdit(todo: Itodo) {
    this.edit_id = todo.todoId;
    console.log(todo);
    this.todoItem.nativeElement.value = todo.todoItem;
    this.isInEditMode = true;
  }

  onUpdate() {
    let getIndex = this.todoArr.findIndex((t) => t.todoId === this.edit_id);

    let UpdateObj: Itodo = {
      todoItem: this.todoItem.nativeElement.value,
      todoId: this.edit_id,
    };

    this.todoArr[getIndex] = UpdateObj;
    this.todoItem.nativeElement.value = '';
    this.isInEditMode=false
  }
}
