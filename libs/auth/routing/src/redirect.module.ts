import {
  NgModule,
  inject,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import {
  from,
  of,
} from 'rxjs';

import {
  DAFF_AUTH_UNAUTHENTICATED_HOOKS,
  DaffAuthActionTypes,
  DaffAuthLoginActionTypes,
  DaffAuthUnauthenticatedHook,
} from '@daffodil/auth/state';

import { DAFF_AUTH_ROUTING_CONFIG } from './config/public_api';
import { DaffAuthRedirectEffects } from './effects/redirect.effects';
import { daffAuthRoutingRedirectUnauthenticatedHookFactory } from './helpers/public_api';


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
