import { NgModule } from '@angular/core';
import { combineReducers } from '@ngrx/store';

import {
  daffProductProvideExtraReducers,
  DaffProductStateModule,
} from '@daffodil/product/state';

import { daffCategoryProductReducers } from './reducers/product-reducers';

/**
 * A module that provides injectable reducers into product state.
 */
@NgModule({
  imports: [
    DaffProductStateModule,
  ],
  providers: [
    ...daffProductProvideExtraReducers(
      combineReducers(daffCategoryProductReducers),
    ),
  ],
})
export class DaffCategoryProductStateModule {}
