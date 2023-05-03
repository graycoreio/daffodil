import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';

import { DaffCartStoreCreditReducerState } from './store-credit/public_api';
import { DAFF_CART_STORE_CREDIT_STORE_FEATURE_KEY } from './store-feature-key';

/**
 * The feature state for cart store credit.
 */
export interface DaffCartStoreCreditReducersState {
  storeCredit: DaffCartStoreCreditReducerState;
}

/**
 * The footprint of cart store credit feature state in the root application state.
 */
export interface DaffCartStoreCreditStateRootSlice {
  [DAFF_CART_STORE_CREDIT_STORE_FEATURE_KEY]: DaffCartStoreCreditReducersState;
}
