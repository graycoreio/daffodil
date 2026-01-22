import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  DaffCollectionFacade,
  DaffCollectionFacadeInterface,
} from '@daffodil/core/state';

import { DaffSearchDocsStateRootSlice } from '../../reducers/public_api';
import { getSearchDocsCollectionSelectors } from '../../selectors/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffSearchDocsCollectionFacade extends DaffCollectionFacade<DaffSearchDocsStateRootSlice> implements DaffCollectionFacadeInterface {
  constructor(
    store: Store<DaffSearchDocsStateRootSlice>,
  ) {
    super(
      store,
      getSearchDocsCollectionSelectors(),
    );
  }
}
