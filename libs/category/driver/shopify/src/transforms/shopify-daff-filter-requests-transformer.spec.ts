import {
  DaffFilterRequest,
  DaffFilterType,
} from '@daffodil/core';

import { shopifyProductFilterRequestsTransformer } from './shopify-daff-filter-requests-transformer';

describe('@daffodil/category/driver/shopify | shopifyProductFilterRequestsTransformer', () => {
  describe('Equal filters', () => {
    it('should transform single tag filter', () => {
      const input: DaffFilterRequest[] = [{
        type: DaffFilterType.Equal,
        name: 'filter.v.tag',
        value: ['{"tag":"summer"}'],
      }];
      expect(shopifyProductFilterRequestsTransformer(input))
        .toEqual([{ tag: 'summer' }]);
    });

    it('should transform multiple values in same filter into separate filter objects', () => {
      const input: DaffFilterRequest[] = [{
        type: DaffFilterType.Equal,
        name: 'filter.v.tag',
        value: ['{"tag":"summer"}', '{"tag":"winter"}'],
      }];
      expect(shopifyProductFilterRequestsTransformer(input))
        .toEqual([{ tag: 'summer' }, { tag: 'winter' }]);
    });

    it('should transform variantOption filter', () => {
      const input: DaffFilterRequest[] = [{
        type: DaffFilterType.Equal,
        name: 'filter.v.option.color',
        value: ['{"variantOption":{"name":"Color","value":"Red"}}'],
      }];
      expect(shopifyProductFilterRequestsTransformer(input))
        .toEqual([{ variantOption: { name: 'Color', value: 'Red' }}]);
    });

    it('should transform available filter', () => {
      const input: DaffFilterRequest[] = [{
        type: DaffFilterType.Equal,
        name: 'filter.v.available',
        value: ['{"available":true}'],
      }];
      expect(shopifyProductFilterRequestsTransformer(input))
        .toEqual([{ available: true }]);
    });

    it('should transform category filter', () => {
      const input: DaffFilterRequest[] = [{
        type: DaffFilterType.Equal,
        name: 'filter.v.category',
        value: ['{"category":{"id":"gid://shopify/Collection/123"}}'],
      }];
      expect(shopifyProductFilterRequestsTransformer(input))
        .toEqual([{ category: { id: 'gid://shopify/Collection/123' }}]);
    });

    it('should transform productMetafield filter', () => {
      const input: DaffFilterRequest[] = [{
        type: DaffFilterType.Equal,
        name: 'filter.v.metafield',
        value: ['{"productMetafield":{"key":"material","namespace":"custom","value":"cotton"}}'],
      }];
      expect(shopifyProductFilterRequestsTransformer(input))
        .toEqual([{ productMetafield: { key: 'material', namespace: 'custom', value: 'cotton' }}]);
    });
  });

  describe('RangeNumeric filters', () => {
    it('should transform price range filter', () => {
      const input: DaffFilterRequest[] = [{
        type: DaffFilterType.RangeNumeric,
        name: 'filter.v.price',
        value: { min: 10, max: 100 },
      }];
      expect(shopifyProductFilterRequestsTransformer(input))
        .toEqual([{ price: { min: 10, max: 100 }}]);
    });
  });

  describe('multiple filter requests', () => {
    it('should transform different filter types into separate filter objects', () => {
      const input: DaffFilterRequest[] = [
        { type: DaffFilterType.Equal, name: 'filter.v.tag', value: ['{"tag":"summer"}']},
        { type: DaffFilterType.RangeNumeric, name: 'filter.v.price', value: { min: 10, max: 50 }},
      ];
      expect(shopifyProductFilterRequestsTransformer(input))
        .toEqual([{ tag: 'summer' }, { price: { min: 10, max: 50 }}]);
    });

    it('should transform multiple Equal filters with different keys into separate filter objects', () => {
      const input: DaffFilterRequest[] = [
        { type: DaffFilterType.Equal, name: 'filter.v.option.color', value: ['{"variantOption":{"name":"Color","value":"Red"}}']},
        { type: DaffFilterType.Equal, name: 'filter.v.tag', value: ['{"tag":"summer"}']},
      ];
      expect(shopifyProductFilterRequestsTransformer(input))
        .toEqual([
          { variantOption: { name: 'Color', value: 'Red' }},
          { tag: 'summer' },
        ]);
    });
  });

  describe('edge cases', () => {
    it('should return empty array for null input', () => {
      expect(shopifyProductFilterRequestsTransformer(null)).toEqual([]);
    });

    it('should return empty array for undefined input', () => {
      expect(shopifyProductFilterRequestsTransformer(undefined)).toEqual([]);
    });

    it('should return empty array for empty array input', () => {
      expect(shopifyProductFilterRequestsTransformer([])).toEqual([]);
    });
  });
});
