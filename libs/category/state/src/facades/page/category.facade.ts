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

import {
  DaffCategoryStateRootSlice,
  DaffCategoryReducerState,
} from '../../reducers/public_api';
import { getDaffCategorySelectors } from '../../selectors/category.selector';
import { DaffCategoryFacadeInterface } from './category-facade.interface';

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
> implements DaffCategoryFacadeInterface<V,W> {

  private categorySelectors = getDaffCategorySelectors<V,W>();

  category$: Observable<V>;

  pageLoadingState$: Observable<DaffCategoryReducerState['daffState']>;

  isPageMutating$: Observable<boolean>;

  isPageResolving$: Observable<boolean>;

  products$: Observable<W[]>;

  categoryLoading$: Observable<boolean>;

  productsLoading$: Observable<boolean>;

  errors$: Observable<DaffStateError[]>;

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
	  this.pageLoadingState$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageState));
	  this.isPageMutating$ = this.store.pipe(select(this.categorySelectors.selectIsCategoryPageMutating));
	  this.isPageResolving$ = this.store.pipe(select(this.categorySelectors.selectIsCategoryPageResolving));
	  this.categoryLoading$ = this.store.pipe(select(this.categorySelectors.selectCategoryLoading));
	  this.productsLoading$ = this.store.pipe(select(this.categorySelectors.selectCategoryProductsLoading));
	  this.errors$ = this.store.pipe(select(this.categorySelectors.selectCategoryErrors));
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
