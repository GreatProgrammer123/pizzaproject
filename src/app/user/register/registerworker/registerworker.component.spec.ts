import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterworkerComponent } from './registerworker.component';

describe('RegisterworkerComponent', () => {
  let component: RegisterworkerComponent;
  let fixture: ComponentFixture<RegisterworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
