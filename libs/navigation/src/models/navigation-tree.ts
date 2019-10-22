export interface DaffNavigationTree {
  id: string;
  name: string;
  path: string;
  children_count?: number;
  total_products?: number;
  children?: DaffNavigationTree[];
}
