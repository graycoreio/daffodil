import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  DaffProductCollectionFacade,
  DaffProductCollectionFacadeInterface,
} from '@daffodil/product/state';

import { DaffSearchProductStateRootSlice } from '../../reducers/public_api';
import { getSearchProductCollectionSelectors } from '../../selectors/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffSearchProductCollectionFacade extends DaffProductCollectionFacade<DaffSearchProductStateRootSlice> implements DaffProductCollectionFacadeInterface {
  constructor(
    store: Store<DaffSearchProductStateRootSlice>,
  ) {
    super(
      store,
      getSearchProductCollectionSelectors(),
    );
  }
}
