import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { daffProductProvideMetaReducers } from '@daffodil/product/state';

import { DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY } from './reducers/configurable-product-store-feature-key';
import { daffProductConfigurableEnsureChildrenMetaReducer } from './reducers/ensure-children.meta-reducer';
import { DAFF_PRODUCT_CONFIGURABLE_REDUCERS } from './reducers/injection-tokens/reducers.token';

/**
 * A module that provides the default reducers and effects for the configurable product redux state.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY, DAFF_PRODUCT_CONFIGURABLE_REDUCERS),
  ],
  providers: [
    daffProductProvideMetaReducers(daffProductConfigurableEnsureChildrenMetaReducer),
  ],
})
export class DaffConfigurableProductStateModule { }
