import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';

import { DAFF_AUTH_UNAUTHENTICATED_HOOKS } from '@daffodil/auth/state';

import {
  DAFF_AUTH_ROUTING_CONFIG,
  DaffAuthRoutingConfig,
  provideDaffAuthRoutingConfig,
} from './config/public_api';
import { DaffAuthRedirectEffects } from './effects/redirect.effects';
import {
  DaffAuthResetPasswordGuard,
  GuestOnlyGuard,
  MemberOnlyGuard,
} from './guards/public_api';
import { daffAuthRoutingRedirectUnauthenticatedHookFactory } from './helpers/public_api';

/**
 * Provides the `@daffodil/auth/routing` guards and config.
 */
export const provideDaffAuthRouting = (config?: Partial<DaffAuthRoutingConfig>): EnvironmentProviders => makeEnvironmentProviders([
  DaffAuthResetPasswordGuard,
  MemberOnlyGuard,
  GuestOnlyGuard,
  provideDaffAuthRoutingConfig(config),
]);

/**
 * Provides the `@daffodil/auth/routing` redirect effects and unauthenticated hook.
 */
export const provideDaffAuthRoutingRedirect = (): EnvironmentProviders => makeEnvironmentProviders([
  provideEffects(
    DaffAuthRedirectEffects,
  ),
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
]);
