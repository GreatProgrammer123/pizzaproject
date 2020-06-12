import { TestBed } from '@angular/core/testing';

import { ExtendpizzadetService } from './extendpizzadet.service';

describe('ExtendpizzadetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtendpizzadetService = TestBed.get(ExtendpizzadetService);
    expect(service).toBeTruthy();
  });
});
