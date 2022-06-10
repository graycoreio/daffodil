import { NgModule } from '@angular/core';
import { combineReducers } from '@ngrx/store';

import {
  DaffConfigurableProductStateModule,
  daffProductConfigurableProvideExtraReducers,
} from '@daffodil/product-configurable/state';
import { DaffSearchProductStateModule } from '@daffodil/search-product/state';

import { daffSearchProductConfigurableReducers } from './reducers/public_api';

@NgModule({
  imports: [
    DaffSearchProductStateModule,
    DaffConfigurableProductStateModule,
  ],
  providers: [
    daffProductConfigurableProvideExtraReducers(combineReducers(daffSearchProductConfigurableReducers)),
  ],
})
export class DaffSearchProductConfigurableStateModule {}
