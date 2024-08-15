import {
  APP_INITIALIZER,
  DestroyRef,
  inject,
  Provider,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { DaffRouterActivatedRoute } from './service';

/**
 * Provides the initializer for {@link DaffRouterActivatedRoute}.
 */
export const provideDaffRouterActivatedRoute = (): Provider => ({
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: () => {
    const service = inject(DaffRouterActivatedRoute);
    const destroyRef = inject(DestroyRef);
    return () => {
      service.route$.pipe(
        takeUntilDestroyed(destroyRef),
      ).subscribe();
    };
  },
});
