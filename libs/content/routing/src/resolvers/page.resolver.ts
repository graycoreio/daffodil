import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

import { DaffContentPage } from '@daffodil/content';
import { DaffContentPageDriver } from '@daffodil/content/driver';
import { DaffRoutingUriNormalizer } from '@daffodil/core/routing';

export const daffContentPageResolver: ResolveFn<DaffContentPage> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  inject(DaffContentPageDriver).get(inject(DaffRoutingUriNormalizer).normalize(state.url));
