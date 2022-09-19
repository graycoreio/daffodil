import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  DaffCollectionFacade,
  DaffCollectionFacadeInterface,
} from '@daffodil/core/state';

import { DaffCategoryStateRootSlice } from '../../reducers/public_api';
import { getCategoryProductCollectionSelectors } from '../../selectors/collection/selectors';

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryProductCollectionFacade extends DaffCollectionFacade<DaffCategoryStateRootSlice> implements DaffCollectionFacadeInterface {
  constructor(
    store: Store<DaffCategoryStateRootSlice>,
  ) {
    super(
      store,
      getCategoryProductCollectionSelectors(),
    );
  }
}
