import { NgModule } from '@angular/core';
import { combineReducers } from '@ngrx/store';

import { daffProductProvideMetaReducers } from '@daffodil/product/state';
import {
  DaffConfigurableProductStateModule,
  daffProductConfigurableProvideExtraReducers,
} from '@daffodil/product-configurable/state';
import { DaffSearchProductStateModule } from '@daffodil/search-product/state';

import { daffSearchProductConfigurableEnsureChildrenMetaReducer } from './reducers/ensure-children.meta-reducer';
import { daffSearchProductConfigurableReducers } from './reducers/public_api';

/**
 * @deprecated in favor of {@link provideDaffSearchProductConfigurableState} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    DaffSearchProductStateModule,
    DaffConfigurableProductStateModule,
  ],
  providers: [
    daffProductConfigurableProvideExtraReducers(combineReducers(daffSearchProductConfigurableReducers)),
    daffProductProvideMetaReducers(daffSearchProductConfigurableEnsureChildrenMetaReducer),
  ],
})
export class DaffSearchProductConfigurableStateModule {}
