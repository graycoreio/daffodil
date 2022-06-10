import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import {
  combineReducers,
  StoreModule,
} from '@ngrx/store';

import {
  DaffProductStateModule,
  daffProductProvideExtraReducers,
} from '@daffodil/product/state';
import {
  daffSearchProvideExtraReducers,
  DaffSearchStateModule,
} from '@daffodil/search/state';

import {
  DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY,
  daffSearchProductReducers,
  daffSearchProductCollectionSearchReducers,
  daffSearchProductProductReducers,
} from './reducers/public_api';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY, daffSearchProductReducers),
    DaffProductStateModule,
    DaffSearchStateModule,
  ],
  providers: [
    daffSearchProvideExtraReducers(combineReducers(daffSearchProductCollectionSearchReducers)),
    daffProductProvideExtraReducers(combineReducers(daffSearchProductProductReducers)),
  ],
})
export class DaffSearchProductStateCoreModule {}
