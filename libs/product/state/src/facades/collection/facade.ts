import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffSortDirectionEnum,
  DaffSortOption,
  Dict,
} from '@daffodil/core';
import {
  DaffProductCollectionMetadata,
  DaffProductFilter,
} from '@daffodil/product';

import { DaffProductCollectionMemoizedSelectors } from '../../selectors/public_api';
import { DaffProductCollectionFacadeInterface } from './facade.interface';

/**
 * An abstract class for a product collection facade.
 * It is configurable via its constructor parameters.
 * The particular product collection state from which
 * this facade will read is determined by the selectors passed.
 *
 * @inheritdoc
 */
export abstract class DaffProductCollectionFacade<
  TState,
  TMetadata extends DaffProductCollectionMetadata = DaffProductCollectionMetadata
> implements DaffProductCollectionFacadeInterface<TMetadata> {
  metadata$: Observable<TMetadata>;
  currentPage$: Observable<number>;
  totalPages$: Observable<number>;
  pageSize$: Observable<number>;
  filters$: Observable<Dict<DaffProductFilter>>;
  sortOptions$: Observable<DaffSortOption[]>;
  appliedFilters$: Observable<Dict<DaffProductFilter>>;
  appliedSortOption$: Observable<string>;
  appliedSortDirection$: Observable<DaffSortDirectionEnum>;

  constructor(
    private store: Store<TState>,
    private selectors: DaffProductCollectionMemoizedSelectors<TState, TMetadata>,
  ) {
	  this.metadata$ = this.store.pipe(select(this.selectors.selectProductCollectionMetadata));
	  this.currentPage$ = this.store.pipe(select(this.selectors.selectProductCollectionCurrentPage));
	  this.totalPages$ = this.store.pipe(select(this.selectors.selectProductCollectionTotalPages));
	  this.pageSize$ = this.store.pipe(select(this.selectors.selectProductCollectionSize));
	  this.filters$ = this.store.pipe(select(this.selectors.selectProductCollectionFilters));
	  this.sortOptions$ = this.store.pipe(select(this.selectors.selectProductCollectionSortOptions));
	  this.appliedFilters$ = this.store.pipe(select(this.selectors.selectProductCollectionAppliedFilters));
	  this.appliedSortOption$ = this.store.pipe(select(this.selectors.selectProductCollectionAppliedSortOption));
	  this.appliedSortDirection$ = this.store.pipe(select(this.selectors.selectProductCollectionAppliedSortDirection));
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
