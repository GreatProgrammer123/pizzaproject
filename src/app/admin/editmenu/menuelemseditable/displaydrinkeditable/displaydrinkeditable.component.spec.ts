import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydrinkeditableComponent } from './displaydrinkeditable.component';

describe('DisplaydrinkeditableComponent', () => {
  let component: DisplaydrinkeditableComponent;
  let fixture: ComponentFixture<DisplaydrinkeditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydrinkeditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydrinkeditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
