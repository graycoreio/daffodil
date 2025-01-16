import {
  DestroyRef,
  inject,
  provideAppInitializer,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { DaffRouterActivatedRoute } from './service';

/**
 * Provides the initializer for {@link DaffRouterActivatedRoute}.
 */
export const provideDaffRouterActivatedRoute = () =>
  provideAppInitializer(() => {
    const initializerFn = (() => {
      const service = inject(DaffRouterActivatedRoute);
      const destroyRef = inject(DestroyRef);
      return () => {
        service.route$.pipe(
          takeUntilDestroyed(destroyRef),
        ).subscribe();
      };
    })();
    return initializerFn();
  });
