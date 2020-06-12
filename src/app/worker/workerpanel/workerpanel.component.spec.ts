import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerpanelComponent } from './workerpanel.component';

describe('WorkerpanelComponent', () => {
  let component: WorkerpanelComponent;
  let fixture: ComponentFixture<WorkerpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
