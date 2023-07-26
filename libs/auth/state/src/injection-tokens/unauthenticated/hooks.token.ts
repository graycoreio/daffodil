import {
  InjectionToken,
  Provider,
} from '@angular/core';

import { DaffAuthUnauthenticatedHook } from './hook.type';

/**
 * A token to hold the unauthenticated hooks.
 * See {@link DaffAuthUnauthenticatedHook}.
 *
 * Prefer using {@link daffAuthProvideUnauthenticatedHooks}.
 */
export const DAFF_AUTH_UNAUTHENTICATED_HOOKS = new InjectionToken<DaffAuthUnauthenticatedHook[]>(
  'DAFF_AUTH_UNAUTHENTICATED_HOOKS',
  { factory: () => []},
);

/**
 * Provides {@link DAFF_AUTH_UNAUTHENTICATED_HOOKS}.
 *
 * ```ts
 * providers: [
 *   ...daffAuthProvideUnauthenticatedHooks(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffAuthProvideUnauthenticatedHooks(
  ...hooks: DaffAuthUnauthenticatedHook[]
): Provider[] {
  return hooks.map(hook => ({
    provide: DAFF_AUTH_UNAUTHENTICATED_HOOKS,
    useValue: hook,
    multi: true,
  }));
}
