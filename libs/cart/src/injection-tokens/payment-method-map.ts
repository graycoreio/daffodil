import { InjectionToken } from '@angular/core';

/**
 * An injection token for a mapping from the platform-specific cart payment method
 * to a user-defined platform-agnostic payment ID.
 * It should be an object whose keys are the cart payment's method and whose values are strings.
 * Defaults to an empty object.
 */
export const DaffCartPaymentMethodIdMap = new InjectionToken<{[key: string]: string}>('DaffCartPaymentMethodIdMap', {
  factory: () => ({})
});
