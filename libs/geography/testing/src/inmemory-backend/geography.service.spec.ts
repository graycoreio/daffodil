import { TestBed } from '@angular/core/testing';

import { DaffInMemoryBackendGeographyService } from './geography.service';

describe('DaffInMemoryBackendGeographyService | Unit', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffInMemoryBackendGeographyService]
    });

    service = TestBed.get(DaffInMemoryBackendGeographyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createDb', () => {
    let result;

    beforeEach(() => {
      result = service.createDb();
    });

    it('should return a object with an array of countries', () => {
      expect(Array.isArray(result.countries)).toEqual(true);
      expect(result.countries.length).toBeGreaterThan(2);
    });
  });
});
