import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterRequest,
  DaffProductFilterType,
  DaffProductFilterRangeNumeric,
  DaffProductFilterRangeNumericRequest,
  DaffProductFilterEqualRequest,
} from '@daffodil/product';
import {
  MagentoProductFilters,
  MagentoProductFilterActionEnum,
} from '@daffodil/product/driver/magento';
import {
  DaffProductFilterRequestRangeNumericFactory,
  DaffProductFilterRequestEqualFactory,
} from '@daffodil/product/testing';

import { DaffMagentoAppliedFiltersTransformService } from './applied-filter-transformer.service';

describe('DaffMagentoAppliedFiltersTransformService', () => {
  let rangeFilterRequestFactory: DaffProductFilterRequestRangeNumericFactory;
  let equalFilterRequestFactory: DaffProductFilterRequestEqualFactory;
  let service: DaffMagentoAppliedFiltersTransformService;
  const categoryId = 'id';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoAppliedFiltersTransformService,
      ],
    });
    service = TestBed.inject(DaffMagentoAppliedFiltersTransformService);
    rangeFilterRequestFactory = TestBed.inject(DaffProductFilterRequestRangeNumericFactory);
    equalFilterRequestFactory = TestBed.inject(DaffProductFilterRequestEqualFactory);
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
      let rangeFilterRequest: DaffProductFilterRangeNumericRequest;

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
      let equalFilterRequest: DaffProductFilterEqualRequest;

      beforeEach(() => {
        equalFilterRequest = equalFilterRequestFactory.create();
      });

      it('should transform an array of DaffProductFilterRequest into a MagentoProductFilters', () => {
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
