import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffFilters,
  DaffSortDirectionEnum,
  DaffSortOption,
} from '@daffodil/core';
import {
  DaffCollectionMetadata,
  DaffCollectionRequest,
} from '@daffodil/core';

import { DaffStoreFacade } from '../store/facade';

/**
 * A facade for interacting with a collection state.
 */
export interface DaffCollectionFacadeInterface<
  TMetadata extends DaffCollectionMetadata = DaffCollectionMetadata
> extends DaffStoreFacade<Action> {
  /**
   * The page metadata for the collection.
   */
  metadata$: Observable<TMetadata>;
  /**
   * Builds a request that matches the current collection.
   */
  request$: Observable<DaffCollectionRequest>;
  /**
   * The number of items in the collection.
   */
  count$: Observable<number>;
  /**
   * The current page of items for the collection.
   */
  currentPage$: Observable<number>;
  /**
   * The number of pages of items available in the collection.
   */
  totalPages$: Observable<number>;
  /**
   * The number of items per page for the collection.
   */
  pageSize$: Observable<number>;
  /**
   * The sort options available for the items of the collection.
   */
  sortOptions$: Observable<DaffSortOption[]>;
  /**
   * The sort options available for the items of the collection.
   */
  appliedSortOption$: Observable<string>;
  /**
   * The sort options available for the items of the collection.
   */
  appliedSortDirection$: Observable<DaffSortDirectionEnum>;
  /**
   * The filters available for the entities of the collection.
   */
  filters$: Observable<DaffFilters>;

  /**
   * The sort options available for the entities of the collection.
   */
  appliedFilters$: Observable<DaffFilters>;
}
