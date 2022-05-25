import { TestBed } from '@angular/core/testing';

import { TransportTService } from './transport-t.service';

describe('TransportTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransportTService = TestBed.get(TransportTService);
    expect(service).toBeTruthy();
  });
});
