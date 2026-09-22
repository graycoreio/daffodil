import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffPaypalExpressRedirectEffects } from './effects/express-redirect.effects';

/**
 * Provides the effects necessary for automatically redirecting the user to paypal upon successful epxress token generation.
 *
 * @deprecated in favor of {@link provideDaffPaypalExpressAutoRedirect}
 */
@NgModule({
  imports: [
    EffectsModule.forFeature([DaffPaypalExpressRedirectEffects]),
  ],
})
export class DaffPaypalExpressAutoRedirectModule {}
