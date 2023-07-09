import {
  inject,
  InjectionToken,
} from '@angular/core';

import { DAFF_AUTH_UNAUTHENTICATED_HOOKS } from './hooks.token';

/**
 * An internal token to hold the unauthenticated hook.
 * Combines the multi provided hooks into a single function.
 *
 * @docs-private
 */
export const DAFF_AUTH_UNAUTHENTICATED_HOOK = new InjectionToken<() => void>(
  'DAFF_AUTH_UNAUTHENTICATED_HOOK',
{
  factory: () => inject(DAFF_AUTH_UNAUTHENTICATED_HOOKS).reduce((acc, hook) => () => {
    acc();
    hook();
  }, () => {}),
},
);
