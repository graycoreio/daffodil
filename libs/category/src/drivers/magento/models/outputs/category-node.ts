import { CategoryProductsNode } from './category-products-node';
import { BreadcrumbNode } from './breadcrumb-node';

export interface CategoryNode {
  id: string;
  name?: string;
  breadcrumbs?: BreadcrumbNode[];
  products?: CategoryProductsNode;
  level?: number;
  children_count?: number;
  children?: CategoryNode[];
}