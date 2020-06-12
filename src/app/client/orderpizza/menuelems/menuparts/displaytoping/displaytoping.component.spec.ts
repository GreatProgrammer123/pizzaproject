import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytopingComponent } from './displaytoping.component';

describe('DisplaytopingComponent', () => {
  let component: DisplaytopingComponent;
  let fixture: ComponentFixture<DisplaytopingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaytopingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
