import { TestBed } from '@angular/core/testing';

import { SharefairApiService } from './sharefair-api.service';

describe('SharefairApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharefairApiService = TestBed.get(SharefairApiService);
    expect(service).toBeTruthy();
  });
});
