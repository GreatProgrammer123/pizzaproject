import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmenubarComponent } from './appmenubar.component';

describe('AppmenubarComponent', () => {
  let component: AppmenubarComponent;
  let fixture: ComponentFixture<AppmenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
