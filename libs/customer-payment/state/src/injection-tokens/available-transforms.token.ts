import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

import { DaffCustomerPaymentRequestTransform } from '../models/public_api';

/**
 * A multi-provider injection token for registering customer payment request transforms.
 */
export const DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORMS = new InjectionToken<DaffCustomerPaymentRequestTransform[]>(
  'DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORMS',
  {
    factory: () => [],
    providedIn: 'any',
  },
);

/**
 * Provides a customer payment request transform registration.
 *
 * See {@link DaffCustomerPaymentRequestTransform}.
 */
export const daffPaymentProvideAvailableProcessors = (...transforms: DaffCustomerPaymentRequestTransform[]): ValueProvider[] =>
  transforms.map(transform => ({
    provide: DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORMS,
    useValue: transform,
    multi: true,
  }));
