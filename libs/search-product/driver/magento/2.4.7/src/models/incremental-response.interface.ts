import { MagentoProduct } from '@daffodil/product/driver/magento/2.4.7';

export interface MagentoSearchProductIncrementalResponse {
  __typename?: string;
  products: {
    __typename?: string;
    items: MagentoProduct[];
    total_count: number;
  };
}
