import { CategoryProductNode } from "./category-product-node";

export interface CategoryNode {
  id: string;
  name?: string;
  products?: CategoryProductNode;
  level?: number;
  children_count?: number;
  children?: CategoryNode[];
}
