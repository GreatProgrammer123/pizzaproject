import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydrinkComponent } from './displaydrink.component';

describe('DisplaydrinkComponent', () => {
  let component: DisplaydrinkComponent;
  let fixture: ComponentFixture<DisplaydrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
