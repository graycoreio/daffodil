import { Injectable, Inject } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
	DaffExternalRouterDriverInterface,
	DaffExternalRouterDriver,
} from '@daffodil/external-router/driver';
import {
	DaffExternalRouter,
	DaffExternalRouterConfiguration,
	DAFF_EXTERNAL_ROUTER_CONFIG,
} from '@daffodil/external-router';

import { daffConvertToPath } from '../helper/convert-to-path';

/**
 * The DaffExternalRouterExistenceGuard is responsible for guarding the wildcard route
 * of an Angular App and either navigating to a resolved route upon successful resolution
 * or navigating to the configured route upon a failed resolution.
 */
@Injectable({
	providedIn: 'root',
})
export class DaffExternalRouterExistenceGuard implements CanActivate {
	constructor(
		@Inject(DaffExternalRouterDriver)
		private driver: DaffExternalRouterDriverInterface,
		private externalRouter: DaffExternalRouter,
		private router: Router,
		@Inject(DAFF_EXTERNAL_ROUTER_CONFIG)
		private config: DaffExternalRouterConfiguration,
	) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<UrlTree | boolean> {
		return this.driver.resolve(daffConvertToPath(next.url)).pipe(
			switchMap(resolvedRoute => of(this.externalRouter.add(resolvedRoute))),
			// Note that we have to use state.url as we want to ensure that we keep any fragments or query strings.
			// When we succeed, redirect to the new route.
			map(() => this.router.parseUrl(state.url)),
			// When we fail, navigate to the configured failed resolution path,
			catchError(error => {
				//TODO(damienwebdev): Add a logging system.
				//This log is intentional until we have a better logging system in place.
				console.log(error);
				return of(this.router.parseUrl(this.config.failedResolutionPath));
			}),
		);
	}
}
