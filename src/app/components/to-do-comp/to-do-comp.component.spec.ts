import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCompComponent } from './to-do-comp.component';

describe('ToDoCompComponent', () => {
  let component: ToDoCompComponent;
  let fixture: ComponentFixture<ToDoCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoCompComponent]
    });
    fixture = TestBed.createComponent(ToDoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
