import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffCheckoutPlacedOrderGuardRedirectUrl } from './placed-order/public_api';

/**
 * Provides the `@daffodil/checkout/routing` guard redirect URLs.
 */
export const provideDaffCheckoutRouting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffCheckoutPlacedOrderGuardRedirectUrl, useValue: '/' },
]);
