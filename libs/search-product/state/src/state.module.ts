import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
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

import { DaffSearchProductCollectionEffects } from './effects/collection.effects';
import {
  DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY,
  daffSearchProductReducers,
  daffSearchProductCollectionSearchReducers,
  daffSearchProductProductReducers,
} from './reducers/public_api';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY, daffSearchProductReducers),
    EffectsModule.forFeature([
      DaffSearchProductCollectionEffects,
    ]),
    DaffProductStateModule,
    DaffSearchStateModule,
  ],
  providers: [
    daffSearchProvideExtraReducers(combineReducers(daffSearchProductCollectionSearchReducers)),
    daffProductProvideExtraReducers(combineReducers(daffSearchProductProductReducers)),
  ],
})
export class DaffSearchProductStateModule {}
