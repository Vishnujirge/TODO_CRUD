import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboardIOComponent } from './todo-dashboard-io.component';

describe('TodoDashboardIOComponent', () => {
  let component: TodoDashboardIOComponent;
  let fixture: ComponentFixture<TodoDashboardIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashboardIOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDashboardIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
