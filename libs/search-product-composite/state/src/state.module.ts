import { NgModule } from '@angular/core';
import { combineReducers } from '@ngrx/store';

import { daffProductProvideMetaReducers } from '@daffodil/product/state';
import {
  DaffCompositeProductStateModule,
  daffProductCompositeProvideExtraReducers,
} from '@daffodil/product-composite/state';
import { DaffSearchProductStateModule } from '@daffodil/search-product/state';

import { daffSearchProductCompositeEnsureItemsMetaReducer } from './reducers/ensure-items.meta-reducer';
import { daffSearchProductCompositeReducers } from './reducers/public_api';

/**
 * @deprecated in favor of {@link provideDaffSearchProductCompositeState} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    DaffSearchProductStateModule,
    DaffCompositeProductStateModule,
  ],
  providers: [
    ...daffProductCompositeProvideExtraReducers(combineReducers(daffSearchProductCompositeReducers)),
    ...daffProductProvideMetaReducers(daffSearchProductCompositeEnsureItemsMetaReducer),
  ],
})
export class DaffSearchProductCompositeStateModule {}
