import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffCollectionMetadata,
  DaffCollectionRequest,
  DaffFilters,
  DaffSortDirectionEnum,
  DaffSortOption,
} from '@daffodil/core';

import { DaffCollectionFacadeInterface } from './facade.interface';
import { DaffCollectionMemoizedSelectors } from './selector-factory';

/**
 * An abstract class for a collection facade.
 * It is configurable via its constructor parameters.
 * The particular collection state from which
 * this facade will read is determined by the selectors passed.
 *
 * @inheritdoc
 */
export abstract class DaffCollectionFacade<
  TState,
  TMetadata extends DaffCollectionMetadata = DaffCollectionMetadata
> implements DaffCollectionFacadeInterface<TMetadata> {
  metadata$: Observable<TMetadata>;
  request$: Observable<DaffCollectionRequest>;
  count$: Observable<number>;
  currentPage$: Observable<number>;
  totalPages$: Observable<number>;
  pageSize$: Observable<number>;
  sortOptions$: Observable<DaffSortOption[]>;
  appliedSortOption$: Observable<string>;
  appliedSortDirection$: Observable<DaffSortDirectionEnum>;
  filters$: Observable<DaffFilters>;
  appliedFilters$: Observable<DaffFilters>;

  constructor(
    protected store: Store<TState>,
    selectors: DaffCollectionMemoizedSelectors<TState, TMetadata>,
  ) {
    this.metadata$ = this.store.pipe(select(selectors.selectCollectionMetadata));
    this.request$ = this.store.pipe(select(selectors.selectCollectionRequest));
    this.count$ = this.store.pipe(select(selectors.selectCollectionCount));
    this.currentPage$ = this.store.pipe(select(selectors.selectCollectionCurrentPage));
    this.totalPages$ = this.store.pipe(select(selectors.selectCollectionTotalPages));
    this.pageSize$ = this.store.pipe(select(selectors.selectCollectionPageSize));
    this.sortOptions$ = this.store.pipe(select(selectors.selectCollectionSortOptions));
    this.appliedSortOption$ = this.store.pipe(select(selectors.selectCollectionAppliedSortOption));
    this.appliedSortDirection$ = this.store.pipe(select(selectors.selectCollectionAppliedSortDirection));
    this.filters$ = this.store.pipe(select(selectors.selectCollectionFilters));
    this.appliedFilters$ = this.store.pipe(select(selectors.selectCollectionAppliedFilters));
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
