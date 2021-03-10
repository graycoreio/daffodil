import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
  DaffCartStateConfiguration,
  DAFF_CART_STATE_CONFIG,
  daffCartStateConfigurationDefault,
} from './config/config';
import { DaffCartAddressEffects } from './effects/cart-address.effects';
import { DaffCartBillingAddressEffects } from './effects/cart-billing-address.effects';
import { DaffCartCouponEffects } from './effects/cart-coupon.effects';
import { DaffCartItemEffects } from './effects/cart-item.effects';
import { DaffCartOrderEffects } from './effects/cart-order.effects';
import { DaffCartPaymentMethodsEffects } from './effects/cart-payment-methods.effects';
import { DaffCartPaymentEffects } from './effects/cart-payment.effects';
import { DaffCartResolverEffects } from './effects/cart-resolver.effects';
import { DaffCartShippingAddressEffects } from './effects/cart-shipping-address.effects';
import { DaffCartShippingInformationEffects } from './effects/cart-shipping-information.effects';
import { DaffCartShippingMethodsEffects } from './effects/cart-shipping-methods.effects';
import { DaffCartEffects } from './effects/cart.effects';
import {
  DaffCartBillingAddressGuardRedirectUrl,
  DaffCartShippingAddressGuardRedirectUrl,
  DaffCartShippingMethodGuardRedirectUrl,
  DaffCartPaymentMethodGuardRedirectUrl,
  DaffCartOrderResultGuardRedirectUrl,
  DaffCartItemsGuardRedirectUrl,
} from './guards/public_api';
import { DaffCartItemStateDebounceTime } from './injection-tokens/cart-item-state-debounce-time';
import {
  daffCartReducers,
  DAFF_CART_STORE_FEATURE_KEY,
} from './reducers/public_api';
import {
  DaffEmptyCartResolverRedirectUrl,
  DaffCartResolverRedirectUrl,
} from './resolvers/public_api';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_CART_STORE_FEATURE_KEY, daffCartReducers),
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
    { provide: DaffCartShippingAddressGuardRedirectUrl, useValue: '/' },
    { provide: DaffCartShippingMethodGuardRedirectUrl, useValue: '/' },
    { provide: DaffCartPaymentMethodGuardRedirectUrl, useValue: '/' },
    { provide: DaffCartOrderResultGuardRedirectUrl, useValue: '/' },
    { provide: DaffEmptyCartResolverRedirectUrl, useValue: '/' },
    { provide: DaffCartResolverRedirectUrl, useValue: '/' },
    { provide: DaffCartItemStateDebounceTime, useValue: 4000 },
  ],
})
export class DaffCartStateModule {
  static forRoot(config: DaffCartStateConfiguration = <any>{}): ModuleWithProviders<DaffCartStateModule> {
    return {
      ngModule: DaffCartStateModule,
      providers: [
        {
          provide: DAFF_CART_STATE_CONFIG,
          useValue: {
            ...daffCartStateConfigurationDefault,
            ...config,
          },
        },
      ],
    };
  }
}
