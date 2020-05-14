import { TestBed } from '@angular/core/testing';

import { DaffCountry } from '@daffodil/geography';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import { DaffInMemoryBackendGeographyService } from './geography.service';

describe('DaffInMemoryBackendGeographyService | Unit', () => {
  let service: DaffInMemoryBackendGeographyService;

  let countryFactory: DaffCountryFactory;

  let mockCountry: DaffCountry;
  let countryId;
  let reqInfoStub;
  let baseUrl;
  let collection: DaffCountry[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendGeographyService,
      ]
    });
    service = TestBed.get(DaffInMemoryBackendGeographyService);

    countryFactory = TestBed.get(DaffCountryFactory);

    mockCountry = countryFactory.create();
    collection = [mockCountry];
    countryId = mockCountry.id;
    baseUrl = 'api/countries/';
    reqInfoStub = {
      resourceUrl: baseUrl,
      collection,
      req: {
        body: {}
      },
      utils: {
        createResponse$: func => func(),
        getJsonBody: req => req.body,
        findById: (ary, id) => ary.find(e => e.id === id)
      }
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('processing a get country request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = `${baseUrl}${countryId}/`;
      reqInfoStub.id = countryId;

      result = service.get(reqInfoStub);
    });

    it('should return the country', () => {
      expect(result.body).toEqual(mockCountry);
    });
  });

  describe('processing a list countries request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = baseUrl;

      result = service.get(reqInfoStub);
    });

    it('should return the country list', () => {
      expect(result.body).toEqual([mockCountry]);
    });
  });

  describe('createDb', () => {
    let result;

    beforeEach(() => {
      result = service.createDb(reqInfoStub);
    });

    it('should return a object with an array of countries', () => {
      expect(Array.isArray(result.countries)).toEqual(true);
      expect(result.countries.length).toBeGreaterThan(2);
    });
  });
});
