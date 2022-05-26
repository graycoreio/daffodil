import { TestBed } from '@angular/core/testing';

import {
  MagentoAggregation,
  MagentoProductFilterTypeField,
} from '@daffodil/product/driver/magento';
import {
  MagentoProductAggregationFactory,
  MagentoProductFilterTypeFieldFactory,
} from '@daffodil/product/driver/magento/testing';

import { magentoProductAddMetadataTypesToAggregates } from './add-metadata-types-to-aggregates';

describe('@daffodil/product/driver/magento | magentoProductAddMetadataTypesToAggregates', () => {
  let aggregationFactory: MagentoProductAggregationFactory;
  let filterTypesFactory: MagentoProductFilterTypeFieldFactory;

  let aggregations: MagentoAggregation[];
  let filterFieldTypes: MagentoProductFilterTypeField[];

  let result: MagentoAggregation[];

  beforeEach(() => {
    aggregationFactory = TestBed.inject(MagentoProductAggregationFactory);
    filterTypesFactory = TestBed.inject(MagentoProductFilterTypeFieldFactory);

    aggregations = aggregationFactory.createMany(2);
    filterFieldTypes = filterTypesFactory.createMany(2);

    filterFieldTypes[0].name = aggregations[0].attribute_code;

    result = magentoProductAddMetadataTypesToAggregates(filterFieldTypes, aggregations);
  });

  it('should add the attribute types to the aggregates', () => {
    expect(result[0].type).toEqual(filterFieldTypes[0].type.name);
  });
});
