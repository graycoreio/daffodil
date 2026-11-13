import {
  NgModule,
  inject,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { DAFF_AUTH_UNAUTHENTICATED_HOOKS } from '@daffodil/auth/state';

import { DAFF_AUTH_ROUTING_CONFIG } from './config/public_api';
import { DaffAuthRedirectEffects } from './effects/redirect.effects';
import { daffAuthRoutingRedirectUnauthenticatedHookFactory } from './helpers/public_api';


/**
 * @deprecated in favor of {@link provideDaffAuthRoutingRedirect} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffAuthRedirectEffects,
    ]),
  ],
  providers: [
    {
      provide: DAFF_AUTH_UNAUTHENTICATED_HOOKS,
      multi: true,
      useFactory: () =>
        daffAuthRoutingRedirectUnauthenticatedHookFactory(
          inject(Router),
          inject(ActivatedRoute),
          inject(DAFF_AUTH_ROUTING_CONFIG),
        ),
    },
  ],
})
export class DaffAuthRoutingRedirectModule {}
