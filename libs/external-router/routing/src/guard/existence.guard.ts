import { isPlatformServer } from '@angular/common';
import {
  Injectable,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {
  Observable,
  of,
} from 'rxjs';
import {
  catchError,
  map,
  switchMap,
} from 'rxjs/operators';

import { DaffRoutingUriNormalizer } from '@daffodil/core/routing';
import {
  DaffExternalRouter,
  DaffExternalRouterConfiguration,
  DAFF_EXTERNAL_ROUTER_CONFIG,
  DaffExternallyResolvableUrl,
} from '@daffodil/external-router';
import {
  DaffExternalRouterDriverInterface,
  DaffExternalRouterDriver,
} from '@daffodil/external-router/driver';

import { DaffExternalRouterNotFoundError } from '../errors/not-found-error';
import { DaffExternalRouterPermanentRedirectError } from '../errors/permanent-redirect';
import { DaffExternalRouterTemporaryRedirectError } from '../errors/temporary-redirect';
import { processErrors } from '../processors/process-errors';
import { processRedirects } from '../processors/process-redirect';

/**
 * The DaffExternalRouterExistenceGuard is responsible for guarding the wildcard route
 * of an Angular App and either navigating to a resolved route upon successful resolution
 * or navigating to the configured route upon a failed resolution.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffExternalRouterExistenceGuard  {
  constructor(
    @Inject(DaffExternalRouterDriver)
    private driver: DaffExternalRouterDriverInterface,
    private externalRouter: DaffExternalRouter,
    private router: Router,
    @Inject(DAFF_EXTERNAL_ROUTER_CONFIG)
    private config: DaffExternalRouterConfiguration,
    private urlNormalizer: DaffRoutingUriNormalizer,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<UrlTree | boolean> {
    return this.driver.resolve(this.urlNormalizer.normalize(state.url)).pipe(
      map((resolvedRoute: DaffExternallyResolvableUrl) => processErrors(resolvedRoute)),
      switchMap(resolvedRoute => {
        this.externalRouter.add(resolvedRoute);
        return of(resolvedRoute);
      }),
      map((resolvedRoute: DaffExternallyResolvableUrl) => processRedirects(resolvedRoute)),
      // Note that we have to use state.url as we want to ensure that we keep any fragments or query strings.
      // When we succeed, redirect to the new route, as config has changed since we init'd.
      map(() => this.router.parseUrl(state.url)),
      // When we fail, we need to process errors as dictated by the error type.
      // Handle redirects
      catchError(error => {
        if (
          !(error instanceof DaffExternalRouterPermanentRedirectError) &&
          !(error instanceof DaffExternalRouterTemporaryRedirectError)) {
          throw error;
        }

        return of(this.router.parseUrl(error.redirectUrl));
      }),
      // Handle "404"
      catchError((error) => {
        if (!(error instanceof DaffExternalRouterNotFoundError)) {
          throw error;
        }

        return of(this.router.parseUrl(this.config.notFoundResolutionPath));
      }),

      //Otherwise something went horribly wrong and we need to bail out.
      catchError((error) => {
        //TODO(damienwebdev): Add a logging system.
        //This log is intentional until we have a better logging system in place.
        console.log(error);
        return of(this.router.parseUrl(this.config.failedResolutionPath));
      }),
    );
  }
}
