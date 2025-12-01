import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

import { DaffContentHtmlPage } from '@daffodil/content';
import { DaffContentPageHtmlDriver } from '@daffodil/content/driver';
import { DaffRoutingUriNormalizer } from '@daffodil/core/routing';

export const daffContentPageHtmlResolver: ResolveFn<DaffContentHtmlPage> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  inject(DaffContentPageHtmlDriver).get(inject(DaffRoutingUriNormalizer).normalize(state.url));
