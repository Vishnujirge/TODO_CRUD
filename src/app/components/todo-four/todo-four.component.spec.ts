import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFourComponent } from './todo-four.component';

describe('TodoFourComponent', () => {
  let component: TodoFourComponent;
  let fixture: ComponentFixture<TodoFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
