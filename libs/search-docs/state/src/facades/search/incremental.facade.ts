import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { DaffSearchDocsFacadeInterface } from './search-facade.interface';
import { DaffSearchDocsFacade } from './search.facade';
import { DaffSearchDocsStateRootSlice } from '../../reducers/public_api';
import { daffSearchDocsGetIncrementalSelectors } from '../../selectors/public_api';

/**
 * @inheritdoc
 *
 * A facade for the normal search state.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchDocsIncrementalFacade extends DaffSearchDocsFacade implements DaffSearchDocsFacadeInterface {
  constructor(
    store: Store<DaffSearchDocsStateRootSlice>,
  ) {
    super(store, daffSearchDocsGetIncrementalSelectors());
  }
}
