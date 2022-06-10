import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { DaffSearchResult } from '@daffodil/search';

import { DaffSearchStateRootSlice } from '../../reducers/public_api';
import { daffSearchGetIncrementalSelectors } from '../../selectors/public_api';
import { DaffSearchFacadeBase } from './base.facade';
import { DaffSearchFacadeInterface } from './search-facade.interface';

/**
 * @inheritdoc
 *
 * A facade for the incremental search state.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchIncrementalFacade<T extends DaffSearchResult = DaffSearchResult, R extends DaffSearchStateRootSlice<T> = DaffSearchStateRootSlice<T>> extends DaffSearchFacadeBase<T, R> implements DaffSearchFacadeInterface<T> {
  constructor(
    store: Store<R>,
  ) {
    super(store, daffSearchGetIncrementalSelectors());
  }
}
