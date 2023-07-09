import {
  InjectionToken,
  Provider,
} from '@angular/core';

/**
 * A token to hold the unauthenticated hooks.
 * When a logged-in user is unauthenticated, various packages may perform cleanup tasks.
 * These are guaranteed to run synchronously before the client driver state is fully reset.
 *
 * Prefer using {@link daffAuthProvideUnauthenticatedHooks}.
 */
export const DAFF_AUTH_UNAUTHENTICATED_HOOKS = new InjectionToken<(() => void)[]>(
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
  ...hooks: (() => void)[]
): Provider[] {
  return hooks.map(hook => ({
    provide: DAFF_AUTH_UNAUTHENTICATED_HOOKS,
    useValue: hook,
    multi: true,
  }));
}
