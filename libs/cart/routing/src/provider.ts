import {
  EnvironmentProviders,
  makeEnvironmentProviders,
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

/**
 * Provides the `@daffodil/cart/routing` guard and resolver redirect URLs and configuration.
 */
export const provideDaffCartRouting = (config: DaffCartRoutingConfiguration = <any>{}): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffCartBillingAddressGuardRedirectUrl, useValue: '/' },
  { provide: DaffCartItemsGuardRedirectUrl, useValue: '/' },
  { provide: DaffCartShippingAddressGuardRedirectUrl, useValue: '/' },
  { provide: DaffCartShippingMethodGuardRedirectUrl, useValue: '/' },
  { provide: DaffCartPaymentMethodGuardRedirectUrl, useValue: '/' },
  { provide: DaffCartOrderResultGuardRedirectUrl, useValue: '/' },
  { provide: DaffEmptyCartResolverRedirectUrl, useValue: '/' },
  { provide: DaffCartResolverRedirectUrl, useValue: '/' },
  { provide: DaffResolveCartGuardRedirectUrl, useValue: '/' },
  provideDaffCartRoutingConfig(config),
]);
