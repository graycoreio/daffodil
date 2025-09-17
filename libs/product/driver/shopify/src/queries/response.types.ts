import {
  ShopifyProductNode,
  ShopifyProductGraph,
} from '@daffodil/driver/shopify';

export interface ShopifyProductAllResponse {
  products?: ShopifyProductGraph;
}

export interface ShopifyProductSingleResponse {
  product: ShopifyProductNode;
};
