import { TestBed } from '@angular/core/testing';

import { MenuservService } from './menuserv.service';

describe('MenuservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuservService = TestBed.get(MenuservService);
    expect(service).toBeTruthy();
  });
});
