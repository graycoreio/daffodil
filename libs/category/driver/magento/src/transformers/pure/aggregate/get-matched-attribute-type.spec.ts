import { TestBed } from '@angular/core/testing';

import {
  MagentoCategoryFilterTypeField,
  MagentoAggregation,
  MagentoGetCategoryFilterTypesResponse,
  MagentoCategoryFilterType,
} from '@daffodil/category/driver/magento';
import {
  DaffCategoryDriverMagentoCategoryFilterTypeFieldFactory,
  DaffCategoryDriverMagentoAggregationFactory,
} from '@daffodil/category/driver/magento/testing';

import { getMatchedAttributeType } from './get-matched-attribute-type';

describe('@daffodil/category/driver/magento | getMatchedAttributeType', () => {
  let filterFieldFactory: DaffCategoryDriverMagentoCategoryFilterTypeFieldFactory;
  let aggregateFactory: DaffCategoryDriverMagentoAggregationFactory;

  let filterField: MagentoCategoryFilterTypeField;
  let aggregation: MagentoAggregation;
  let filterTypesResponse: MagentoGetCategoryFilterTypesResponse;

  let result: MagentoCategoryFilterType;

  beforeEach(() => {
    filterFieldFactory = TestBed.inject(DaffCategoryDriverMagentoCategoryFilterTypeFieldFactory);
    aggregateFactory = TestBed.inject(DaffCategoryDriverMagentoAggregationFactory);

    aggregation = aggregateFactory.create();
    filterField = filterFieldFactory.create({
      name: aggregation.attribute_code,
      type: {
        name: aggregation.type,
      },
    });
    filterTypesResponse = {
      __type: {
        inputFields: [
          ...filterFieldFactory.createMany(3),
          filterField,
        ],
      },
    };

    result = getMatchedAttributeType(aggregation, filterTypesResponse);
  });

  it('should return the specified aggregate\'s type from the filter field response', () => {
    expect(result).toEqual(filterField.type.name);
  });
});
