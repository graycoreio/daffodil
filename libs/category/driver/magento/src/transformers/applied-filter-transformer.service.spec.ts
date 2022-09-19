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

import { DaffMagentoAppliedFiltersTransformService } from './applied-filter-transformer.service';

describe('DaffMagentoAppliedFiltersTransformService', () => {
  let rangeFilterRequestFactory: DaffFilterRequestRangeNumericFactory;
  let equalFilterRequestFactory: DaffFilterRequestEqualFactory;
  let service: DaffMagentoAppliedFiltersTransformService;
  const categoryId = 'id';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoAppliedFiltersTransformService,
      ],
    });
    service = TestBed.inject(DaffMagentoAppliedFiltersTransformService);
    rangeFilterRequestFactory = TestBed.inject(DaffFilterRequestRangeNumericFactory);
    equalFilterRequestFactory = TestBed.inject(DaffFilterRequestEqualFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {

    it('should return only a category filter when there are no additional filters', () => {
      const expectedReturn: MagentoProductFilters = {
        category_uid: {
          eq: 'id',
        },
      };

      expect(service.transform(categoryId, null)).toEqual(expectedReturn);
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
          category_uid: {
            eq: 'id',
          },
          [rangeFilterRequest.name]: {
            [MagentoProductFilterActionEnum.From]: '30',
            [MagentoProductFilterActionEnum.To]: '40',
          },
        };

        expect(service.transform(categoryId, [rangeFilterRequest])).toEqual(expectedReturn);
      });
    });

    describe('when the filter type is not Range', () => {
      let equalFilterRequest: DaffFilterEqualRequest;

      beforeEach(() => {
        equalFilterRequest = equalFilterRequestFactory.create();
      });

      it('should transform an array of DaffFilterRequest into a MagentoProductFilters', () => {
        const expectedReturn: MagentoProductFilters = {
          category_uid: {
            eq: 'id',
          },
          [equalFilterRequest.name]: {
            [MagentoProductFilterActionEnum.In]: equalFilterRequest.value,
          },
        };
        expect(service.transform(categoryId, [equalFilterRequest])).toEqual(expectedReturn);
      });
    });
  });
});
