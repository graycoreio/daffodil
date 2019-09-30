import { ProductNode } from '@daffodil/product';

export interface CategoryProductsNode {
  total_count: number;
  items: ProductNode[];
}