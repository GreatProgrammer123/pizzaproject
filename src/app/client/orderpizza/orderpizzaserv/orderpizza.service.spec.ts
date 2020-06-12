import { TestBed } from '@angular/core/testing';

import { OrderpizzaService } from './orderpizza.service';

describe('OrderpizzaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderpizzaService = TestBed.get(OrderpizzaService);
    expect(service).toBeTruthy();
  });
});
