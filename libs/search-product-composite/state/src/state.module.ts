import { NgModule } from '@angular/core';
import { combineReducers } from '@ngrx/store';

import {
  DaffCompositeProductStateModule,
  daffProductCompositeProvideExtraReducers,
} from '@daffodil/product-composite/state';
import { DaffSearchProductStateModule } from '@daffodil/search-product/state';

import { daffSearchProductCompositeReducers } from './reducers/public_api';

@NgModule({
  imports: [
    DaffSearchProductStateModule,
    DaffCompositeProductStateModule,
  ],
  providers: [
    daffProductCompositeProvideExtraReducers(combineReducers(daffSearchProductCompositeReducers)),
  ],
})
export class DaffSearchProductCompositeStateModule {}
