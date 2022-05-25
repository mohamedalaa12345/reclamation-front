import { TestBed } from '@angular/core/testing';

import { DegatService } from './degat.service';

describe('DegatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DegatService = TestBed.get(DegatService);
    expect(service).toBeTruthy();
  });
});
