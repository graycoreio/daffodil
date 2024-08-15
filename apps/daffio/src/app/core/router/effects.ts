import { inject } from '@angular/core';
import { createEffect } from '@ngrx/effects';

import { DaffRouterActivatedRoute } from '@daffodil/router';

// TODO: should this be moved to `@daffodil/router/state`?
export const daffioRouterActivatedRoute = createEffect(
  (service = inject(DaffRouterActivatedRoute)) => service.route$,
  { dispatch: false, functional: true },
);
