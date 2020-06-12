import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderinlistComponent } from './orderinlist.component';

describe('OrderinlistComponent', () => {
  let component: OrderinlistComponent;
  let fixture: ComponentFixture<OrderinlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderinlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderinlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
