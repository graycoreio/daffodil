import {
  inject,
  InjectionToken,
} from '@angular/core';
import { combineLatest } from 'rxjs';

import { DaffAuthUnauthenticatedHook } from './hook.type';
import { DAFF_AUTH_UNAUTHENTICATED_HOOKS } from './hooks.token';

/**
 * An internal token to hold the unauthenticated hook.
 * Combines the multi provided hooks into a single function.
 *
 * @docs-private
 */
export const DAFF_AUTH_UNAUTHENTICATED_HOOK = new InjectionToken<DaffAuthUnauthenticatedHook>(
  'DAFF_AUTH_UNAUTHENTICATED_HOOK',
  {
    factory: () => {
      const hooks = inject(DAFF_AUTH_UNAUTHENTICATED_HOOKS);
      return (action) => combineLatest(hooks.map((hook) => hook(action)));
    },
  },
);
