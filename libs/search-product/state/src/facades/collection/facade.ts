import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  DaffCollectionFacade,
  DaffCollectionFacadeInterface,
} from '@daffodil/core/state';

import { DaffSearchProductStateRootSlice } from '../../reducers/public_api';
import { getSearchProductCollectionSelectors } from '../../selectors/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffSearchProductCollectionFacade extends DaffCollectionFacade<DaffSearchProductStateRootSlice> implements DaffCollectionFacadeInterface {
  constructor(
    store: Store<DaffSearchProductStateRootSlice>,
  ) {
    super(
      store,
      getSearchProductCollectionSelectors(),
    );
  }
}
