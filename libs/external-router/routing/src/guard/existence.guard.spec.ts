import { Component } from '@angular/core';
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

import { DaffExternalRouterModule } from '@daffodil/external-router';
import {
  DaffExternalRouterDriverInterface,
  DaffExternalRouterDriver,
} from '@daffodil/external-router/driver';
import { DaffExternalRouterDriverTestingModule } from '@daffodil/external-router/driver/testing';

import { DaffExternalRouterExistenceGuard } from './existence.guard';

@Component({})
export class FakeComponent {}

describe('@daffodil/external-router/routing | DaffExternalRouterExistenceGuard', () => {
  let guard: DaffExternalRouterExistenceGuard;
  let scheduler: TestScheduler;
  let router: Router;
  let driver: DaffExternalRouterDriverInterface;
  const stubFailedRoutePath = '/error-path';
  const stubNotFoundPath = '/not-found';
  const urlWithExtraInfo = '/some-resolved/path/with/file-endings.html(secondary:outlet)?query=1&two=2#fragment';

  const STUB_RESOLVABLE_TYPE = 'A_RESOLVABLE_TYPE';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: '**', redirectTo: '/' }]),
        DaffExternalRouterDriverTestingModule.forRoot({
          'some-resolved/path/with/file-endings.html': STUB_RESOLVABLE_TYPE,
        }),
        DaffExternalRouterModule.forRoot({
          failedResolutionPath: stubFailedRoutePath,
          notFoundResolutionPath: stubNotFoundPath,
        },[
          { type: STUB_RESOLVABLE_TYPE, route: { component: FakeComponent }},
        ]),
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
    const urlTree = router.parseUrl(urlWithExtraInfo);
    spyOn(driver, 'resolve').and.returnValue(of({
      url: '/some-resolved/path/with/file-endings.html',
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

  describe('when the resolution is successful', () => {
    it('should add the resolved url to configuration', () => {
      const path = '/some-resolved/path/with/file-endings.html(secondary:outlet)?query=1&two=2#fragment';
      const urlTree = router.parseUrl(path);
      spyOn(driver, 'resolve').and.returnValue(of({
        url: '/some-resolved/path/with/file-endings.html',
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

      expect(router.config).toEqual([
        { path: '/some-resolved/path/with/file-endings.html', component: FakeComponent },
        { path: '**', redirectTo: '/' },
      ]);
    });

    it('should return a UrlTree to the newly configured route', () => {
      scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      const path = '/test';
      const urlTree = router.parseUrl(path);
      spyOn(driver, 'resolve').and.returnValue(of({
        url: path,
        type: STUB_RESOLVABLE_TYPE,
        id: 'id',
        code: 200,
      }));

      scheduler.run(helpers => {
        const { expectObservable } = helpers;
        const expected = '(a|)';

        expectObservable(
          guard.canActivate(
            <ActivatedRouteSnapshot>{ url: [{ path }]},
            <RouterStateSnapshot>{ url: path },
          ),
        ).toBe(expected, { a: urlTree });
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

  describe('when the resolution is a redirect', () => {
    it('should return a UrlTree to the redirect Uri if the resolved Url is a redirect', () => {
      scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      const requestedUrl = 'test';
      const resolvedUrl = 'some-path';
      const redirectTree = router.parseUrl(resolvedUrl);
      spyOn(driver, 'resolve').and.returnValue(of({
        url: resolvedUrl,
        type: STUB_RESOLVABLE_TYPE,
        id: 'id',
        code: 301,
      }));

      scheduler.run(helpers => {
        const { expectObservable } = helpers;
        const expected = '(a|)';

        expectObservable(
          guard.canActivate(
            <ActivatedRouteSnapshot>{ url: [{ path: requestedUrl }]},
            <RouterStateSnapshot>{ url: requestedUrl },
          ),
        ).toBe(expected, { a: redirectTree });
      });
    });

    it('should add the resolved route to configuration', () => {
      const requestedUrl = 'test?query-string=1#token';
      spyOn(driver, 'resolve').and.returnValue(of({
        url: 'some-path',
        type: STUB_RESOLVABLE_TYPE,
        id: 'id',
        code: 301,
      }));

      guard.canActivate(
        <ActivatedRouteSnapshot>{ url: [{ path: 'test' }]},
        <RouterStateSnapshot>{ url: requestedUrl },
      ).subscribe();

      expect(router.config).toEqual([
        { path: 'some-path', component: FakeComponent },
        { path: '**', redirectTo: '/' },
      ]);
    });

    /**
     * This test covers resolutions like:
     *
     * ```
     * state.url => test.html?query=1
     * resolvedURl => redirectedTo.html
     * ```
     * Subsequent resolutions for things like:
     * ```
     * state.url => test.html?query=2
     * resolvedURl => redirectedTo2.html
     * ```
     *
     * would result in incorrect resolutions, so we can't safely insert
     * them as Angular router redirects.
     */
    it(`should NOT add the original route as a redirect to resolved route as 
        @angular/router does not support matching based upon query params which
        some drivers may support`, () => {
      spyOn(driver, 'resolve').and.returnValue(of({
        url: 'some-path',
        type: STUB_RESOLVABLE_TYPE,
        id: 'id',
        code: 301,
      }));

      guard.canActivate(
        <ActivatedRouteSnapshot>{ url: [{ path: 'test' }]},
        <RouterStateSnapshot>{ url: 'test?query-string=1#token' },
      ).subscribe();

      expect(router.config).not.toContain(
        { path: 'test', redirectTo: 'some-path' },
      );
    });

    it('should provide the router with Angular-safe urls.', () => {
      spyOn(driver, 'resolve').and.returnValue(of({
        url: 'some-path.html',
        type: STUB_RESOLVABLE_TYPE,
        id: 'id',
        code: 301,
      }));

      guard.canActivate(
        <ActivatedRouteSnapshot>{ url: [{ path: 'test' }]},
        <RouterStateSnapshot>{ url: 'test?query-string=1#token' },
      ).subscribe();

      expect(router.config).toEqual([
        { path: 'some-path.html', component: FakeComponent },
        { path: '**', redirectTo: '/' },
      ]);
    });
  });

  describe('when the resolution is not-found', () => {
    it('should return a UrlTree to the failed resolution path', () => {
      scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      const redirectTree = router.parseUrl(stubNotFoundPath);
      spyOn(driver, 'resolve').and.returnValue(of({
        url: null,
        type: null,
        id: null,
        code: 404,
      }));

      scheduler.run(helpers => {
        const { expectObservable } = helpers;
        const expected = '(a|)';

        expectObservable(
          guard.canActivate(
            <ActivatedRouteSnapshot>{ url: [{ path: 'test' }]},
            <RouterStateSnapshot>{ url: 'test' },
          ),
        ).toBe(expected, { a: redirectTree });
      });
    });

    /**
     * This test covers resolutions like:
     *
     * ```
     * state.url => test.html?query=1
     * resolvedURl => redirectedTo.html
     * ```
     * Subsequent resolutions for things like:
     * ```
     * state.url => test.html?query=2
     * resolvedURl => redirectedTo2.html
     * ```
     *
     * would result in incorrect resolutions, so we can't safely insert
     * them as Angular router redirects.
     */
    it(`should NOT cache the original route as a redirect to the failed resolution path 
    as @angular/router does not support matching based upon query params`, () => {
      spyOn(driver, 'resolve').and.returnValue(of({
        url: null,
        type: null,
        id: null,
        code: 404,
      }));

      guard.canActivate(
     <ActivatedRouteSnapshot>{ url: [{ path: 'test' }]},
     <RouterStateSnapshot>{ url: 'test?query-string=1#token' },
      ).subscribe();

      expect(router.config).not.toContain(
        { path: 'test?query-string=1#token', redirectTo: stubNotFoundPath },
      );
    });
  });

  describe('when the resolution errors for an unknown reason', () => {
    it('should return a UrlTree to the configured failedResolutionPath', () => {
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
  });
});
