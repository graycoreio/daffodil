import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { catchError } from 'rxjs/operators';

import {
  DaffCountry,
  DaffSubdivision
} from '@daffodil/geography';
import {
  DaffCountryFactory,
  DaffSubdivisionFactory
} from '@daffodil/geography/testing';

import { DaffGeographyMagentoService } from './geography.service';
import { DaffMagentoCountryTransformer } from './transforms/responses/country.service';
import { getCountries, MagentoGetCountriesResponse } from './queries/public_api';
import { MagentoRegion, MagentoCountry } from './models/responses/public_api';
import { getCountry } from './queries/get-country';
import { MagentoGetCountryResponse } from './queries/responses/get-country';
import { DaffCountryNotFoundError, DaffInvalidAPIResponseError } from '../../errors/public_api';
import * as validators from './validators/public_api';

describe('Driver | Magento | Geography | GeographyService', () => {
  let service: DaffGeographyMagentoService;
  let controller: ApolloTestingController;

  let daffCountryFactory: DaffCountryFactory;
  let daffSubdivisionFactory: DaffSubdivisionFactory;

  let countryTransformerSpy: jasmine.SpyObj<DaffMagentoCountryTransformer>;
  let validatorSpy: jasmine.Spy;

  let countryId: DaffCountry['id'];
  let mockDaffCountry: DaffCountry;
  let mockDaffSubdivision: DaffSubdivision;
  let mockMagentoRegion: MagentoRegion;
  let mockMagentoCountry: MagentoCountry;
  let mockGetCountriesResponse: MagentoGetCountriesResponse;
  let mockGetCountryResponse: MagentoGetCountryResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffGeographyMagentoService,
        {
          provide: DaffMagentoCountryTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCountryTransformer', ['transform'])
        }
      ]
    });

    service = TestBed.get(DaffGeographyMagentoService);
    controller = TestBed.get(ApolloTestingController);

    daffSubdivisionFactory = TestBed.get(DaffSubdivisionFactory);
    daffCountryFactory = TestBed.get(DaffCountryFactory);

    countryTransformerSpy = TestBed.get(DaffMagentoCountryTransformer);
    validatorSpy = jasmine.createSpy();
    spyOnProperty(validators, 'validateGetCountriesResponse').and.returnValue(validatorSpy);

    mockDaffCountry = daffCountryFactory.create();
    mockDaffSubdivision = daffSubdivisionFactory.create();

    countryId = mockDaffCountry.id;
    mockMagentoRegion = {
      id: Number(mockDaffSubdivision.id),
      name: mockDaffSubdivision.name,
      code: mockDaffSubdivision.iso_3166_2
    };
    mockMagentoCountry = {
      id: mockDaffCountry.id,
      two_letter_abbreviation: mockDaffCountry.alpha2,
      three_letter_abbreviation: mockDaffCountry.alpha3,
      full_name_english: mockDaffCountry.name_en,
      full_name_locale: mockDaffCountry.name,
    };
    mockGetCountriesResponse = {
      countries: [mockMagentoCountry]
    };
    mockGetCountryResponse = {
      country: mockMagentoCountry
    };

    countryTransformerSpy.transform.and.returnValue(mockDaffCountry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a single country by ID', () => {
    describe('when the call to the Magento API is successful', () => {
      beforeEach(() => {
        mockDaffCountry.subdivisions = [mockDaffSubdivision];
        mockMagentoCountry.available_regions = [mockMagentoRegion];
      });

      it('should call the transformer with the Magento country', done => {
        service.get(countryId).subscribe(() => {
          expect(countryTransformerSpy.transform).toHaveBeenCalledWith(mockMagentoCountry);
          done();
        });

        const op = controller.expectOne(getCountry);

        op.flush({
          data: mockGetCountryResponse
        });
      });

      it('should return the correct Daffodil country', done => {
        service.get(countryId).subscribe(result => {
          expect(result).toEqual(jasmine.objectContaining(mockDaffCountry));
          done();
        });

        const op = controller.expectOne(getCountry);

        op.flush({
          data: mockGetCountryResponse
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a DaffCountryNotFoundError', done => {
        service.get(countryId).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffCountryNotFoundError));
            done();
            return [];
          })
        ).subscribe();

        const op = controller.expectOne(getCountry);

        op.graphqlErrors([new GraphQLError(
          'Can\'t find a country with that ID.',
          null,
          null,
          null,
          null,
          null,
          {category: 'graphql-no-such-entity'}
        )]);
      });
    });
  });

  describe('list | listing the available countries', () => {
    describe('when the call to the Magento API is successful', () => {
      describe('and the response passes validation', () => {
        beforeEach(() => {
          mockDaffCountry.subdivisions = [mockDaffSubdivision];
          mockMagentoCountry.available_regions = [mockMagentoRegion];

          validatorSpy.and.returnValue({data: mockGetCountriesResponse});
        });

        it('should call the transformer with the each of Magento countries', done => {
          service.list().subscribe(() => {
            expect(countryTransformerSpy.transform).toHaveBeenCalledWith(mockMagentoCountry);
            done();
          });

          const op = controller.expectOne(getCountries);

          op.flush({
            data: mockGetCountriesResponse
          });
        });

        it('should return the list of Daffodil countries', done => {
          service.list().subscribe(result => {
            expect(result).toEqual([jasmine.objectContaining(mockDaffCountry)]);
            done();
          });

          const op = controller.expectOne(getCountries);

          op.flush({
            data: mockGetCountriesResponse
          });
        });
      });

      describe('and the response fails validation', () => {
        beforeEach(() => {
          validatorSpy.and.callFake(() => {
            throw new DaffInvalidAPIResponseError('Get countries response does not contain a valid list of countries.')
          });
        });

        it('should throw a DaffInvalidAPIResponseError', done => {
          service.list().pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffInvalidAPIResponseError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(getCountries);

          op.flush({
            data: mockGetCountriesResponse
          });
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error with a GraphQLError', done => {
        service.get(countryId).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            expect(err.graphQLErrors[0]).toEqual(jasmine.any(GraphQLError));
            done();
            return [];
          })
        ).subscribe();

        const op = controller.expectOne(getCountry);

        op.graphqlErrors([new GraphQLError(
          'Generic error.',
          null,
          null,
          null,
          null,
          null,
          {category: 'graphql'}
        )]);
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
