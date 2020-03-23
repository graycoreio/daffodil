import { TestBed } from '@angular/core/testing';

import { DaffCountry } from '@daffodil/geography';

import { DaffCountryFactory } from './country.factory';

describe('Geography | Testing | Factories | DaffCountryFactory', () => {
  let factory: DaffCountryFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCountryFactory]
    });

    factory = TestBed.get(DaffCountryFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCountry;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a Country with all required fields defined', () => {
      expect(result.id).not.toBeNull();
      expect(result.name).not.toBeNull();
      expect(result.name_en).not.toBeNull();
      expect(result.alpha2).not.toBeNull();
      expect(result.alpha3).not.toBeNull();
      expect(result.subdivisions).not.toBeNull();
    });
  });
});
