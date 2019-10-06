import { TestBed } from '@angular/core/testing';

import { UnitOfMeasurementService } from '../unit-of-measurement/unit-of-measurement.service';

describe('UnitOfMeasurementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitOfMeasurementService = TestBed.get(UnitOfMeasurementService);
    expect(service).toBeTruthy();
  });
});
