import { TestBed } from '@angular/core/testing';

import { SourceTService } from './source-t.service';

describe('SourceTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SourceTService = TestBed.get(SourceTService);
    expect(service).toBeTruthy();
  });
});
