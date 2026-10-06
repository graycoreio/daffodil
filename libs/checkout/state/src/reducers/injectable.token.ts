import { combineReducers } from '@ngrx/store';

import { createInjectableReducersTokens } from '@daffodil/core/state';

import { DaffCheckoutReducersState } from './state.interface';
import { daffCheckoutOrderReducer } from '../order/public_api';

export const {
  extra: {
    token: DAFF_CHECKOUT_EXTRA_REDUCERS,
    provider: provideDaffCheckoutExtraReducers,
    factoryProvider: provideDaffCheckoutExtraReducersFactory,
  },
  meta: {
    token: DAFF_CHECKOUT_META_REDUCERS,
    provider: provideDaffCheckoutMetaReducers,
    factoryProvider: provideDaffCheckoutMetaReducersFactory,
  },
  config: {
    token: DAFF_CHECKOUT_STORE_CONFIG,
  },
  reducers: {
    token: DAFF_CHECKOUT_REDUCERS,
  },
} = createInjectableReducersTokens<DaffCheckoutReducersState>('DAFF_CHECKOUT', () => combineReducers<DaffCheckoutReducersState, any>({
  order: daffCheckoutOrderReducer,
}));
