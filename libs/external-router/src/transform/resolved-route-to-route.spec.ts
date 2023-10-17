import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { daffTransformResolvedRouteToRoute } from './resolved-route-to-route';
import { DaffExternalRouterUnknownRouteTypeError } from '../errors/unknown-type';

describe('@daffodil/external-router | daffTransformResolvedRouteToRoute', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });

    router = TestBed.inject<Router>(Router);
  });

  it('transforms a DaffExternallyResolvableUrl into an Angular route.', () => {
    const insertionStrategy = () => [];
    expect(
      daffTransformResolvedRouteToRoute(
        { url: 'some-url', type: 'some-type', id: 'id', code: 200 },
        [{ type: 'some-type', route: { redirectTo: '/' }, insertionStrategy }],
      ),
    ).toEqual({
      route: {
        path: 'some-url',
        daffExternalRouteType: 'some-type',
        redirectTo: '/',
        data: {},
      },
      insertionStrategy,
    });
  });

  it('throws an error if it is unable to map the route to a known type', () => {
    expect(() =>
      daffTransformResolvedRouteToRoute({ url: '', type: 'some-type', id: 'id', code: 200 }, []),
    ).toThrowError(DaffExternalRouterUnknownRouteTypeError);
  });
});
