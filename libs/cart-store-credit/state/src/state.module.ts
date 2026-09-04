import {
  inject,
  NgModule,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  combineReducers,
  StoreModule,
} from '@ngrx/store';

import { daffCartProvideExtraReducers } from '@daffodil/cart/state';
import { daffComposeReducers } from '@daffodil/core/state';

import { DaffCartStoreCreditEffects } from './effects/store-credit.effects';
import {
  daffCartStoreCreditCartReducers,
  DAFF_CART_STORE_CREDIT_STORE_FEATURE_KEY,
} from './reducers/public_api';
import { daffCartStoreCreditReducer } from './reducers/store-credit/public_api';
import { DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_CART_STORE_CREDIT_REDUCERS,
  provideDaffCartStoreCreditReducersFactory,
} from './reducers/token/reducers.token';

/**
 * Creates the cart store credit feature store.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_CART_STORE_CREDIT_STORE_FEATURE_KEY, DAFF_CART_STORE_CREDIT_REDUCERS),
    EffectsModule.forFeature([
      DaffCartStoreCreditEffects,
    ]),
  ],
  providers: [
    ...daffCartProvideExtraReducers(
      combineReducers(daffCartStoreCreditCartReducers),
    ),
    provideDaffCartStoreCreditReducersFactory(() => daffComposeReducers([
      combineReducers({
        storeCredit: daffCartStoreCreditReducer,
      }),
      ...inject(DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS),
    ])),
  ],
})
export class DaffCartStoreCreditStateModule {}
