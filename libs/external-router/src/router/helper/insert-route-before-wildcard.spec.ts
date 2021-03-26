import { Route } from '@angular/router';

import { DaffExternalRouterNoWildcardError } from '../../errors/no-wildcard';
import { daffInsertRouteBeforeWildCardStrategy } from './insert-route-before-wildcard';

describe('@daffodil/external-router | daffInsertRouteBeforeWildCardStrategy', () => {

  it('should throw an exception on an empty array', () => {
    const newRoute: Route = { path: '' };

    expect(() => daffInsertRouteBeforeWildCardStrategy(newRoute, [])).toThrowError(DaffExternalRouterNoWildcardError);
  });

  it('should throw an exception if there is no wildcard in the existing routes', () => {
    const newRoute: Route = { path: '' };
    const routes = [{ path: 'some-path' }];

    expect(() => daffInsertRouteBeforeWildCardStrategy(newRoute, routes)).toThrowError(DaffExternalRouterNoWildcardError);
  });

  it('should insert a route before the wildcard', () => {
    const newRoute: Route = { path: '' };
    const routes = [{ path: '**' }];

    expect(daffInsertRouteBeforeWildCardStrategy(newRoute, routes)).toEqual([
      { path: '' },
      { path: '**' },
    ]);
  });

  it('should insert after other routes, but still before the wildcard', () => {
    const newRoute: Route = { path: '' };
    const routes = [{ path: 'some-path' }, { path: '**' }];

    expect(daffInsertRouteBeforeWildCardStrategy(newRoute, routes)).toEqual([
      { path: 'some-path' },
      { path: '' },
      { path: '**' },
    ]);
  });

  it('should insert exactly before the wildcard', () => {
    const newRoute: Route = { path: '' };
    const routes = [{ path: '**' }, { path: 'some-path' }];

    expect(daffInsertRouteBeforeWildCardStrategy(newRoute, routes)).toEqual([
      { path: '' },
      { path: '**' },
      { path: 'some-path' },
    ]);
  });
});
