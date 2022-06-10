import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { DaffSearchProductStateRootSlice } from '../../reducers/public_api';
import { daffSearchProductGetIncrementalSelectors } from '../../selectors/public_api';
import { DaffSearchProductFacadeInterface } from './search-facade.interface';
import { DaffSearchProductFacade } from './search.facade';

/**
 * @inheritdoc
 *
 * A facade for the normal search state.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchProductIncrementalFacade extends DaffSearchProductFacade implements DaffSearchProductFacadeInterface {
  constructor(
    store: Store<DaffSearchProductStateRootSlice>,
  ) {
    super(store, daffSearchProductGetIncrementalSelectors());
  }
}
