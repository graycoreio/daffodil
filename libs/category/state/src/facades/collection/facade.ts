import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  DaffProductCollectionFacade,
  DaffProductCollectionFacadeInterface,
} from '@daffodil/product/state';

import { DaffCategoryStateRootSlice } from '../../reducers/public_api';
import { getCategoryProductCollectionSelectors } from '../../selectors/collection/selectors';

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryProductCollectionFacade extends DaffProductCollectionFacade<DaffCategoryStateRootSlice> implements DaffProductCollectionFacadeInterface {
  constructor(
    store: Store<DaffCategoryStateRootSlice>,
  ) {
    super(
      store,
      getCategoryProductCollectionSelectors(),
    );
  }
}
