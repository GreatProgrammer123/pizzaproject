import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysizepriceeditableComponent } from './displaysizepriceeditable.component';

describe('DisplaysizepriceeditableComponent', () => {
  let component: DisplaysizepriceeditableComponent;
  let fixture: ComponentFixture<DisplaysizepriceeditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaysizepriceeditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaysizepriceeditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
