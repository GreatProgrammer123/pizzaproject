import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytopingeditableComponent } from './displaytopingeditable.component';

describe('DisplaytopingeditableComponent', () => {
  let component: DisplaytopingeditableComponent;
  let fixture: ComponentFixture<DisplaytopingeditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaytopingeditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytopingeditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
