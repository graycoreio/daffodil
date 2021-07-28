import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { DAFF_PRODUCT_META_REDUCERS } from '@daffodil/product/state';

import {
  DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY,
  daffRelatedProductsDedupeMetaReducer,
  daffRelatedProductsReducers,
} from './reducers/public_api';

/**
 * A module that provides the default reducers for the related product redux state.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY, daffRelatedProductsReducers),
  ],
  providers: [
    {
      provide: DAFF_PRODUCT_META_REDUCERS,
      multi: true,
      useValue: daffRelatedProductsDedupeMetaReducer,
    },
  ],
})
export class DaffRelatedProductStateModule {}
