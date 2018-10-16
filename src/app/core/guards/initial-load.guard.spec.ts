import { TestBed, async, inject } from '@angular/core/testing';

import { InitialLoadGuard } from './initial-load.guard';

describe('InitialLoadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitialLoadGuard]
    });
  });

  it('should ...', inject([InitialLoadGuard], (guard: InitialLoadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
