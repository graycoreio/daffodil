import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { daffProductProvideMetaReducers } from '@daffodil/product/state';

import {
  DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY,
  daffUpsellProductsDedupeMetaReducer,
  daffUpsellProductsReducers,
} from './reducers/public_api';

/**
 * A module that provides the default reducers for the upsell product redux state.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY, daffUpsellProductsReducers),
  ],
  providers: [
    daffProductProvideMetaReducers(daffUpsellProductsDedupeMetaReducer),
  ],
})
export class DaffUpsellProductStateModule {}
