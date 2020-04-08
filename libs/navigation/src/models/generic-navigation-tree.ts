/**
 * The DaffGenericNavigationTree should be used only in extension when defining a new model.
 */
export interface DaffGenericNavigationTree<T extends DaffGenericNavigationTree<T>> {
  id: string;
  name: string;
  path: string;
  children_count?: number;
  total_products?: number;
  children?: T[];
}
