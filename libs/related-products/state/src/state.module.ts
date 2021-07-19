import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY } from './reducers/public_api';
import { daffRelatedProductsReducers } from './reducers/reducers';

/**
 * A module that provides the default reducers for the related product redux state.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY, daffRelatedProductsReducers),
  ],
})
export class DaffRelatedProductStateModule {}
