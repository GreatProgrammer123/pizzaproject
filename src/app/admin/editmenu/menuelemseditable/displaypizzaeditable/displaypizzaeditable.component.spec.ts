import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypizzaeditableComponent } from './displaypizzaeditable.component';

describe('DisplaypizzaeditableComponent', () => {
  let component: DisplaypizzaeditableComponent;
  let fixture: ComponentFixture<DisplaypizzaeditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaypizzaeditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypizzaeditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
