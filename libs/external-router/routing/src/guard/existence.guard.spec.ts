import { TestBed } from '@angular/core/testing';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
  PRIMARY_OUTLET,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DAFF_EXTERNAL_ROUTER_CONFIG,
  daffProvideRouteResolvableByType,
} from '@daffodil/external-router';
import {
  DaffExternalRouterDriverInterface,
  DaffExternalRouterDriver,
} from '@daffodil/external-router/driver';
import { DaffExternalRouterDriverTestingModule } from '@daffodil/external-router/driver/testing';

import { DaffExternalRouterExistenceGuard } from './existence.guard';

describe('@daffodil/external-router/routing | DaffExternalRouterExistenceGuard', () => {
  let guard: DaffExternalRouterExistenceGuard;
  let scheduler: TestScheduler;
  let router: Router;
  let driver: DaffExternalRouterDriverInterface;
  const stubFailedRoutePath = '/error-path';
  const urlWithExtraInfo = '/some-resolved/path/with/file-endings.html(secondary:outlet)?query=1&two=2#fragment';

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
        daffProvideRouteResolvableByType({
          type: STUB_RESOLVABLE_TYPE,
          route: { redirectTo: '/' },
        }),
        {
          provide: DAFF_EXTERNAL_ROUTER_CONFIG,
          useValue: {
            failedResolutionPath: stubFailedRoutePath,
          },
        },
      ],
    });
    router = TestBed.inject<Router>(Router);
    guard = TestBed.inject<DaffExternalRouterExistenceGuard>(DaffExternalRouterExistenceGuard);
    driver = TestBed.inject(DaffExternalRouterDriver);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should invoke the driver with a normalized URL containing query strings, etc.', () => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    const urlTree = router.parseUrl(urlWithExtraInfo);
    spyOn(driver, 'resolve').and.returnValue(of({
      url: urlTree.toString(),
      type: STUB_RESOLVABLE_TYPE,
      id: 'id',
      code: 200,
    }));

    guard.canActivate(
      <ActivatedRouteSnapshot>{
        url: urlTree.root.children[PRIMARY_OUTLET].segments,
      },
      <RouterStateSnapshot>{ url: urlWithExtraInfo },
    ).subscribe();

    expect(driver.resolve).toHaveBeenCalledWith('/some-resolved/path/with/file-endings.html?query=1&two=2#fragment');
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
					<ActivatedRouteSnapshot>{ url: [{ path: 'some-path' }]},
					<RouterStateSnapshot>{ url: 'test' },
        ),
      ).toBe(expected, { a: errorTree });
    });
  });

  it('should return a UrlTree to the route (with fragments and queryStrings) if a known type is resolved for the route', () => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    const urlTree = router.parseUrl(urlWithExtraInfo);

    scheduler.run(helpers => {
      const { expectObservable } = helpers;
      const expected = '(a|)';

      expectObservable(
        guard.canActivate(
					<ActivatedRouteSnapshot>{
					  url: urlTree.root.children[PRIMARY_OUTLET].segments,
					},
					<RouterStateSnapshot>{ url: urlWithExtraInfo },
        ),
      ).toBe(expected, { a: urlTree });
    });
  });
});
