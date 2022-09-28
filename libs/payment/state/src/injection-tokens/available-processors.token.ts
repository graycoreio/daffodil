import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

import { DaffPaymentAvailableProcessor } from '../models/public_api';

/**
 * A multi-provider injection token for registering payment processors.
 */
export const DAFF_PAYMENT_AVAILABLE_PROCESSORS = new InjectionToken<DaffPaymentAvailableProcessor[]>(
  'DAFF_PAYMENT_AVAILABLE_PROCESSORS',
  {
    factory: () => [],
    providedIn: 'any',
  },
);

/**
 * Provides a payment processor registration.
 *
 * See {@link DaffPaymentAvailableProcessor}.
 */
export const daffPaymentProvideAvailableProcessors = (...processors: DaffPaymentAvailableProcessor[]): ValueProvider[] =>
  processors.map(processor => ({
    provide: DAFF_PAYMENT_AVAILABLE_PROCESSORS,
    useValue: processor,
    multi: true,
  }));
