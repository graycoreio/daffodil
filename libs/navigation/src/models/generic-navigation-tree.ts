import {
  DaffIdentifiable,
  DaffLocatable,
  ID,
} from '@daffodil/core';

import { DaffNavigationBreadcrumb } from './navigation-breadcrumb';

/**
 * The DaffGenericNavigationTree should be used only in extension when defining a new model.
 */
export interface DaffGenericNavigationTree<T extends DaffGenericNavigationTree<T>> extends DaffLocatable, DaffIdentifiable {
  name: string;
  children_count?: number;
  total_products?: number;
  children?: T[];
  breadcrumbs: DaffNavigationBreadcrumb[];
}
