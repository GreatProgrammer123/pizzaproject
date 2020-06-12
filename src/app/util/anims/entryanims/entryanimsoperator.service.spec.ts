import { TestBed } from '@angular/core/testing';

import { EntryanimsoperatorService } from './entryanimsoperator.service';

describe('EntryanimsoperatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntryanimsoperatorService = TestBed.get(EntryanimsoperatorService);
    expect(service).toBeTruthy();
  });
});
