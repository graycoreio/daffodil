import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffSortDirectionEnum,
  DaffSortOption,
  Dict,
} from '@daffodil/core';
import { DaffStoreFacade } from '@daffodil/core/state';
import {
  DaffProductCollectionMetadata,
  DaffProductCollectionRequest,
  DaffProductFilter,
} from '@daffodil/product';

/**
 * A facade for interacting with a product collection state.
 */
export interface DaffProductCollectionFacadeInterface<
  TMetadata extends DaffProductCollectionMetadata = DaffProductCollectionMetadata
> extends DaffStoreFacade<Action> {
  /**
   * The page metadata for the product collection.
   */
  metadata$: Observable<TMetadata>;
  /**
   * Builds a request that matches the current product collection.
   */
  request$: Observable<DaffProductCollectionRequest>;
  /**
   * The number of products in the product collection.
   */
  totalProducts$: Observable<number>;
  /**
   * The current page of products for the product collection.
   */
  currentPage$: Observable<number>;
  /**
   * The number of pages of products available in the product collection.
   */
  totalPages$: Observable<number>;
  /**
   * The number of products per page for the product collection.
   */
  pageSize$: Observable<number>;
  /**
   * The filters available for the products of the product collection.
   */
  filters$: Observable<Dict<DaffProductFilter>>;
  /**
   * The sort options available for the products of the product collection.
   */
  sortOptions$: Observable<DaffSortOption[]>;
  /**
   * The sort options available for the products of the product collection.
   */
  appliedFilters$: Observable<Dict<DaffProductFilter>>;
  /**
   * The sort options available for the products of the product collection.
   */
  appliedSortOption$: Observable<string>;
  /**
   * The sort options available for the products of the product collection.
   */
  appliedSortDirection$: Observable<DaffSortDirectionEnum>;
}
