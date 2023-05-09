import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffGenericCategory,
  DaffCategory,
} from '@daffodil/category';
import {
  DaffStoreFacade,
  DaffStateError,
  DaffOperationStateFacadeInterface,
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
> extends DaffOperationStateFacadeInterface<DaffCategoryReducerState> {
  /**
   * The currently selected category.
   */
  category$: Observable<V>;

  /**
   * Products of the current category.
   */
  products$: Observable<W[]>;

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
