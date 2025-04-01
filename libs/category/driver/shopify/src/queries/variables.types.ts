import { ShopifyProductFilter } from '@daffodil/driver/shopify';

export interface ShopifyCollectionProductVariables {
  reverse: boolean;
  sortKey: string;
  filters: ShopifyProductFilter;
}

export interface ShopifyCategoryIDVariables extends ShopifyCollectionProductVariables {
  id: string;
}

export interface ShopifyCategoryUrlVariables extends ShopifyCollectionProductVariables {
  handle: string;
}
