import {
  inject,
  NgModule,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  combineReducers,
  StoreModule,
} from '@ngrx/store';

import {
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';
import { daffPaymentProvideExtraReducers } from '@daffodil/payment/state';

import { daffCartRetrivalActions } from './actions/cart-retrieval';
import {
  DAFF_CART_RETRIEVAL_ACTIONS,
  daffCartProvideRetrievalActions,
} from './cart-retrieval/public_api';
import { DaffCartAddressEffects } from './effects/cart-address.effects';
import { DaffCartBillingAddressEffects } from './effects/cart-billing-address.effects';
import { DaffCartCouponEffects } from './effects/cart-coupon.effects';
import { DaffCartItemEffects } from './effects/cart-item.effects';
import { DaffCartOrderEffects } from './effects/cart-order.effects';
import { DaffCartPaymentMethodsEffects } from './effects/cart-payment-methods.effects';
import { DaffCartPaymentProcessorEffects } from './effects/cart-payment-processor.effects';
import { DaffCartPaymentEffects } from './effects/cart-payment.effects';
import { DaffCartResolverEffects } from './effects/cart-resolver.effects';
import { DaffCartShippingAddressEffects } from './effects/cart-shipping-address.effects';
import { DaffCartShippingInformationEffects } from './effects/cart-shipping-information.effects';
import { DaffCartShippingMethodsEffects } from './effects/cart-shipping-methods.effects';
import { DaffCartEffects } from './effects/cart.effects';
import { provideDaffCartItemStateDebounceTime } from './injection-tokens/cart-item-state-debounce-time';
import { daffCartRetrievalActionsReducerFactory } from './reducers/cart/retrieval-actions.reducer';
import { daffCartItemEntitiesRetrievalActionsReducerFactory } from './reducers/cart-item-entities/retrieval-actions.reducer';
import { daffCartPaymentReducer } from './reducers/cart-payment/payment.reducer';
import { daffCartReducers } from './reducers/cart-reducers';
import { DAFF_CART_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_CART_STORE_CONFIG } from './reducers/token/config.token';
import { DAFF_CART_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_CART_REDUCERS,
  provideDaffCartReducersFactory,
} from './reducers/token/reducers.token';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_CART_STORE_FEATURE_KEY, DAFF_CART_REDUCERS, DAFF_CART_STORE_CONFIG),
    EffectsModule.forFeature([
      DaffCartEffects,
      DaffCartItemEffects,
      DaffCartBillingAddressEffects,
      DaffCartShippingAddressEffects,
      DaffCartAddressEffects,
      DaffCartShippingInformationEffects,
      DaffCartShippingMethodsEffects,
      DaffCartPaymentEffects,
      DaffCartPaymentProcessorEffects,
      DaffCartPaymentMethodsEffects,
      DaffCartOrderEffects,
      DaffCartCouponEffects,
      DaffCartResolverEffects,
    ]),
  ],
  providers: [
    provideDaffCartItemStateDebounceTime(4000),
    ...daffPaymentProvideExtraReducers(combineReducers({
      payment: daffCartPaymentReducer,
    })),
    daffCartProvideRetrievalActions(...daffCartRetrivalActions),
    provideDaffCartReducersFactory(() => {
      const retrievalActions = inject(DAFF_CART_RETRIEVAL_ACTIONS);

      return daffComposeReducers([
        // daffodil reducers should run first, don't change this
        // TODO: enforce this somehow (meta-reducers?)
        combineReducers(daffCartReducers),
        //
        combineReducers({
          cart: daffCartRetrievalActionsReducerFactory(retrievalActions),
          cartItems: daffCartItemEntitiesRetrievalActionsReducerFactory(retrievalActions),
          order: daffIdentityReducer,
        }),
        ...inject(DAFF_CART_EXTRA_REDUCERS),
      ]);
    }),
  ],
})
export class DaffCartStateModule {}
