import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieordershistoryComponent } from './vieordershistory.component';

describe('VieordershistoryComponent', () => {
  let component: VieordershistoryComponent;
  let fixture: ComponentFixture<VieordershistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieordershistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieordershistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
