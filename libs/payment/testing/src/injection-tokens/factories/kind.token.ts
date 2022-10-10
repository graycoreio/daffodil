import {
  inject,
  InjectionToken,
  Provider,
  Type,
} from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaymentResponse } from '@daffodil/payment';

import { DaffPaymentResponseFactory } from '../../factories/payment-response.factory';

/**
 * A multi-provider injection token for providing extra payment result kind factories.
 * These factories correspond to different types of payment results that may be added by other packages.
 * This is useful for backend mocks (such as the testing driver) to generate an accurate representation
 * of the variety of results that an application can receive in production.
 */
export const DAFF_PAYMENT_RESPONSE_KIND_FACTORIES = new InjectionToken<DaffModelFactory<DaffPaymentResponse>[]>(
  'DAFF_PAYMENT_RESPONSE_KIND_FACTORIES',
  { factory: () => [inject(DaffPaymentResponseFactory)], providedIn: 'root' },
);

/**
 * Provides extra payment result factory kinds.
 *
 * See {@link DAFF_PAYMENT_RESPONSE_KIND_FACTORIES}.
 *
 * ```ts
 * providers: [
 *   ...daffProvidePaymentResponseKindFactories(
 *     MyPaymentResponseFactory
 *   )
 * ]
 * ```
 */
export function daffProvidePaymentResponseKindFactories<T extends DaffPaymentResponse = DaffPaymentResponse>(...factoryTypes: Type<DaffModelFactory<T>>[]): Provider[] {
  return factoryTypes.map(factoryType => ({
    provide: DAFF_PAYMENT_RESPONSE_KIND_FACTORIES,
    useExisting: factoryType,
    multi: true,
  }));
}
