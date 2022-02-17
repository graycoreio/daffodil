import { MagentoSearchProductResult } from './result.interface';

export interface MagentoSearchForProductsResponse {
  __typename?: string;
  products: {
    __typename?: string;
    items: MagentoSearchProductResult[];
  };
}
