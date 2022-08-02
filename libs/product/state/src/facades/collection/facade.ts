import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCollectionFacade } from '@daffodil/core/state';
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
> extends DaffCollectionFacade<TState, TMetadata> implements DaffProductCollectionFacadeInterface<TMetadata> {
  filters$: Observable<Record<DaffProductFilter['name'], DaffProductFilter>>;
  appliedFilters$: Observable<Record<DaffProductFilter['name'], DaffProductFilter>>;

  constructor(
    store: Store<TState>,
    selectors: DaffProductCollectionMemoizedSelectors<TState, TMetadata>,
  ) {
    super(
      store,
      selectors,
    );

	  this.filters$ = this.store.pipe(select(selectors.selectProductCollectionFilters));
	  this.appliedFilters$ = this.store.pipe(select(selectors.selectProductCollectionAppliedFilters));
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
