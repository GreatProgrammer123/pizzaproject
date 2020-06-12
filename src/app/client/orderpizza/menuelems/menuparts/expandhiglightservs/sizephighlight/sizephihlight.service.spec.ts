import { TestBed } from '@angular/core/testing';

import { SizephihlightService } from './sizephihlight.service';

describe('SizephihlightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SizephihlightService = TestBed.get(SizephihlightService);
    expect(service).toBeTruthy();
  });
});
