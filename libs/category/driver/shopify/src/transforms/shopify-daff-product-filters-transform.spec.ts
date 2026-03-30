import {
  DaffFilterType,
  DaffFilterRangeNumeric,
  DaffFilterEqual,
} from '@daffodil/core';
import {
  ShopifyFilter,
  ShopifyFilterType,
  ShopifyProductFilter,
} from '@daffodil/driver/shopify';

import { daffShopifyProductFiltersTransformer } from './shopify-daff-product-filters-transform';

describe('@daffodil/category/driver/shopify | daffShopifyProductFiltersTransformer', () => {
  it('should transform empty arrays', () => {
    const result = daffShopifyProductFiltersTransformer([], []);
    expect(result).toEqual({});
  });

  describe('PRICE_RANGE filters', () => {
    it('should transform a price range filter', () => {
      const queryFilters: ShopifyProductFilter[] = [];
      const resultFilters: ShopifyFilter[] = [{
        id: 'filter.v.price',
        label: 'Price',
        type: ShopifyFilterType.PriceRange,
        values: [{
          id: 'price-filter',
          label: '$10 - $100',
          count: 50,
          input: '{"price":{"min":10,"max":100}}',
        }],
      }];

      const result = daffShopifyProductFiltersTransformer(queryFilters, resultFilters);

      expect(result['Price']).toBeDefined();
      expect(result['Price'].type).toBe(DaffFilterType.RangeNumeric);
      const priceFilter = <DaffFilterRangeNumeric>result['Price'];
      expect(priceFilter.min).toBe(10);
      expect(priceFilter.max).toBe(100);
      expect(priceFilter.label).toBe('Price');
      expect(priceFilter.name).toBe('filter.v.price');
    });
  });

  describe('Equal filters', () => {
    it('should transform an equal filter', () => {
      const queryFilters: ShopifyProductFilter[] = [];
      const resultFilters: ShopifyFilter[] = [{
        id: 'filter.v.tag',
        label: 'Tags',
        type: ShopifyFilterType.List,
        values: [{
          id: 'tag-summer',
          label: 'Summer',
          count: 25,
          input: '{"tag":"summer"}',
        }],
      }];

      const result = daffShopifyProductFiltersTransformer(queryFilters, resultFilters);

      expect(result['Tags']).toBeDefined();
      expect(result['Tags'].type).toBe(DaffFilterType.Equal);
      const tagFilter = <DaffFilterEqual>result['Tags'];
      expect(tagFilter.label).toBe('Tags');
      expect(tagFilter.name).toBe('filter.v.tag');
    });
  });

  describe('multiple filters', () => {
    it('should transform multiple filters with different types', () => {
      const queryFilters: ShopifyProductFilter[] = [];
      const resultFilters: ShopifyFilter[] = [
        {
          id: 'filter.v.price',
          label: 'Price',
          type: ShopifyFilterType.PriceRange,
          values: [{
            id: 'price-filter',
            label: '$10 - $100',
            count: 50,
            input: '{"price":{"min":10,"max":100}}',
          }],
        },
        {
          id: 'filter.v.tag',
          label: 'Tags',
          type: ShopifyFilterType.List,
          values: [{
            id: 'tag-summer',
            label: 'Summer',
            count: 25,
            input: '{"tag":"summer"}',
          }],
        },
      ];

      const result = daffShopifyProductFiltersTransformer(queryFilters, resultFilters);

      expect(Object.keys(result).length).toBe(2);
      expect(result['Price']).toBeDefined();
      expect(result['Tags']).toBeDefined();
    });
  });
});
