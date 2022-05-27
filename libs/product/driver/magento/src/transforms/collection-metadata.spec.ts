import { TestBed } from '@angular/core/testing';

import { DaffProductCollectionMetadata } from '@daffodil/product';
import { DaffProductFilterType } from '@daffodil/product';
import {
  MagentoProductPageInfo,
  MagentoProductSortFields,
} from '@daffodil/product/driver/magento';
import { MagentoAggregation } from '@daffodil/product/driver/magento';
import {
  MagentoProductAggregationSelectFactory,
  MagentoProductAggregationPriceFactory,
  MagentoProductPageInfoFactory,
  MagentoProductSortFieldsFactory,
} from '@daffodil/product/driver/magento/testing';

import { magentoProductCollectionMetadataTransform } from './collection-metadata';


describe('@daffodil/product/driver/magento | magentoProductCollectionMetadataTransform', () => {
  let priceAggregateFactory: MagentoProductAggregationPriceFactory;
  let selectAggregateFactory: MagentoProductAggregationSelectFactory;
  let pageInfoFactory: MagentoProductPageInfoFactory;
  let sortFieldsFactory: MagentoProductSortFieldsFactory;

  let aggregates: MagentoAggregation[];
  let pageInfo: MagentoProductPageInfo;
  let sortFields: MagentoProductSortFields;
  let count: number;
  let result: DaffProductCollectionMetadata;

  beforeEach(() => {
    selectAggregateFactory = TestBed.inject(MagentoProductAggregationSelectFactory);
    priceAggregateFactory = TestBed.inject(MagentoProductAggregationPriceFactory);
    pageInfoFactory = TestBed.inject(MagentoProductPageInfoFactory);
    sortFieldsFactory = TestBed.inject(MagentoProductSortFieldsFactory);

    pageInfo = pageInfoFactory.create();
    sortFields = sortFieldsFactory.create();
    aggregates = [];
    count = 5;

    result = magentoProductCollectionMetadataTransform(aggregates, pageInfo, sortFields, count);
  });

  it('should transform page info', () => {
    expect(result.current_page).toEqual(pageInfo.current_page);
    expect(result.page_size).toEqual(pageInfo.page_size);
    expect(result.total_pages).toEqual(pageInfo.total_pages);
  });

  it('should transform sort fields', () => {
    expect(result.sort_options.default).toEqual(sortFields.default);
    expect(result.sort_options.options).toEqual(jasmine.arrayContaining(sortFields.options.map(option => jasmine.objectContaining(option))));
  });

  it('should transform count', () => {
    expect(result.total_products).toEqual(count);
  });

  describe('when the sort options are immutable', () => {
    beforeEach(() => {
      Object.freeze(sortFields.options);
    });

    it('should complete successfully', () => {
      expect(magentoProductCollectionMetadataTransform(aggregates, pageInfo, sortFields, count)).toBeTruthy();
    });
  });

  describe('when the aggregate is a select', () => {
    beforeEach(() => {
      aggregates = selectAggregateFactory.createMany(1);
      result = magentoProductCollectionMetadataTransform(aggregates, pageInfo, sortFields, count);
    });

    it('should return a DaffProductCollectionMetadata with an equal filter type', () => {
      expect(result.filters[aggregates[0].attribute_code].type).toEqual(DaffProductFilterType.Equal);
    });
  });

  describe('when the aggregate is a price', () => {
    beforeEach(() => {
      aggregates = priceAggregateFactory.createMany(1);
      result = magentoProductCollectionMetadataTransform(aggregates, pageInfo, sortFields, count);
    });

    it('should return a DaffProductCollectionMetadata with a range filter type', () => {
      expect(result.filters[aggregates[0].attribute_code].type).toEqual(DaffProductFilterType.RangeNumeric);
    });
  });
});
