import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffGenericCategory,
  DaffCategory,
} from '@daffodil/category';
import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import { DaffCategoryReducerState } from '../../reducers/category/category-reducer-state.interface';

/**
 * A facade for interacting with the category state.
 * This facade exposes many parts of the state for easy access and allows dispatching of actions.
 */
export interface DaffCategoryFacadeInterface<
  V extends DaffGenericCategory<V> = DaffCategory,
  W extends DaffProduct = DaffProduct
> extends DaffStoreFacade<Action> {
  /**
   * The currently selected category.
   */
  category$: Observable<V>;
  /**
   * The loading state of the current category page.
   */
  pageLoadingState$: Observable<DaffCategoryReducerState['daffState']>;
  /**
   * Whether the current category is in a mutating state.
   */
  isPageMutating$: Observable<boolean>;
  /**
   * Whether the current category is in a resolving state.
   */
  isPageResolving$: Observable<boolean>;
  /**
   * Products of the current category.
   */
  products$: Observable<W[]>;
  /**
   * The loading state for retrieving a single category.
   *
   * @deprecated Use isPageResolving$ instead
   */
  categoryLoading$: Observable<boolean>;
  /**
   * The loading state for retrieving only the products of the category.
   *
   * @deprecated Use isPageResolving$ and isPageMutating$ instead
   */
  productsLoading$: Observable<boolean>;
  /**
   * Errors associated with retrieving a single category.
   */
  errors$: Observable<DaffStateError[]>;
  /**
   * Is the category page empty of products.
   */
  isCategoryEmpty$: Observable<boolean>;

  /**
   * Get a category by the provided Id.
   *
   * @param id
   */
  getCategoryById(id: V['id']): Observable<V>;

  /**
   * Get products by a category Id.
   *
   * @param categoryId
   */
  getProductsByCategory(categoryId: V['id']): Observable<W[]>;

  /**
   * Get products by a category Id.
   *
   * @param categoryId
   */
  getTotalProductsByCategory(categoryId: V['id']): Observable<number>;
}
