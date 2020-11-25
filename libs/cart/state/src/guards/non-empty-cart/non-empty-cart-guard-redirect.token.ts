import { InjectionToken } from '@angular/core';

/**
 * The path to which the user should be redirected if the cart has no items when {@link DaffNonEmptyCartGuard} is invoked.
 */
export const DaffCartNonEmptyCartGuardRedirectUrl = new InjectionToken<string>('DaffCartNonEmptyCartGuardRedirectUrl');
