import { TestBed } from '@angular/core/testing';
import {
  Router,
  Routes,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffExternalRouterNoWildcardError } from '../errors/no-wildcard';
import { DaffExternalRouterUnknownRouteTypeError } from '../errors/unknown-type';
import { DaffExternallyResolvableUrl } from '../model/resolvable-route';
import { TypeRoutePair } from '../model/type-route-pair';
import { DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE } from '../token/type-resolvable-routes.token';
import { DaffExternalRouter } from './router.service';

describe('@daffodil/external-router | DaffExternalRouter', () => {
  let service: DaffExternalRouter;
  let router: Router;

  const setupTest = (types: TypeRoutePair[] = [], config: Routes = []) => {
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

  it('should add a route to configuration from known type of resolvable route when configured correctly', () => {
    setupTest(
      [{ type: 'type-a', route: { redirectTo: '/' }}],
      [{ path: '**', redirectTo: 'somewhere-else' }],
    );

    service.add({ url: 'some-path', type: 'type-a' });
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
    expect(() => service.add({ url: 'some-path', type: 'type-a' })).toThrow();
    expect(router.config).toEqual([]);
  });

  it('should throw an error if a route is added that doesnt match a known type', () => {
    setupTest(
      [{ type: 'type-a', route: { redirectTo: '/' }}],
      [{ path: '**', redirectTo: 'somewhere-else' }],
    );

    expect(() =>
      service.add({ url: 'some-path', type: 'type-b' }),
    ).toThrowError(DaffExternalRouterUnknownRouteTypeError);
    expect(router.config).toEqual([
      { path: '**', redirectTo: 'somewhere-else' },
    ]);
  });

  it('should throw a more specific error if there is no wildcard route in the router configuration', () => {
    setupTest([{ type: 'type-a', route: { redirectTo: '/' }}], []);

    expect(() =>
      service.add({ url: 'some-path', type: 'type-a' }),
    ).toThrowError(DaffExternalRouterNoWildcardError, /misconfigured/);
    expect(router.config).toEqual([]);
  });
});
