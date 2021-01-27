import { TestBed, async, inject } from '@angular/core/testing';

import { SetCurrentObjectifGuard } from './set-current-objectif.guard';

describe('SetCurrentObjectifGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetCurrentObjectifGuard]
    });
  });

  it('should ...', inject([SetCurrentObjectifGuard], (guard: SetCurrentObjectifGuard) => {
    expect(guard).toBeTruthy();
  }));
});
