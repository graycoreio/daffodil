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
  DaffCategoryFilter,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
import { Dict } from '@daffodil/core';
import {
  DaffSortDirectionEnum,
  DaffSortOption,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import {
  DaffCategoryReducersState,
  DaffCategoryReducerState,
} from '../reducers/public_api';
import { getDaffCategorySelectors } from '../selectors/category.selector';
import { DaffCategoryFacadeInterface } from './category-facade.interface';

/**
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

  metadata$: Observable<DaffCategoryPageMetadata>;

  pageLoadingState$: Observable<DaffCategoryReducerState['daffState']>;

  isPageMutating$: Observable<boolean>;

  isPageResolving$: Observable<boolean>;

  currentPage$: Observable<number>;

	totalPages$: Observable<number>;

	totalProducts$: Observable<number>;

  pageSize$: Observable<number>;

  filters$: Observable<Dict<DaffCategoryFilter>>;

  sortOptions$: Observable<DaffSortOption[]>;

  appliedFilters$: Observable<Dict<DaffCategoryFilter>>;

  appliedSortOption$: Observable<string>;

  appliedSortDirection$: Observable<DaffSortDirectionEnum>;

  products$: Observable<W[]>;

  categoryLoading$: Observable<boolean>;

  productsLoading$: Observable<boolean>;

	errors$: Observable<DaffStateError[]>;

	isCategoryEmpty$: Observable<boolean>;

	getCategoryById(id: V['id']): Observable<V> {
	  return this.store.pipe(select(this.categorySelectors.selectCategory, { id }));
	}

	getProductsByCategory(categoryId: V['id']): Observable<W[]> {
	  return this.store.pipe(select(this.categorySelectors.selectProductsByCategory(categoryId)));
	}

	getTotalProductsByCategory(categoryId: V['id']): Observable<number> {
	  return this.store.pipe(select(this.categorySelectors.selectTotalProductsByCategory(categoryId)));
	}

	constructor(private store: Store<DaffCategoryReducersState<V>>) {
	  this.category$ = this.store.pipe(select(this.categorySelectors.selectSelectedCategory));
	  this.products$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageProducts));
	  this.totalProducts$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageTotalProducts));
	  this.metadata$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageMetadata));
	  this.pageLoadingState$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageState));
	  this.isPageMutating$ = this.store.pipe(select(this.categorySelectors.selectIsCategoryPageMutating));
	  this.isPageResolving$ = this.store.pipe(select(this.categorySelectors.selectIsCategoryPageResolving));
	  this.currentPage$ = this.store.pipe(select(this.categorySelectors.selectCategoryCurrentPage));
	  this.totalPages$ = this.store.pipe(select(this.categorySelectors.selectCategoryTotalPages));
	  this.pageSize$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageSize));
	  this.filters$ = this.store.pipe(select(this.categorySelectors.selectCategoryFilters));
	  this.sortOptions$ = this.store.pipe(select(this.categorySelectors.selectCategorySortOptions));
	  this.appliedFilters$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageAppliedFilters));
	  this.appliedSortOption$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageAppliedSortOption));
	  this.appliedSortDirection$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageAppliedSortDirection));
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
