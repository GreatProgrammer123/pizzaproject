import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypizzaorderComponent } from './displaypizzaorder.component';

describe('DisplaypizzaorderComponent', () => {
  let component: DisplaypizzaorderComponent;
  let fixture: ComponentFixture<DisplaypizzaorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaypizzaorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypizzaorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
