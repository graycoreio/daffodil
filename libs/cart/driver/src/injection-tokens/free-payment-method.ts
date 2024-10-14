import { DaffCartPaymentMethod } from '@daffodil/cart';
import { createSingleInjectionToken } from '@daffodil/core';

export const {
  /**
   * The payment method payload that correspondes to the free payment method.
   * This will be different per-platform and can be passed into the update driver call.
   */
  token: DAFF_CART_DRIVER_FREE_PAYMENT_METHOD,
  /**
   * Provides the {@link DAFF_CART_DRIVER_FREE_PAYMENT_METHOD} injection token.
   */
  provider: daffCartDriverProvideFreePaymentMethod,
} = createSingleInjectionToken<Partial<DaffCartPaymentMethod>>(
  'DAFF_CART_DRIVER_FREE_PAYMENT_METHOD',
  { factory: () => ({}) },
);
