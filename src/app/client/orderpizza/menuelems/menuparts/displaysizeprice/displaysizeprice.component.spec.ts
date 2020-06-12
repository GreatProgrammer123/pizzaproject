import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysizepriceComponent } from './displaysizeprice.component';

describe('DisplaysizepriceComponent', () => {
  let component: DisplaysizepriceComponent;
  let fixture: ComponentFixture<DisplaysizepriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaysizepriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaysizepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
