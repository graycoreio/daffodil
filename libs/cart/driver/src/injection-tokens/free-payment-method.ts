import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

import { DaffCartPaymentMethod } from '@daffodil/cart';

/**
 * The payment method payload that correspondes to the free payment method.
 * This will be different per-platform and can be passed into the update driver call.
 */
export const DAFF_CART_DRIVER_FREE_PAYMENT_METHOD = new InjectionToken<Partial<DaffCartPaymentMethod>>(
  'DAFF_CART_DRIVER_FREE_PAYMENT_METHOD',
  {
    factory: () => ({}),
  });

/**
 * Provides the {@link DAFF_CART_DRIVER_FREE_PAYMENT_METHOD} injection token.
 */
export function daffCartDriverProvideFreePaymentMethod(method: Partial<DaffCartPaymentMethod>): ValueProvider {
  return {
    provide: DAFF_CART_DRIVER_FREE_PAYMENT_METHOD,
    useValue: method,
  };
}
