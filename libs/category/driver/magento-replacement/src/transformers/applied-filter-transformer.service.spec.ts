import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRequest,
  DaffCategoryFilterType,
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterRangeNumericRequest,
  DaffCategoryFilterEqualRequest,
} from '@daffodil/category';
import {
  MagentoCategoryFilters,
  MagentoCategoryFilterActionEnum,
} from '@daffodil/category/driver/magento';
import {
  DaffCategoryFilterRequestRangeNumericFactory,
  DaffCategoryFilterRequestEqualFactory,
} from '@daffodil/category/testing';

import { DaffMagentoAppliedFiltersTransformService } from './applied-filter-transformer.service';

describe('DaffMagentoAppliedFiltersTransformService', () => {
  let rangeFilterRequestFactory: DaffCategoryFilterRequestRangeNumericFactory;
  let equalFilterRequestFactory: DaffCategoryFilterRequestEqualFactory;
  let service: DaffMagentoAppliedFiltersTransformService;
  const categoryId = 'id';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoAppliedFiltersTransformService,
      ],
    });
    service = TestBed.inject(DaffMagentoAppliedFiltersTransformService);
    rangeFilterRequestFactory = TestBed.inject(DaffCategoryFilterRequestRangeNumericFactory);
    equalFilterRequestFactory = TestBed.inject(DaffCategoryFilterRequestEqualFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {

    it('should return only a category filter when there are no additional filters', () => {
      const expectedReturn: MagentoCategoryFilters = {
        category_id: {
          eq: 'id',
        },
      };

      expect(service.transform(categoryId, null)).toEqual(expectedReturn);
    });

    describe('when the filter type is Range', () => {
      let rangeFilterRequest: DaffCategoryFilterRangeNumericRequest;

      beforeEach(() => {
        rangeFilterRequest = rangeFilterRequestFactory.create({
          value: {
            min: 30,
            max: 40,
          },
        });
      });

      it('should transform a range filter request into a valid magento FromTo filter', () => {
        const expectedReturn: MagentoCategoryFilters = {
          category_id: {
            eq: 'id',
          },
          [rangeFilterRequest.name]: {
            [MagentoCategoryFilterActionEnum.From]: '30',
            [MagentoCategoryFilterActionEnum.To]: '40',
          },
        };

        expect(service.transform(categoryId, [rangeFilterRequest])).toEqual(expectedReturn);
      });
    });

    describe('when the filter type is not Range', () => {
      let equalFilterRequest: DaffCategoryFilterEqualRequest;

      beforeEach(() => {
        equalFilterRequest = equalFilterRequestFactory.create();
      });

      it('should transform an array of DaffCategoryFilterRequest into a MagentoCategoryFilters', () => {
        const expectedReturn: MagentoCategoryFilters = {
          category_id: {
            eq: 'id',
          },
          [equalFilterRequest.name]: {
            [MagentoCategoryFilterActionEnum.In]: equalFilterRequest.value,
          },
        };
        expect(service.transform(categoryId, [equalFilterRequest])).toEqual(expectedReturn);
      });
    });
  });
});
