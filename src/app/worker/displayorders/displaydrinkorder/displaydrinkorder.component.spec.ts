import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydrinkorderComponent } from './displaydrinkorder.component';

describe('DisplaydrinkorderComponent', () => {
  let component: DisplaydrinkorderComponent;
  let fixture: ComponentFixture<DisplaydrinkorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydrinkorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydrinkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
