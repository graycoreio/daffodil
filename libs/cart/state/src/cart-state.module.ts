import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  combineReducers,
  StoreModule,
} from '@ngrx/store';

import { daffPaymentProvideExtraReducers } from '@daffodil/payment/state';

import { daffCartRetrivalActions } from './actions/cart-retrieval';
import { daffCartProvideRetrievalActions } from './cart-retrieval/public_api';
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
import { daffCartPaymentReducer } from './reducers/cart-payment/payment.reducer';
import { DAFF_CART_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_CART_STORE_CONFIG } from './reducers/token/config.token';
import { DAFF_CART_REDUCERS } from './reducers/token/reducers.token';

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
  ],
})
export class DaffCartStateModule {}
