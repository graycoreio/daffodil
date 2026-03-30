import {
  DaffCategoryIdRequest,
  DaffCategoryRequestKind,
  DaffCategoryUrlRequest,
} from '@daffodil/category';
import { DaffSortDirectionEnum } from '@daffodil/core';

import { shopifyProductCollectionVariablesTransformer } from './shopify-product-collection-variables-transform.ts';

describe('@daffodil/category/driver/shopify | shopifyProductCollectionVariablesTransformer', () => {
  describe('transforming a category ID request', () => {
    it('should transform basic category request with defaults', () => {
      const request: DaffCategoryIdRequest = {
        kind: DaffCategoryRequestKind.ID,
        id: 'test-id',
        filterRequests: [],
      };

      const result = shopifyProductCollectionVariablesTransformer(request);

      expect(result.filters).toEqual([]);
      expect(result.first).toBeUndefined();
      expect(result.reverse).toBe(false);
    });

    it('should transform pageSize', () => {
      const request: DaffCategoryIdRequest = {
        kind: DaffCategoryRequestKind.ID,
        id: 'test-id',
        filterRequests: [],
        pageSize: 20,
      };

      const result = shopifyProductCollectionVariablesTransformer(request);

      expect(result.first).toBe(20);
    });

    it('should set reverse to true for descending sort direction', () => {
      const request: DaffCategoryIdRequest = {
        kind: DaffCategoryRequestKind.ID,
        id: 'test-id',
        filterRequests: [],
        appliedSortDirection: DaffSortDirectionEnum.Descending,
      };

      const result = shopifyProductCollectionVariablesTransformer(request);

      expect(result.reverse).toBe(true);
    });

    it('should set reverse to false for ascending sort direction', () => {
      const request: DaffCategoryIdRequest = {
        kind: DaffCategoryRequestKind.ID,
        id: 'test-id',
        filterRequests: [],
        appliedSortDirection: DaffSortDirectionEnum.Ascending,
      };

      const result = shopifyProductCollectionVariablesTransformer(request);

      expect(result.reverse).toBe(false);
    });
  });

  describe('transforming a category URL request', () => {
    it('should transform basic URL request', () => {
      const request: DaffCategoryUrlRequest = {
        kind: DaffCategoryRequestKind.URL,
        url: '/test-category',
        filterRequests: [],
      };

      const result = shopifyProductCollectionVariablesTransformer(request);

      expect(result.filters).toEqual([]);
      expect(result.reverse).toBe(false);
    });
  });
});
