import { TestBed } from '@angular/core/testing';

import {
  DaffCountry,
  DaffSubdivision
} from '@daffodil/geography';
import {
  DaffCountryFactory,
  DaffSubdivisionFactory,
} from '@daffodil/geography/testing';

import { DaffMagentoCountryTransformer } from './country.service';
import { DaffMagentoSubdivisionTransformer } from './subdivision.service';
import { MagentoCountry } from '../../models/responses/country';
import { MagentoRegion } from '../../models/responses/region';

describe('Driver | Magento | Geography | Transformer | Country', () => {
  let service: DaffMagentoCountryTransformer;

  let daffSubdivisionFactory: DaffSubdivisionFactory;
  let daffCountryFactory: DaffCountryFactory;

  let mockDaffCountry: DaffCountry;
  let mockDaffSubdivision: DaffSubdivision;
  let mockMagentoRegion: MagentoRegion;
  let mockMagentoCountry: MagentoCountry;

  let subdivisionTransformerSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCountryTransformer,
        {
          provide: DaffMagentoSubdivisionTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoSubdivisionTransformer', ['transform'])
        }
      ]
    });

    service = TestBed.get(DaffMagentoCountryTransformer);

    daffSubdivisionFactory = TestBed.get(DaffSubdivisionFactory);
    daffCountryFactory = TestBed.get(DaffCountryFactory);

    subdivisionTransformerSpy = TestBed.get(DaffMagentoSubdivisionTransformer);

    mockDaffCountry = daffCountryFactory.create();
    mockDaffSubdivision = daffSubdivisionFactory.create();

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

    subdivisionTransformerSpy.transform.withArgs(mockMagentoRegion).and.returnValue(mockDaffSubdivision);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a country', () => {
    let transformedCountry;

    describe('when the country has all its fields defined', () => {
      beforeEach(() => {
        transformedCountry = service.transform(mockMagentoCountry);
      });

      it('should return an object with the correct values', () => {
        expect(transformedCountry.name).toEqual(mockDaffCountry.name);
        expect(transformedCountry.name_en).toEqual(mockDaffCountry.name_en);
        expect(transformedCountry.alpha2).toEqual(mockDaffCountry.alpha2);
        expect(transformedCountry.alpha3).toEqual(mockDaffCountry.alpha3);
      });

      it('should set the magento_country field', () => {
        expect(transformedCountry.magento_country).toEqual(mockMagentoCountry);
      });
    });

    describe('when the argument is null', () => {
      beforeEach(() => {
        transformedCountry = service.transform(null);
      });

      it('should return null and not throw an error', () => {
        expect(transformedCountry).toBeNull();
      });
    });
  });
});
