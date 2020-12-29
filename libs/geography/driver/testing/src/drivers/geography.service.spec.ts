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

  let countryFactorySpy: jasmine.SpyObj<DaffCountryFactory>;
  let subdivisionFactorySpy: jasmine.SpyObj<DaffSubdivisionFactory>;

  let countryFactory: DaffCountryFactory;
  let subdivisionFactory: DaffSubdivisionFactory;

  let mockCountry: DaffCountry;
  let mockSubdivision: DaffSubdivision;
  let countryId: DaffCountry['id'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffCountryFactory,
          useValue: jasmine.createSpyObj('DaffCountryFactory', ['create', 'createMany'])
        },
        {
          provide: DaffSubdivisionFactory,
          useValue: jasmine.createSpyObj('DaffSubdivisionFactory', ['create', 'createMany'])
        },
        DaffTestingGeographyService
      ]
    });

    service = TestBed.inject(DaffTestingGeographyService);
    countryFactorySpy = TestBed.inject(DaffCountryFactory);
    subdivisionFactorySpy = TestBed.inject(DaffSubdivisionFactory);

    countryFactory = new DaffCountryFactory();
    subdivisionFactory = new DaffSubdivisionFactory();

    mockCountry = countryFactory.create();
    mockSubdivision = subdivisionFactory.create();
    countryId = mockCountry.id;

    countryFactorySpy.create.and.returnValue(mockCountry);
    countryFactorySpy.createMany.and.returnValue([mockCountry]);
    subdivisionFactorySpy.create.and.returnValue(mockSubdivision);
    subdivisionFactorySpy.createMany.and.returnValue([mockSubdivision]);
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
