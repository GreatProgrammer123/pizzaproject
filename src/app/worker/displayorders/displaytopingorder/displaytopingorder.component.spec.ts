import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytopingorderComponent } from './displaytopingorder.component';

describe('DisplaytopingorderComponent', () => {
  let component: DisplaytopingorderComponent;
  let fixture: ComponentFixture<DisplaytopingorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaytopingorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytopingorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
