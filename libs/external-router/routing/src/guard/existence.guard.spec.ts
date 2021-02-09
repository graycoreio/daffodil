import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DAFF_EXTERNAL_ROUTER_CONFIG } from '@daffodil/external-router';
import { DaffExternalRouterDriverTestingModule } from '@daffodil/external-router/driver/testing';

import { DaffExternalRouterExistenceGuard } from './existence.guard';
import {
	RouterStateSnapshot,
	ActivatedRouteSnapshot,
	Router,
	PRIMARY_OUTLET,
} from '@angular/router';
import { TestScheduler } from 'rxjs/testing';
import { provideRouteResolvableByType } from 'libs/external-router/src/token/type-resolvable-routes.token';

describe('@daffodil/external-router/routing | DaffExternalRouterTestingDriver', () => {
	let guard: DaffExternalRouterExistenceGuard;
	let scheduler: TestScheduler;
	let router: Router;
	const stubFailedRoutePath = '/error-path';

	const STUB_RESOLVABLE_TYPE = 'A_RESOLVABLE_TYPE';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([{ path: '**', redirectTo: '/' }]),
				DaffExternalRouterDriverTestingModule.forRoot({
					'some-resolved/path/with/file-endings.html': STUB_RESOLVABLE_TYPE,
				}),
			],
			providers: [
				provideRouteResolvableByType(STUB_RESOLVABLE_TYPE, { redirectTo: '/' }),
				{
					provide: DAFF_EXTERNAL_ROUTER_CONFIG,
					useValue: {
						failedResolutionPath: stubFailedRoutePath,
					},
				},
			],
		});
		router = TestBed.get(Router);
		guard = TestBed.get(DaffExternalRouterExistenceGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});

	it('should return a UrlTree to the configured failedResolutionPath if resolution fails', () => {
		scheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});

		const errorTree = router.parseUrl(stubFailedRoutePath);

		scheduler.run(helpers => {
			const { expectObservable } = helpers;
			const expected = '(a|)';

			expectObservable(
				guard.canActivate(
					{ url: [{ path: 'some-path' }] } as ActivatedRouteSnapshot,
					{ url: 'test' } as RouterStateSnapshot,
				),
			).toBe(expected, { a: errorTree });
		});
	});

	it('should return a UrlTree to the route (with fragments and queryStrings) if a known type is resolved for the route', () => {
		scheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});

		const url =
			'/some-resolved/path/with/file-endings.html?query=1&two=2#fragment';
		const urlTree = router.parseUrl(url);

		scheduler.run(helpers => {
			const { expectObservable } = helpers;
			const expected = '(a|)';

			expectObservable(
				guard.canActivate(
					{
						url: urlTree.root.children[PRIMARY_OUTLET].segments,
					} as ActivatedRouteSnapshot,
					{ url: url } as RouterStateSnapshot,
				),
			).toBe(expected, { a: urlTree });
		});
	});
});
