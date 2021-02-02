import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffExternalRouterUnknownRouteTypeError } from '../errors/unknown-type';
import { daffTransformResolvedRouteToRoute } from './resolved-route-to-route';

describe('@daffodil/external-router | daffTransformResolvedRouteToRoute', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });

    router = TestBed.inject<Router>(Router);
  });

  it('transforms a DaffExternallyResolvableUrl into an Angular route.', () => {
    expect(
      daffTransformResolvedRouteToRoute(
        { url: 'some-url', type: 'some-type' },
        [{ type: 'some-type', route: { redirectTo: '/' }}],
      ),
    ).toEqual({
      path: 'some-url',
      redirectTo: '/',
    });
  });

  it('throws an error if it is unable to map the route to a known type', () => {
    expect(() =>
      daffTransformResolvedRouteToRoute({ url: '', type: 'some-type' }, []),
    ).toThrowError(DaffExternalRouterUnknownRouteTypeError);
  });
});
