import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritedeladrComponent } from './writedeladr.component';

describe('WritedeladrComponent', () => {
  let component: WritedeladrComponent;
  let fixture: ComponentFixture<WritedeladrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritedeladrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritedeladrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
