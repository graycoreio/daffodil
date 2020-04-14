import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffCategoryFilter } from '../models/category-filter';
import { DaffCategorySortOption } from '../models/category-sort-option';
import { DaffSortDirectionEnum, DaffCategoryRequest } from '../models/requests/category-request';
import { DaffCategoryAppliedFilter } from '../models/category-applied-filter';
import { DaffGenericCategory } from '../models/generic-category';
import { DaffCategory } from '../models/category';

export interface DaffCategoryFacadeInterface<
	T extends DaffCategoryRequest = DaffCategoryRequest, 
	V extends DaffGenericCategory<V> = DaffCategory, 
	U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
	W extends DaffProduct = DaffProduct
> {
	/**
   * The currently selected category.
   */
  category$: Observable<V>;
  /**
   * The page configuration state for the selected category.
   */
  pageConfigurationState$: Observable<U>;
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
   * The sort options available for the products of the selected category.
   */
  appliedFilters$: Observable<DaffCategoryAppliedFilter[]>;
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
   */
  categoryLoading$: Observable<boolean>;
  /**
   * The loading state for retrieving only the products of the category.
   */
  productsLoading$: Observable<boolean>;
  /**
   * Errors associated with retrieving a single category.
   */
	errors$: Observable<string[]>;
	/**
	 * Is the category page empty of products.
	 */
	isCategoryEmpty$: Observable<boolean>;
	
	/**
	 * Get a category by the provided Id.
	 * @param id 
	 */
	getCategoryById(id: string): Observable<V>;

	/**
	 * Get products by a category Id.
	 * @param categoryId 
	 */
	getProductsByCategory(categoryId: string): Observable<W[]>;

	/**
	 * Get products by a category Id.
	 * @param categoryId 
	 */
	getTotalProductsByCategory(categoryId: string): Observable<number>;

  /**
   * Dispatches the given action.
   * @param action action to dispatch.
   */
  dispatch(action: Action): void;
}
