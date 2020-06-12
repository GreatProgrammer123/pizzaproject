import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisternormaluserComponent } from './registernormaluser.component';

describe('RegisternormaluserComponent', () => {
  let component: RegisternormaluserComponent;
  let fixture: ComponentFixture<RegisternormaluserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisternormaluserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisternormaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
