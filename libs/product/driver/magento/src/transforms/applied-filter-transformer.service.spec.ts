import { TestBed } from '@angular/core/testing';

import {
  DaffFilterRangeNumericRequest,
  DaffFilterEqualRequest,
} from '@daffodil/core';
import {
  DaffFilterRequestRangeNumericFactory,
  DaffFilterRequestEqualFactory,
} from '@daffodil/core/testing';
import {
  MagentoProductFilters,
  MagentoProductFilterActionEnum,
} from '@daffodil/product/driver/magento';

import { MagentoProductAppliedFiltersTransformService } from './applied-filter-transformer.service';

describe('@daffodil/product/driver/magento | MagentoProductAppliedFiltersTransformService', () => {
  let rangeFilterRequestFactory: DaffFilterRequestRangeNumericFactory;
  let equalFilterRequestFactory: DaffFilterRequestEqualFactory;
  let service: MagentoProductAppliedFiltersTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MagentoProductAppliedFiltersTransformService,
      ],
    });
    service = TestBed.inject(MagentoProductAppliedFiltersTransformService);
    rangeFilterRequestFactory = TestBed.inject(DaffFilterRequestRangeNumericFactory);
    equalFilterRequestFactory = TestBed.inject(DaffFilterRequestEqualFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {

    it('should an empty object when there are no additional filters', () => {
      const expectedReturn: MagentoProductFilters = {};

      expect(service.transform(null)).toEqual(expectedReturn);
    });

    describe('when the filter type is Range', () => {
      let rangeFilterRequest: DaffFilterRangeNumericRequest;

      beforeEach(() => {
        rangeFilterRequest = rangeFilterRequestFactory.create({
          value: {
            min: 30,
            max: 40,
          },
        });
      });

      it('should transform a range filter request into a valid magento FromTo filter', () => {
        const expectedReturn: MagentoProductFilters = {
          [rangeFilterRequest.name]: {
            [MagentoProductFilterActionEnum.From]: '30',
            [MagentoProductFilterActionEnum.To]: '40',
          },
        };

        expect(service.transform([rangeFilterRequest])).toEqual(expectedReturn);
      });
    });

    describe('when the filter type is not Range', () => {
      let equalFilterRequest: DaffFilterEqualRequest;

      beforeEach(() => {
        equalFilterRequest = equalFilterRequestFactory.create();
      });

      it('should transform an array of DaffFilterRequest into a MagentoProductFilters', () => {
        const expectedReturn: MagentoProductFilters = {
          [equalFilterRequest.name]: {
            [MagentoProductFilterActionEnum.In]: equalFilterRequest.value,
          },
        };
        expect(service.transform([equalFilterRequest])).toEqual(expectedReturn);
      });
    });
  });
});
