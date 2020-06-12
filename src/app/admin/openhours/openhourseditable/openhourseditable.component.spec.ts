import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenhourseditableComponent } from './openhourseditable.component';

describe('OpenhourseditableComponent', () => {
  let component: OpenhourseditableComponent;
  let fixture: ComponentFixture<OpenhourseditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenhourseditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenhourseditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
