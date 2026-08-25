import {
  inject,
  NgModule,
} from '@angular/core';
import {
  combineReducers,
  StoreModule,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';
import { daffProductProvideMetaReducers } from '@daffodil/product/state';

import { DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY } from './reducers/configurable-product-store-feature-key';
import { daffProductConfigurableEnsureChildrenMetaReducer } from './reducers/ensure-children.meta-reducer';
import {
  DAFF_PRODUCT_CONFIGURABLE_REDUCERS,
  provideDaffProductConfigurableReducersFactory,
} from './reducers/injection-tokens/reducers.token';
import {
  DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS,
  daffConfigurableProductReducers,
} from './reducers/public_api';

/**
 * A module that provides the default reducers and effects for the configurable product redux state.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY, DAFF_PRODUCT_CONFIGURABLE_REDUCERS),
  ],
  providers: [
    daffProductProvideMetaReducers(daffProductConfigurableEnsureChildrenMetaReducer),
    provideDaffProductConfigurableReducersFactory(() => daffComposeReducers([
      combineReducers(daffConfigurableProductReducers),
      ...inject(DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS),
    ])),
  ],
})
export class DaffConfigurableProductStateModule { }
