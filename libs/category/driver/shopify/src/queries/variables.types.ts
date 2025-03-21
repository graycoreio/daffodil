import { ProductFilter } from '@daffodil/driver/shopify';

export interface ShopifyCollectionProductVariables {
  reverse: boolean;
  sortKey: string;
  filters: ProductFilter[];
}

export interface ShopifyCategoryIDVariables extends ShopifyCollectionProductVariables {
  id: string;
}

export interface ShopifyCategoryUrlVariables extends ShopifyCollectionProductVariables {
  handle: string;
}
