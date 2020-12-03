import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
	DaffCartBillingAddressGuardRedirectUrl,
	DaffCartShippingAddressGuardRedirectUrl,
	DaffCartShippingMethodGuardRedirectUrl,
  DaffCartPaymentMethodGuardRedirectUrl,
  DaffCartOrderResultGuardRedirectUrl,
  DaffCartItemsGuardRedirectUrl,
  DaffResolvedCartGuardRedirectUrl
} from './guards/public_api';
import { DaffEmptyCartResolverRedirectUrl, DaffCartResolverRedirectUrl } from './resolvers/public_api';

import { daffCartReducers } from './reducers/public_api';
import { DaffCartEffects } from './effects/cart.effects';
import { DaffCartItemEffects } from './effects/cart-item.effects';
import { DaffCartBillingAddressEffects } from './effects/cart-billing-address.effects';
import { DaffCartShippingAddressEffects } from './effects/cart-shipping-address.effects';
import { DaffCartShippingInformationEffects } from './effects/cart-shipping-information.effects';
import { DaffCartShippingMethodsEffects } from './effects/cart-shipping-methods.effects';
import { DaffCartPaymentEffects } from './effects/cart-payment.effects';
import { DaffCartPaymentMethodsEffects } from './effects/cart-payment-methods.effects';
import { DaffCartOrderEffects } from './effects/cart-order.effects';
import { DaffCartCouponEffects } from './effects/cart-coupon.effects';
import { DaffCartAddressEffects } from './effects/cart-address.effects';
import { DaffCartItemStateDebounceTime } from './injection-tokens/cart-item-state-debounce-time';
import { DaffCartResolverEffects } from './effects/cart-resolver.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('cart', daffCartReducers),
    EffectsModule.forFeature([
      DaffCartEffects,
      DaffCartItemEffects,
      DaffCartBillingAddressEffects,
      DaffCartShippingAddressEffects,
      DaffCartAddressEffects,
      DaffCartShippingInformationEffects,
      DaffCartShippingMethodsEffects,
      DaffCartPaymentEffects,
      DaffCartPaymentMethodsEffects,
      DaffCartOrderEffects,
      DaffCartCouponEffects,
      DaffCartResolverEffects,
		]),
	],
	providers: [
		{ provide: DaffCartBillingAddressGuardRedirectUrl, useValue: '/' },
		{ provide: DaffCartItemsGuardRedirectUrl, useValue: '/' },
		{ provide: DaffResolvedCartGuardRedirectUrl, useValue: null },
		{ provide: DaffCartShippingAddressGuardRedirectUrl, useValue: '/' },
		{ provide: DaffCartShippingMethodGuardRedirectUrl, useValue: '/' },
		{ provide: DaffCartPaymentMethodGuardRedirectUrl, useValue: '/' },
		{ provide: DaffCartOrderResultGuardRedirectUrl, useValue: '/' },
		{ provide: DaffEmptyCartResolverRedirectUrl, useValue: '/' },
		{ provide: DaffCartResolverRedirectUrl, useValue: '/' },
		{ provide: DaffCartItemStateDebounceTime, useValue: 4000 }
	]
})
export class DaffCartStateModule { }
