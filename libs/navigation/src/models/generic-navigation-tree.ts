import { ID } from '@daffodil/core';

import { DaffNavigationBreadcrumb } from './navigation-breadcrumb';

/**
 * The DaffGenericNavigationTree should be used only in extension when defining a new model.
 */
export interface DaffGenericNavigationTree<T extends DaffGenericNavigationTree<T>> {
  id: ID;
  name: string;
  path: ID;
  children_count?: number;
  total_products?: number;
	children?: T[];
	breadcrumbs: DaffNavigationBreadcrumb[];
}
