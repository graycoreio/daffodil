import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffPaypalExpressRedirectEffects } from './effects/express-redirect.effects';

/**
 * Provides the effects necessary for automatically redirecting the user to paypal upon successful epxress token generation.
 *
 * @deprecated in favor of {@link provideDaffPaypalExpressAutoRedirect} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    EffectsModule.forFeature([DaffPaypalExpressRedirectEffects]),
  ],
})
export class DaffPaypalExpressAutoRedirectModule {}
