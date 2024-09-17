import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  DaffCollectionFacadeInterface,
  DaffCollectionFacade,
} from '@daffodil/core/state';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';

import { DaffOrderStateRootSlice } from '../../reducers/public_api';
import { getDaffOrderCollectionSelectors } from '../../selectors/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffOrderCollectionFacade<T extends DaffOrder = DaffOrder>
  extends DaffCollectionFacade<DaffOrderStateRootSlice<T>, DaffOrderCollection['metadata']>
  implements DaffCollectionFacadeInterface<DaffOrderCollection['metadata']> {
  constructor(store: Store<DaffOrderStateRootSlice<T>>) {
    super(
      store,
      getDaffOrderCollectionSelectors(),
    );
  }
}
