import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffGenericCategory,
  DaffCategory,
} from '@daffodil/category';
import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import { DaffCategoryFacadeInterface } from './category-facade.interface';
import {
  DaffCategoryStateRootSlice,
  DaffCategoryReducerState,
} from '../../reducers/public_api';
import { getDaffCategorySelectors } from '../../selectors/category.selector';

/**
 * A facade for interacting with the category state.
 * This facade exposes many parts of the state for easy access and allows dispatching of actions.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFacade<
  V extends DaffGenericCategory<V> = DaffCategory,
  W extends DaffProduct = DaffProduct
> implements DaffCategoryFacadeInterface<V, W> {
  private categorySelectors = getDaffCategorySelectors<V,W>();

  category$: Observable<V>;
  loadingState$: Observable<DaffCategoryReducerState['daffState']>;
  loading$: Observable<boolean>;
  mutating$: Observable<boolean>;
  resolving$: Observable<boolean>;
  products$: Observable<W[]>;
  errors$: Observable<DaffStateError[]>;
  hasErrors$: Observable<boolean>;
  isCategoryEmpty$: Observable<boolean>;

  getCategoryById(id: V['id']): Observable<V> {
    return this.store.pipe(select(this.categorySelectors.selectCategory(id)));
  }

  getProductsByCategory(categoryId: V['id']): Observable<W[]> {
    return this.store.pipe(select(this.categorySelectors.selectProductsByCategory(categoryId)));
  }

  getTotalProductsByCategory(categoryId: V['id']): Observable<number> {
    return this.store.pipe(select(this.categorySelectors.selectTotalProductsByCategory(categoryId)));
  }

  constructor(private store: Store<DaffCategoryStateRootSlice<V, W>>) {
    this.category$ = this.store.pipe(select(this.categorySelectors.selectCurrentCategory));
    this.products$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageProducts));
    this.loadingState$ = this.store.pipe(select(this.categorySelectors.selectLoadingState));
    this.loading$ = this.store.pipe(select(this.categorySelectors.selectLoading));
    this.mutating$ = this.store.pipe(select(this.categorySelectors.selectMutating));
    this.resolving$ = this.store.pipe(select(this.categorySelectors.selectResolving));
    this.errors$ = this.store.pipe(select(this.categorySelectors.selectErrors));
    this.hasErrors$ = this.store.pipe(select(this.categorySelectors.selectHasErrors));
    this.isCategoryEmpty$ = this.store.pipe(select(this.categorySelectors.selectIsCategoryPageEmpty));
  }

  /**
   * Dispatches the given action.
   *
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
