import { createSingleInjectionToken } from '@daffodil/core';

export const {
  /**
   * An injection token for a mapping from the platform-specific cart payment method
   * to a user-defined platform-agnostic payment ID.
   * It should be an object whose keys are the cart payment's method and whose values are strings.
   * Defaults to an empty object.
   */
  // TODO: refactor to upper snake case
  token: DaffCartPaymentMethodIdMap,
  provider: daffProvideCartPaymentMethodIdMap,
} = createSingleInjectionToken<{[key: string]: string}>(
  'DaffCartPaymentMethodIdMap',
  { factory: () => ({}) },
);
