import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffCartRoutingConfiguration,
  DAFF_CART_ROUTING_CONFIG,
  daffCartRoutingConfigurationDefault,
} from './config/config';
import {
  DaffCartBillingAddressGuardRedirectUrl,
  DaffCartShippingAddressGuardRedirectUrl,
  DaffCartShippingMethodGuardRedirectUrl,
  DaffCartPaymentMethodGuardRedirectUrl,
  DaffCartOrderResultGuardRedirectUrl,
  DaffCartItemsGuardRedirectUrl,
} from './guards/public_api';
import {
  DaffEmptyCartResolverRedirectUrl,
  DaffCartResolverRedirectUrl,
} from './resolvers/public_api';

@NgModule({
  providers: [
    { provide: DaffCartBillingAddressGuardRedirectUrl, useValue: '/' },
    { provide: DaffCartItemsGuardRedirectUrl, useValue: '/' },
    { provide: DaffCartShippingAddressGuardRedirectUrl, useValue: '/' },
    { provide: DaffCartShippingMethodGuardRedirectUrl, useValue: '/' },
    { provide: DaffCartPaymentMethodGuardRedirectUrl, useValue: '/' },
    { provide: DaffCartOrderResultGuardRedirectUrl, useValue: '/' },
    { provide: DaffEmptyCartResolverRedirectUrl, useValue: '/' },
    { provide: DaffCartResolverRedirectUrl, useValue: '/' },
  ],
})
export class DaffCartRoutingModule {
  static forRoot(config: DaffCartRoutingConfiguration = <any>{}): ModuleWithProviders<DaffCartRoutingModule> {
    return {
      ngModule: DaffCartRoutingModule,
      providers: [
        {
          provide: DAFF_CART_ROUTING_CONFIG,
          useValue: {
            ...daffCartRoutingConfigurationDefault,
            ...config,
          },
        },
      ],
    };
  }
}
