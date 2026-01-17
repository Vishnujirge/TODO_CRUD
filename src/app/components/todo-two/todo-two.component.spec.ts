import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTwoComponent } from './todo-two.component';

describe('TodoTwoComponent', () => {
  let component: TodoTwoComponent;
  let fixture: ComponentFixture<TodoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
