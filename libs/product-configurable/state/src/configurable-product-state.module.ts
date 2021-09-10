import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { daffConfigurableProductReducers } from './reducers/configurable-product-reducers';
import { DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY } from './reducers/configurable-product-store-feature-key';

/**
 * A module that provides the default reducers and effects for the configurable product redux state.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY, daffConfigurableProductReducers),
  ],
})
export class DaffConfigurableProductStateModule { }
