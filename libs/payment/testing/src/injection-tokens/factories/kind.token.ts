import { inject } from '@angular/core';

import { createServicesInjectionToken } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaymentResponse } from '@daffodil/payment';

import { DaffPaymentResponseFactory } from '../../factories/payment-response.factory';

export const {
  /**
   * A multi-provider injection token for providing extra payment result kind factories.
   * These factories correspond to different types of payment results that may be added by other packages.
   * This is useful for backend mocks (such as the testing driver) to generate an accurate representation
   * of the variety of results that an application can receive in production.
   */
  token: DAFF_PAYMENT_RESPONSE_KIND_FACTORIES,

  /**
   * Provides extra payment result factory kinds.
   *
   * See {@link DAFF_PAYMENT_RESPONSE_KIND_FACTORIES}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...provideDaffPaymentResponseKindFactories(
   *     MyPaymentResponseFactory
   *   )
   * ]
   * ```
   */
  provider: provideDaffPaymentResponseKindFactories,
} = createServicesInjectionToken<DaffModelFactory<DaffPaymentResponse>>(
  'DAFF_PAYMENT_RESPONSE_KIND_FACTORIES',
  {
    factory: () => [inject(DaffPaymentResponseFactory)],
    providedIn: 'root',
  },
);
