export interface DaffNavigationTree<T extends DaffNavigationTree<T>> {
  id: string;
  name: string;
  path: string;
  children_count?: number;
  total_products?: number;
  children?: T[];
}
