import { MagentoProduct } from './magento-product';

export interface MagentoGetProductResponse {
  __typename?: string;
  products: {
    __typename?: string;
    items: MagentoProduct[];
  };
}
