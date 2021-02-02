import { TestBed } from '@angular/core/testing';

import { TypeRoutePair } from '../model/type-route-pair';
import {
  DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE,
  provideRouteResolvableByType,
} from './type-resolvable-routes.token';

describe('@daffodil/external-router | DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE', () => {
  let token: TypeRoutePair[];

  it('should be an empty array by default', () => {
    TestBed.configureTestingModule({});
    token = TestBed.inject<TypeRoutePair[]>(DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE);
    expect(token).toEqual([]);
  });

  it('allow you to provide a resolvable route type', () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouteResolvableByType('some-type', {
          redirectTo: 'somewhere',
        }),
      ],
    });

    token = TestBed.inject<TypeRoutePair[]>(DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE);
    expect(token).toEqual([
      {
        type: 'some-type',
        route: {
          redirectTo: 'somewhere',
        },
      },
    ]);
  });
});
