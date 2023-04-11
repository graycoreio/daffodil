import { NgModule } from '@angular/core';
import { combineReducers } from '@ngrx/store';

import {
  DaffConfigurableProductStateModule,
  daffProductConfigurableProvideExtraReducers,
} from '@daffodil/product-configurable/state';
import { daffProductProvideMetaReducers } from '@daffodil/product/state';
import { DaffSearchProductStateModule } from '@daffodil/search-product/state';

import { daffSearchProductConfigurableEnsureChildrenMetaReducer } from './reducers/ensure-children.meta-reducer';
import { daffSearchProductConfigurableReducers } from './reducers/public_api';

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
