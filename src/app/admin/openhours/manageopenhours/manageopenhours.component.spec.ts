import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageopenhoursComponent } from './manageopenhours.component';

describe('ManageopenhoursComponent', () => {
  let component: ManageopenhoursComponent;
  let fixture: ComponentFixture<ManageopenhoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageopenhoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageopenhoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
