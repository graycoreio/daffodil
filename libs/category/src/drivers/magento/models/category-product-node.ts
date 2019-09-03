import { ProductNode } from "@daffodil/product";

export interface CategoryProductNode {
  total_count: number;
  items: ProductNode[];
}