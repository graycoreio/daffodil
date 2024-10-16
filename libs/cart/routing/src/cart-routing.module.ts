import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffCartRoutingConfiguration,
  provideDaffCartRoutingConfig,
} from './config/config';
import {
  DaffCartBillingAddressGuardRedirectUrl,
  DaffCartShippingAddressGuardRedirectUrl,
  DaffCartShippingMethodGuardRedirectUrl,
  DaffCartPaymentMethodGuardRedirectUrl,
  DaffCartOrderResultGuardRedirectUrl,
  DaffCartItemsGuardRedirectUrl,
  DaffResolveCartGuardRedirectUrl,
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
    { provide: DaffResolveCartGuardRedirectUrl, useValue: '/' },
  ],
})
export class DaffCartRoutingModule {
  static forRoot(config: DaffCartRoutingConfiguration = <any>{}): ModuleWithProviders<DaffCartRoutingModule> {
    return {
      ngModule: DaffCartRoutingModule,
      providers: [
        provideDaffCartRoutingConfig(config),
      ],
    };
  }
}
