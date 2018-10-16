import { TestBed } from '@angular/core/testing';

import { AppControlService } from './app-control.service';

describe('AppControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppControlService = TestBed.get(AppControlService);
    expect(service).toBeTruthy();
  });
});
