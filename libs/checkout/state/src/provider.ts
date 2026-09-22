import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffOrderState } from '@daffodil/order/state';

/**
 * Provides the `@daffodil/checkout/state` feature states.
 * Includes {@link provideDaffOrderState}, which itself includes {@link provideDaffCartState}.
 */
export const provideDaffCheckoutState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffOrderState(),
]);
