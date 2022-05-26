import { TestBed } from '@angular/core/testing';

import {
  MagentoProductFilterTypeField,
  MagentoAggregation,
  MagentoProductFilterType,
} from '@daffodil/product/driver/magento';
import {
  MagentoProductFilterTypeFieldFactory,
  MagentoProductAggregationFactory,
} from '@daffodil/product/driver/magento/testing';

import { magentoProductGetMatchedAttributeType } from './get-matched-attribute-type';

describe('@daffodil/product/driver/magento | magentoProductGetMatchedAttributeType', () => {
  let filterFieldFactory: MagentoProductFilterTypeFieldFactory;
  let aggregateFactory: MagentoProductAggregationFactory;

  let filterField: MagentoProductFilterTypeField;
  let aggregation: MagentoAggregation;

  let result: MagentoProductFilterType;

  beforeEach(() => {
    filterFieldFactory = TestBed.inject(MagentoProductFilterTypeFieldFactory);
    aggregateFactory = TestBed.inject(MagentoProductAggregationFactory);

    aggregation = aggregateFactory.create();
    filterField = filterFieldFactory.create({
      name: aggregation.attribute_code,
      type: {
        name: aggregation.type,
      },
    });

    result = magentoProductGetMatchedAttributeType(aggregation, [
      ...filterFieldFactory.createMany(3),
      filterField,
    ]);
  });

  it('should return the specified aggregate\'s type from the filter field response', () => {
    expect(result).toEqual(filterField.type.name);
  });
});
