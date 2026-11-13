import { NgModule } from '@angular/core';
import { combineReducers } from '@ngrx/store';

import {
  daffProductProvideExtraReducers,
  DaffProductStateModule,
} from '@daffodil/product/state';

import { daffCategoryProductReducers } from './reducers/product-reducers';

/**
 * A module that provides injectable reducers into product state.
 *
 * @deprecated in favor of {@link provideDaffCategoryProductState} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
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
