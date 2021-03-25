import { TestBed } from '@angular/core/testing';
import {
  Router,
  Routes,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import {
  DaffExternalRouterInsertionStrategy,
  DaffExternallyResolvableUrl,
  DaffExternalRouterUnknownRouteTypeError,
  DaffExternalRouterNoWildcardError,
} from '@daffodil/external-router';

import { DaffTypeRoutePair } from '../model/type-route-pair';
import { DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE } from '../token/type-resolvable-routes.token';
import { DaffExternalRouter } from './router.service';

describe('@daffodil/external-router | DaffExternalRouter', () => {
  let service: DaffExternalRouter;
  let router: Router;

  const setupTest = (types: DaffTypeRoutePair[] = [], config: Routes = []) => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(config)],
    });

    TestBed.overrideProvider(DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE, {
      useValue: types,
    });
    service = TestBed.inject<DaffExternalRouter>(DaffExternalRouter);
    router = TestBed.inject<Router>(Router);
  };

  it('should be created', () => {
    setupTest();
    expect(service).toBeTruthy();
  });

  describe('when there is a specified route insertion strategy', () => {
    let insertionStrategy: jasmine.Spy<DaffExternalRouterInsertionStrategy>;
    let routes: Routes;
    let redirectionPath: string;

    beforeEach(() => {
      routes = [{ path: '**', redirectTo: 'somewhere-else' }];
      redirectionPath = '/';
      insertionStrategy = jasmine.createSpy();
      insertionStrategy.and.returnValue([]);
      setupTest(
        [
          { type: 'type-a', route: { redirectTo: redirectionPath }, insertionStrategy },
          { type: 'type-b', route: { redirectTo: redirectionPath }},
        ],
        routes,
      );
    });

    describe('and the router is invoked with the specified route type', () => {
      let path: string;
      beforeEach(() => {
        path = 'some-path';
        service.add({ url: path, type: 'type-a', id: 'id' });
      });

      it('should invoke the specified insertion strategy', () => {
        expect(insertionStrategy).toHaveBeenCalledWith(
          jasmine.objectContaining({
            redirectTo: redirectionPath,
            path,
          }),
          routes,
        );
      });
    });
  });

  it('should add a route to configuration from known type of resolvable route when configured correctly', () => {
    setupTest(
      [{ type: 'type-a', route: { redirectTo: '/' }}],
      [{ path: '**', redirectTo: 'somewhere-else' }],
    );

    service.add({ url: 'some-path', type: 'type-a', id: 'id' });
    expect(router.config).toEqual([
      { path: 'some-path', redirectTo: '/' },
      { path: '**', redirectTo: 'somewhere-else' },
    ]);
  });

  it('should throw if an uncaught error occurs', () => {
    expect(() => service.add(<DaffExternallyResolvableUrl>undefined)).toThrow();
  });

  it('should not add a route if it does not match a known type', () => {
    setupTest([], []);
    expect(() => service.add({ url: 'some-path', type: 'type-a', id: 'id' })).toThrow();
    expect(router.config).toEqual([]);
  });

  it('should throw an error if a route is added that doesnt match a known type', () => {
    setupTest(
      [{ type: 'type-a', route: { redirectTo: '/' }}],
      [{ path: '**', redirectTo: 'somewhere-else' }],
    );

    expect(() =>
      service.add({ url: 'some-path', type: 'type-b', id: 'id' }),
    ).toThrowError(DaffExternalRouterUnknownRouteTypeError);
    expect(router.config).toEqual([
      { path: '**', redirectTo: 'somewhere-else' },
    ]);
  });

  it('should throw a more specific error if there is no wildcard route in the router configuration', () => {
    setupTest([{ type: 'type-a', route: { redirectTo: '/' }}], []);

    expect(() =>
      service.add({ url: 'some-path', type: 'type-a', id: 'id' }),
    ).toThrowError(DaffExternalRouterNoWildcardError, /misconfigured/);
    expect(router.config).toEqual([]);
  });
});
