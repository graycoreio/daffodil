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

import { daffCompositeProductReducers } from './reducers/composite-product-reducers';
import { daffProductCompositeEnsureItemsMetaReducer } from './reducers/ensure-items.meta-reducer';
import { DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS } from './reducers/injection-tokens/extra.token';
import {
  DAFF_PRODUCT_COMPOSITE_REDUCERS,
  provideDaffProductCompositeReducersFactory,
} from './reducers/injection-tokens/reducers.token';
import { DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY } from './reducers/public_api';

/**
 * A module that provides the default reducers and effects for composite product redux state.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY, DAFF_PRODUCT_COMPOSITE_REDUCERS),
  ],
  providers: [
    ...daffProductProvideMetaReducers(daffProductCompositeEnsureItemsMetaReducer),
    provideDaffProductCompositeReducersFactory(() => daffComposeReducers([
      combineReducers(daffCompositeProductReducers),
      ...inject(DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS),
    ])),
  ],
})
export class DaffCompositeProductStateModule { }
