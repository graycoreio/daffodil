import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { of } from 'rxjs';

import {
  DaffCountry,
  DaffSubdivision
} from '@daffodil/geography';
import {
  DaffCountryFactory,
  DaffSubdivisionFactory
} from '@daffodil/geography/testing';

import { DaffMagentoGeographyService } from './geography.service';
import { DaffMagentoCountryTransformer } from './transforms/responses/country.service';
import { getCountries, MagentoGetCountriesResponse } from './queries/public_api';
import { MagentoRegion, MagentoCountry } from './models/responses/public_api';

describe('Driver | Magento | Geography | GeographyService', () => {
  let service: DaffMagentoGeographyService;
  let controller: ApolloTestingController;

  let daffCountryFactory: DaffCountryFactory;
  let daffSubdivisionFactory: DaffSubdivisionFactory;

  let countryTransformerSpy: jasmine.SpyObj<DaffMagentoCountryTransformer>;

  let countryId: DaffCountry['id'];
  let mockDaffCountry: DaffCountry;
  let mockDaffSubdivision: DaffSubdivision;
  let mockMagentoRegion: MagentoRegion;
  let mockMagentoCountry: MagentoCountry;
  let mockGetCountriesResponse: MagentoGetCountriesResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoGeographyService,
        {
          provide: DaffMagentoCountryTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCountryTransformer', ['transform'])
        }
      ]
    });

    service = TestBed.get(DaffMagentoGeographyService);
    controller = TestBed.get(ApolloTestingController);

    daffSubdivisionFactory = TestBed.get(DaffSubdivisionFactory);
    daffCountryFactory = TestBed.get(DaffCountryFactory);

    countryTransformerSpy = TestBed.get(DaffMagentoCountryTransformer);

    mockDaffCountry = daffCountryFactory.create();
    mockDaffSubdivision = daffSubdivisionFactory.create();

    countryId = mockDaffCountry.id;
    mockMagentoRegion = {
      id: Number(mockDaffSubdivision.id),
      name: mockDaffSubdivision.name,
      code: mockDaffSubdivision.iso_3166_2
    };
    mockMagentoCountry = {
      two_letter_abbreviation: mockDaffCountry.alpha2,
      three_letter_abbreviation: mockDaffCountry.alpha3,
      full_name_english: mockDaffCountry.name_en,
      full_name_locale: mockDaffCountry.name,
      available_regions: [mockMagentoRegion]
    };
    mockDaffCountry.subdivisions = [mockDaffSubdivision];
    mockGetCountriesResponse = {
      countries: [mockMagentoCountry]
    };

    countryTransformerSpy.transform.withArgs(mockMagentoCountry).and.returnValue(mockDaffCountry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a single country by ID', () => {
    beforeEach(() => {
      spyOn(service, 'list').and.returnValue(of([mockDaffCountry]));
    });

    it('should return the correct country', done => {
      service.get(countryId).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining(mockDaffCountry));
        done();
      });
    });
  });

  describe('list | list the available countries', () => {
    it('should call the transformer with the correct argument', done => {
      service.list().subscribe(() => {
        expect(countryTransformerSpy.transform).toHaveBeenCalledWith(mockMagentoCountry);
        done();
      });

      const op = controller.expectOne(getCountries);

      op.flush({
        data: mockGetCountriesResponse
      });
    });

    it('should return the correct value', done => {
      service.list().subscribe(result => {
        expect(result).toEqual([jasmine.objectContaining(mockDaffCountry)]);
        done();
      });

      const op = controller.expectOne(getCountries);

      op.flush({
        data: mockGetCountriesResponse
      });
    });

    describe('when the response is empty', () => {
      it('should return an empty array', done => {
        service.list().subscribe(result => {
          expect(result).toEqual([]);
          done();
        });

        const op = controller.expectOne(getCountries);

        op.flush({
          data: {
            countries: null
          }
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
