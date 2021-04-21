import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffGenericCategory,
  DaffCategory,
  DaffCategoryFilterReplacement,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
import { Dict } from '@daffodil/core';
import {
  DaffStoreFacade,
  DaffSortDirectionEnum,
  DaffSortOption,
  DaffStateError,
  DaffState,
} from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import { DaffCategoryReducerState } from '../reducers/category/category-reducer-state.interface';

export interface DaffCategoryFacadeInterface<
	V extends DaffGenericCategory<V> = DaffCategory,
	W extends DaffProduct = DaffProduct
> extends DaffStoreFacade<Action> {
	/**
	 * The currently selected category.
	 */
  category$: Observable<V>;
  /**
   * The page metadata for the current selected selected category.
   */
  metadata$: Observable<DaffCategoryPageMetadata>;
  /**
   * The current loading state of the selected category page.
   */
  pageLoadingState$: Observable<DaffCategoryReducerState['daffState']>;
  /**
   * Whether the selected category is in a mutating state.
   */
  isPageMutating$: Observable<boolean>;
  /**
   * Whether the selected category is in a resolving state.
   */
  isPageResolving$: Observable<boolean>;
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
  filters$: Observable<Dict<DaffCategoryFilterReplacement>>;
  /**
   * The sort options available for the products of the selected category.
   */
  sortOptions$: Observable<DaffSortOption[]>;
  /**
   * The sort options available for the products of the selected category.
   */
  appliedFilters$: Observable<Dict<DaffCategoryFilterReplacement>>;
  /**
   * The sort options available for the products of the selected category.
   */
  appliedSortOption$: Observable<string>;
  /**
   * The sort options available for the products of the selected category.
   */
  appliedSortDirection$: Observable<DaffSortDirectionEnum>;
  /**
   * Products of the currently selected category.
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
