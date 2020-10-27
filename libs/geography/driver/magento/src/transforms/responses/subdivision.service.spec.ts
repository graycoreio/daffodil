import { TestBed } from '@angular/core/testing';

import {
  DaffSubdivision
} from '@daffodil/geography';
import {
  DaffSubdivisionFactory,
} from '@daffodil/geography/testing';

import { DaffMagentoSubdivisionTransformer } from './subdivision.service';
import { MagentoRegion } from '../../models/responses/region';

describe('Driver | Magento | Geography | Transformer | Subdivision', () => {
  let service: DaffMagentoSubdivisionTransformer;

  let daffSubdivisionFactory: DaffSubdivisionFactory;

  let mockDaffSubdivision: DaffSubdivision;
  let mockMagentoRegion: MagentoRegion;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoSubdivisionTransformer,
      ]
    });

    service = TestBed.get(DaffMagentoSubdivisionTransformer);

    daffSubdivisionFactory = TestBed.get(DaffSubdivisionFactory);

    mockDaffSubdivision = daffSubdivisionFactory.create();
    mockMagentoRegion = {
      id: Number(mockDaffSubdivision.id),
      name: mockDaffSubdivision.name,
      code: mockDaffSubdivision.iso_3166_2
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a subdivision', () => {
    let transformedCountry;

    describe('when the subdivision has all its fields defined', () => {
      beforeEach(() => {
        transformedCountry = service.transform(mockMagentoRegion);
      });

      it('should return an object with the correct values', () => {
        expect(transformedCountry).toEqual(jasmine.objectContaining(mockDaffSubdivision));
      });

      it('should set the magento_region field', () => {
        expect(transformedCountry.magento_region).toEqual(mockMagentoRegion);
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
