import { inject } from '@angular/core';
import {
  CanMatchFn,
  Router,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import {
  Observable,
  catchError,
  map,
  of,
  tap,
} from 'rxjs';

import {
  DAFF_EXTERNAL_ROUTER_CONFIG,
  DaffExternalRouterConfiguration,
  DaffExternallyResolvableUrl,
  DaffRouteWithSeoData,
} from '@daffodil/external-router';
import { DaffExternalRouterDriver } from '@daffodil/external-router/driver';

import { DaffExternalRouterNotFoundError } from '../errors/not-found-error';
import { DaffExternalRouterPermanentRedirectError } from '../errors/permanent-redirect';
import { DaffExternalRouterTemporaryRedirectError } from '../errors/temporary-redirect';
import { daffConvertToPath } from '../helper/convert-to-path';
import { processErrors } from '../processors/process-errors';
import { processRedirects } from '../processors/process-redirect';

/**
 * A `canMatch` guard function that will resolve a route externally, allowing Angular to match it.
 *
 * Depending on the resolution result, the route's data will contain `daffSeoData` with supplemental search engine data
 * about the route. The data on the route is cumulative. If other data properties are set, they will be merged alongside daffSeoData.
 */
export const daffExternalMatcherTypeGuard = (type: string) => (route: DaffRouteWithSeoData, segments: Array<UrlSegment>): Observable<boolean | UrlTree> => {
  const router = inject(Router);
  const config: DaffExternalRouterConfiguration = inject(DAFF_EXTERNAL_ROUTER_CONFIG);
  return inject(DaffExternalRouterDriver).resolve(daffConvertToPath(segments)).pipe(
    map(processErrors),
    map(processRedirects),
    map((r) => ({ result: r, isMatch: type === r.type })),
    tap((r) => {
      if(r.isMatch) {
        route.title = r.result.data?.title ?? route.data?.daffSeoData?.title ?? route.title;
        route.data = { ...route.data, daffSeoData: r.result.data };
      }
    }),
    map((res) => res.isMatch),
    catchError(error => {
      if (
        !(error instanceof DaffExternalRouterPermanentRedirectError) &&
        !(error instanceof DaffExternalRouterTemporaryRedirectError)) {
        throw error;
      }

      return of(router.parseUrl(error.redirectUrl));
    }),
    // Handle "404"
    catchError((error) => {
      if (!(error instanceof DaffExternalRouterNotFoundError)) {
        throw error;
      }

      return of(false);
    }),
    //Otherwise something went horribly wrong and we need to bail out.
    catchError((error) => of(router.parseUrl(config.failedResolutionPath))),
    catchError(() => of(false)),
  );
};


