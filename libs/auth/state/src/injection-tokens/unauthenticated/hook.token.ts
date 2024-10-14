import { inject } from '@angular/core';
import { combineLatest } from 'rxjs';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffAuthUnauthenticatedHook } from './hook.type';
import { DAFF_AUTH_UNAUTHENTICATED_HOOKS } from './hooks.token';

export const {
  /**
   * An internal token to hold the unauthenticated hook.
   * Combines the multi provided hooks into a single function.
   *
   * @docs-private
   */
  token: DAFF_AUTH_UNAUTHENTICATED_HOOK,
  provider: daffProvideAuthUnauthenticatedHook,
} = createSingleInjectionToken<DaffAuthUnauthenticatedHook>(
  'DAFF_AUTH_UNAUTHENTICATED_HOOK',
  {
    factory: () => {
      const hooks = inject(DAFF_AUTH_UNAUTHENTICATED_HOOKS);
      return (action) => combineLatest(hooks.map((hook) => hook(action)));
    },
  },
);
