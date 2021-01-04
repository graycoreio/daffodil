import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCountry,
  DaffSubdivision
} from '@daffodil/geography';
import { DaffCountryFactory, DaffSubdivisionFactory } from '@daffodil/geography/testing';

import { DaffTestingGeographyService } from './geography.service';

describe('Driver | Testing | Geography | GeographyService', () => {
  let service: DaffTestingGeographyService;

  let countryCreateSpy: jasmine.Spy;
  let countryCreateManySpy: jasmine.Spy;
  let subdivisionCreateSpy: jasmine.Spy;
  let subdivisionCreateManySpy: jasmine.Spy;

  let countryFactory: DaffCountryFactory;
  let subdivisionFactory: DaffSubdivisionFactory;
  let countryFactoryService: DaffCountryFactory;
  let subdivisionFactoryService: DaffSubdivisionFactory;

  let mockCountry: DaffCountry;
  let mockSubdivision: DaffSubdivision;
  let countryId: DaffCountry['id'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingGeographyService
      ]
    });

    service = TestBed.inject(DaffTestingGeographyService);
    countryFactoryService = TestBed.inject(DaffCountryFactory);
    subdivisionFactoryService = TestBed.inject(DaffSubdivisionFactory);

    countryFactory = new DaffCountryFactory();
    subdivisionFactory = new DaffSubdivisionFactory();

    mockCountry = countryFactory.create();
    mockSubdivision = subdivisionFactory.create();
    countryId = mockCountry.id;

    countryCreateSpy = spyOn(countryFactoryService, 'create');
    countryCreateManySpy = spyOn(countryFactoryService, 'createMany');
    subdivisionCreateSpy = spyOn(subdivisionFactoryService, 'create');
    subdivisionCreateManySpy = spyOn(subdivisionFactoryService, 'createMany');
    countryCreateSpy.and.returnValue(mockCountry);
    countryCreateManySpy.and.returnValue([mockCountry]);
    subdivisionCreateSpy.and.returnValue(mockSubdivision);
    subdivisionCreateManySpy.and.returnValue([mockSubdivision]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should return a DaffCountry', () => {
      const expected = cold('(a|)', { a: mockCountry });
      expect(service.get(countryId)).toBeObservable(expected);
    });
  });

  describe('list', () => {
    it('should return a list of DaffCountries', () => {
      const expected = cold('(a|)', { a: [mockCountry] });
      expect(service.list()).toBeObservable(expected);
    });
  });
});
