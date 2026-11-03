import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffPaymentResponseFactory } from './factories/public_api';
import { provideDaffPaymentResponseKindFactories } from './injection-tokens/public_api';

/**
 * Provides the default payment result factory as a payment result type factory.
 */
export const provideDaffPaymentTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffPaymentResponseKindFactories(DaffPaymentResponseFactory),
]);
