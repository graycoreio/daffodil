import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffCartStoreCreditDriver } from '@daffodil/cart-store-credit/driver';

import { DaffCartStoreCreditTestingDriver } from './store-credit.service';

/**
 * Provides the {@link DaffCartStoreCreditTestingDriver} as the {@link DaffCartStoreCreditDriver}.
 */
export const provideDaffCartStoreCreditTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCartStoreCreditDriver(DaffCartStoreCreditTestingDriver),
]);
