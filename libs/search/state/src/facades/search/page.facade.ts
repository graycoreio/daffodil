import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { DaffSearchResult } from '@daffodil/search';

import { DaffSearchFacadeBase } from './base.facade';
import { DaffSearchFacadeInterface } from './search-facade.interface';
import { DaffSearchStateRootSlice } from '../../reducers/public_api';
import { daffSearchGetPageSelectors } from '../../selectors/public_api';

/**
 * @inheritdoc
 *
 * A facade for the search page state.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchPageFacade<T extends DaffSearchResult = DaffSearchResult, R extends DaffSearchStateRootSlice<T> = DaffSearchStateRootSlice<T>> extends DaffSearchFacadeBase<T, R> implements DaffSearchFacadeInterface<T> {
  constructor(
    store: Store<R>,
  ) {
    super(store, daffSearchGetPageSelectors());
  }
}
