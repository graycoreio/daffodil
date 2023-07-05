import { MagentoProduct } from '@daffodil/product/driver/magento';

export interface MagentoSearchProductIncrementalResponse {
  __typename?: string;
  products: {
    __typename?: string;
    items: MagentoProduct[];
    total_count: number;
  };
}
