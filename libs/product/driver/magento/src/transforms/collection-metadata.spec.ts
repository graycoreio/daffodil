import { TestBed } from '@angular/core/testing';

import { DaffSortDirectionEnum } from '@daffodil/core';
import { DaffCollectionMetadata } from '@daffodil/core';
import { DaffFilterType } from '@daffodil/core';
import {
  MagentoProduct,
  MagentoProductPageInfo,
  MagentoProductSortFields,
} from '@daffodil/product/driver/magento';
import { MagentoAggregation } from '@daffodil/product/driver/magento';
import {
  MagentoProductAggregationSelectFactory,
  MagentoProductAggregationPriceFactory,
  MagentoProductPageInfoFactory,
  MagentoProductSortFieldsFactory,
  MagentoProductFactory,
} from '@daffodil/product/driver/magento/testing';

import { magentoProductCollectionMetadataTransform } from './collection-metadata';

describe('@daffodil/product/driver/magento | magentoProductCollectionMetadataTransform', () => {
  let priceAggregateFactory: MagentoProductAggregationPriceFactory;
  let selectAggregateFactory: MagentoProductAggregationSelectFactory;
  let pageInfoFactory: MagentoProductPageInfoFactory;
  let sortFieldsFactory: MagentoProductSortFieldsFactory;
  let productFactory: MagentoProductFactory;

  let aggregates: MagentoAggregation[];
  let pageInfo: MagentoProductPageInfo;
  let sortFields: MagentoProductSortFields;
  let count: number;
  let products: MagentoProduct[];
  let result: DaffCollectionMetadata;

  beforeEach(() => {
    productFactory = TestBed.inject(MagentoProductFactory);
    selectAggregateFactory = TestBed.inject(MagentoProductAggregationSelectFactory);
    priceAggregateFactory = TestBed.inject(MagentoProductAggregationPriceFactory);
    pageInfoFactory = TestBed.inject(MagentoProductPageInfoFactory);
    sortFieldsFactory = TestBed.inject(MagentoProductSortFieldsFactory);

    pageInfo = pageInfoFactory.create();
    sortFields = sortFieldsFactory.create();
    aggregates = [];
    products = productFactory.createMany(3);
    count = 54;

    result = magentoProductCollectionMetadataTransform(aggregates, pageInfo, sortFields, products, count);
  });

  it('should transform page info', () => {
    expect(result.currentPage).toEqual(pageInfo.current_page);
    expect(result.pageSize).toEqual(pageInfo.page_size);
    expect(result.totalPages).toEqual(pageInfo.total_pages);
  });

  it('should transform sort fields', () => {
    expect(result.sortOptions.default).toEqual(sortFields.default);
    expect(result.sortOptions.options).toEqual(jasmine.arrayContaining(sortFields.options.map(option => jasmine.objectContaining(option))));
  });

  it('should transform count', () => {
    expect(result.count).toEqual(count);
  });

  describe('when the sort options are immutable', () => {
    beforeEach(() => {
      Object.freeze(sortFields.options);
    });

    it('should complete successfully', () => {
      expect(magentoProductCollectionMetadataTransform(aggregates, pageInfo, sortFields, products, count)).toBeTruthy();
    });
  });

  describe('when the aggregate is a select', () => {
    beforeEach(() => {
      aggregates = selectAggregateFactory.createMany(1);
      result = magentoProductCollectionMetadataTransform(aggregates, pageInfo, sortFields, products, count);
    });

    it('should return a DaffCollectionMetadata with an equal filter type', () => {
      expect(result.filters[aggregates[0].attribute_code].type).toEqual(DaffFilterType.Equal);
    });
  });

  describe('when the aggregate is a price', () => {
    beforeEach(() => {
      aggregates = priceAggregateFactory.createMany(1);
      result = magentoProductCollectionMetadataTransform(aggregates, pageInfo, sortFields, products, count);
    });

    it('should return a DaffCollectionMetadata with a range filter type', () => {
      expect(result.filters[aggregates[0].attribute_code].type).toEqual(DaffFilterType.RangeNumeric);
    });
  });

  describe('when the applied sort direction is passed', () => {
    let sortDirection: DaffSortDirectionEnum;

    beforeEach(() => {
      sortDirection = DaffSortDirectionEnum.Descending;
      result = magentoProductCollectionMetadataTransform(aggregates, pageInfo, sortFields, products, count, undefined, sortDirection);
    });

    it('should set that value', () => {
      expect(result.appliedSortDirection).toEqual(sortDirection);
    });
  });

  describe('when the applied sort option is not passed', () => {
    beforeEach(() => {
      result = magentoProductCollectionMetadataTransform(aggregates, pageInfo, sortFields, products, count, undefined);
    });

    it('should set that value to the default sort option', () => {
      expect(result.appliedSortOption).toEqual(sortFields.default);
    });
  });

  describe('when the applied sort option is passed', () => {
    let sortOption: string;

    beforeEach(() => {
      sortOption = 'option';
      result = magentoProductCollectionMetadataTransform(aggregates, pageInfo, sortFields, products, count, sortOption);
    });

    it('should set that value', () => {
      expect(result.appliedSortOption).toEqual(sortOption);
    });
  });
});
