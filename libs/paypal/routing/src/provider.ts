import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';

import { DaffPaypalExpressRedirectEffects } from './effects/express-redirect.effects';

/**
 * Provides the effects necessary for automatically redirecting the user to paypal upon successful express token generation.
 */
export const provideDaffPaypalExpressAutoRedirect = (): EnvironmentProviders => makeEnvironmentProviders([
  provideEffects(DaffPaypalExpressRedirectEffects),
]);
