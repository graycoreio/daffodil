import { createMultiInjectionToken } from '@daffodil/core';

import { DaffAuthUnauthenticatedHook } from './hook.type';

export const {
  /**
   * A token to hold the unauthenticated hooks.
   * See {@link DaffAuthUnauthenticatedHook}.
   *
   * Prefer using {@link daffAuthProvideUnauthenticatedHooks}.
   */
  token: DAFF_AUTH_UNAUTHENTICATED_HOOKS,
  /**
   * Provides {@link DAFF_AUTH_UNAUTHENTICATED_HOOKS}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffAuthProvideUnauthenticatedHooks(
   *     myHook1,
   *     myHook2
   *   )
   * ]
   * ```
   */
  provider: daffAuthProvideUnauthenticatedHooks,
} = createMultiInjectionToken<DaffAuthUnauthenticatedHook>('DAFF_AUTH_UNAUTHENTICATED_HOOKS');

