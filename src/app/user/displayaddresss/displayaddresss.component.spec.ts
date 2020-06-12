import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayaddresssComponent } from './displayaddresss.component';

describe('DisplayaddresssComponent', () => {
  let component: DisplayaddresssComponent;
  let fixture: ComponentFixture<DisplayaddresssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayaddresssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayaddresssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
