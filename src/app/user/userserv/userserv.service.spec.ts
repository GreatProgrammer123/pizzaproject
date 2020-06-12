import { TestBed } from '@angular/core/testing';

import { UserservService } from './userserv.service';

describe('UserservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserservService = TestBed.get(UserservService);
    expect(service).toBeTruthy();
  });
});
