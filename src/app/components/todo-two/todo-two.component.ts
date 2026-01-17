import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/module/todoT';

@Component({
  selector: 'app-todo-two',
  templateUrl: './todo-two.component.html',
  styleUrls: ['./todo-two.component.scss'],
})
export class TodoTwoComponent implements OnInit {
  @ViewChild('todoItem') todoItemEleRef!: ElementRef;
  isInEditMode = false;
  editId!: string;
  todoArr: Array<Itodo> = [
    {
      todoItem: 'Vue.JS',
      todoId: '100',
    },
    {
      todoItem: 'Node.JS',
      todoId: '101',
    },
    {
      todoItem: 'Express.JS',
      todoId: '102',
    },
    {
      todoItem: 'Next.JS',
      todoId: '103',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    let todoObj: Itodo = {
      todoItem: this.todoItemEleRef.nativeElement.value,
      todoId: Date.now().toString(),
    };

    this.todoArr.push(todoObj);
    this.todoItemEleRef.nativeElement.value = '';
  }

  onRemove(id: string) {
    let getindex = this.todoArr.findIndex((t) => t.todoId === id);
    console.log(id);
    this.todoArr.splice(getindex, 1);
  }

  onEdit(todo: Itodo) {
    this.editId = todo.todoId;
    this.todoItemEleRef.nativeElement.value = todo.todoItem;
    this.isInEditMode = true;
  }

  onUpdate() {
    let UpdetObj: Itodo = {
      todoItem: this.todoItemEleRef.nativeElement.value,
      todoId: this.editId,
    };
    console.log(UpdetObj);
    let getindex = this.todoArr.findIndex((t) => t.todoId === this.editId);

    this.todoArr[getindex] = UpdetObj;

    this.isInEditMode = false;
    this.todoItemEleRef.nativeElement.value = '';
  }
}
