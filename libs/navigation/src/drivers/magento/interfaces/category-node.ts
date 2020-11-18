import { CategoryProductNode } from './category-product-node';

export interface CategoryNode {
  __typename?: string;
  id: string;
  name?: string;
  include_in_menu: boolean;
  products?: CategoryProductNode;
  level?: number;
  children_count?: number;
  children?: CategoryNode[];
}
