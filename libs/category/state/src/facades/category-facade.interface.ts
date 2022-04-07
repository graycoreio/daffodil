import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffGenericCategory,
  DaffCategory,
  DaffCategoryFilter,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
import { Dict } from '@daffodil/core';
import {
  DaffStoreFacade,
  DaffSortDirectionEnum,
  DaffSortOption,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import { DaffCategoryReducerState } from '../reducers/category/category-reducer-state.interface';

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
   * The page metadata for the current category.
   */
  metadata$: Observable<DaffCategoryPageMetadata>;
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
   * The current page of products for the current category.
   */
  currentPage$: Observable<number>;
  /**
   * The number of pages of products available in the current category.
   */
  totalPages$: Observable<number>;
  /**
   * The total number of products for the filters applied.
   */
  totalProducts$: Observable<number>;
  /**
   * The number of products per page for the current category.
   */
  pageSize$: Observable<number>;
  /**
   * The filters available for the products of the current category.
   */
  filters$: Observable<Dict<DaffCategoryFilter>>;
  /**
   * The sort options available for the products of the current category.
   */
  sortOptions$: Observable<DaffSortOption[]>;
  /**
   * The sort options available for the products of the current category.
   */
  appliedFilters$: Observable<Dict<DaffCategoryFilter>>;
  /**
   * The sort options available for the products of the current category.
   */
  appliedSortOption$: Observable<string>;
  /**
   * The sort options available for the products of the current category.
   */
  appliedSortDirection$: Observable<DaffSortDirectionEnum>;
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
