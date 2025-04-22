import {
  ShopifyProductCollectionSortKeys,
  ShopifyProductFilter,
} from '@daffodil/driver/shopify';

export interface ShopifyCollectionProductVariables {
  reverse: boolean;
  sortKey: ShopifyProductCollectionSortKeys;
  filters: ShopifyProductFilter[];
  first: number;
}

export interface ShopifyCategoryIDVariables extends ShopifyCollectionProductVariables {
  id: string;
}

export interface ShopifyCategoryUrlVariables extends ShopifyCollectionProductVariables {
  handle: string;
}
