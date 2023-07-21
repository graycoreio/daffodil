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
      useFactory: () => {
        const config = inject(DAFF_AUTH_ROUTING_CONFIG);
        const router = inject(Router);
        const route = inject(ActivatedRoute);
        const hook: DaffAuthUnauthenticatedHook = (trigger) => {
          switch (trigger) {
            case DaffAuthLoginActionTypes.LogoutSuccessAction:
              return from(router.navigateByUrl(route.snapshot.queryParamMap.get(config.redirectUrlParam) || config.logoutRedirectPath));

            case DaffAuthActionTypes.AuthCheckFailureAction:
            case DaffAuthActionTypes.AuthGuardLogoutAction:
              return from(router.navigateByUrl(route.snapshot.queryParamMap.get(config.redirectUrlParam) || config.tokenExpirationRedirectPath));

            default:
              return of(null);
          }
        };

        return hook;
      },
    },
  ],
})
export class DaffAuthRoutingRedirectModule {}
