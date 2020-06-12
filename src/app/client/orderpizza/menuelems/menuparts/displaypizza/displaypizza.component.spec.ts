import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypizzaComponent } from './displaypizza.component';

describe('DisplaypizzaComponent', () => {
  let component: DisplaypizzaComponent;
  let fixture: ComponentFixture<DisplaypizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaypizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
