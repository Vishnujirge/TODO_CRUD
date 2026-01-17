import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDThreeComponent } from './crud-three.component';

describe('CRUDThreeComponent', () => {
  let component: CRUDThreeComponent;
  let fixture: ComponentFixture<CRUDThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
