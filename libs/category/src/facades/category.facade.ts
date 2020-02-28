import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';
import { DaffProductUnion } from '@daffodil/product';

import { DaffCategory } from '../models/category';
import { DaffCategoryModule } from '../category.module';
import {
  selectCategoryLoading,
  selectCategoryErrors,
  selectSelectedCategory,
  selectCategoryPageConfigurationState,
  selectCategoryPageProducts,
  selectCategoryCurrentPage,
  selectCategoryTotalPages,
  selectCategoryPageSize,
  selectCategoryFilters,
  selectCategorySortOptions,
	selectCategory,
	selectProductsByCategory,
	selectCategoryPageTotalProducts
} from '../selectors/category.selector';
import { CategoryReducersState } from '../reducers/category-reducers.interface';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffCategoryFilter } from '../models/category-filter';
import { DaffCategorySortOption } from '../models/category-sort-option';

/**
 * A facade for accessing state for the currently selected category.
 */
@Injectable({
  providedIn: DaffCategoryModule
})
export class DaffCategoryFacade implements DaffStoreFacade<Action> {
  /**
   * The currently selected category.
   */
  category$: Observable<DaffCategory>;
  /**
   * The page configuration state for the selected category.
   */
  pageConfigurationState$: Observable<DaffCategoryPageConfigurationState>;
  /**
   * The current page of products for the selected category.
   */
  currentPage$: Observable<number>;
  /**
   * The number of pages of product for the selected category.
   */
	totalPages$: Observable<number>;
	/**
	 * The total number of products for the filters applied.
	 */
	totalProducts$: Observable<number>;
  /**
   * The number of products per page for the selected category.
   */
  pageSize$: Observable<number>;
  /**
   * The filters available for the products of the selected category.
   */
  filters$: Observable<DaffCategoryFilter[]>;
  /**
   * The sort options available for the products of the selected category.
   */
  sortOptions$: Observable<DaffCategorySortOption[]>;
  /**
   * Products of the currently selected category.
   */
  products$: Observable<DaffProductUnion[]>;
  /**
   * The loading state for retrieving a single category.
   */
  loading$: Observable<boolean>;
  /**
   * Errors associated with retrieving a single category.
   */
  errors$: Observable<string[]>;
	
	/**
	 * Get a category by the provided Id.
	 * @param id 
	 */
	getCategoryById(id: string): Observable<DaffCategory> {
		return this.store.pipe(select(selectCategory, {id: id}));
	}

	/**
	 * Get products by a category Id.
	 * @param categoryId 
	 */
	getProductsByCategory(categoryId: string): Observable<DaffProductUnion[]> {
		return this.store.pipe(select(selectProductsByCategory, {id: categoryId}))
	}

  constructor(private store: Store<CategoryReducersState>) {
    this.category$ = this.store.pipe(select(selectSelectedCategory));
		this.products$ = this.store.pipe(select(selectCategoryPageProducts));
		this.totalProducts$ = this.store.pipe(select(selectCategoryPageTotalProducts));
    this.pageConfigurationState$ = this.store.pipe(select(selectCategoryPageConfigurationState));
    this.currentPage$ = this.store.pipe(select(selectCategoryCurrentPage));
    this.totalPages$ = this.store.pipe(select(selectCategoryTotalPages));
    this.pageSize$ = this.store.pipe(select(selectCategoryPageSize));
    this.filters$ = this.store.pipe(select(selectCategoryFilters));
    this.sortOptions$ = this.store.pipe(select(selectCategorySortOptions));
    this.loading$ = this.store.pipe(select(selectCategoryLoading));
		this.errors$ = this.store.pipe(select(selectCategoryErrors));
	}

  /**
   * Dispatches the given action.
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
