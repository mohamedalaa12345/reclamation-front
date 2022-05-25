import { TestBed } from '@angular/core/testing';

import { EquipementtService } from './equipementt.service';

describe('EquipementtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipementtService = TestBed.get(EquipementtService);
    expect(service).toBeTruthy();
  });
});
