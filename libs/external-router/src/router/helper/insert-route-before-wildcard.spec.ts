import { Route } from '@angular/router';
import { insertRouteBeforeWildCard } from './insert-route-before-wildcard';

describe('@daffodil/external-router | insertRouteBeforeWildCard', () => {
	
	it('should throw an exception on an empty array', () => {
		const newRoute: Route = { path: '' };

		expect(() => insertRouteBeforeWildCard(newRoute, [])).toThrow();
	});

	it('should throw an exception if there is no wildcard in the existing routes', () => {
		const newRoute: Route = { path: '' };
		const routes = [{ path: 'some-path' }];

		expect(() => insertRouteBeforeWildCard(newRoute, routes)).toThrow();
	});

	it('should insert a route before the wildcard', () => {
		const newRoute: Route = { path: '' };
		const routes = [{ path: '**' }];

		expect(insertRouteBeforeWildCard(newRoute, routes)).toEqual([
			{ path: '' },
			{ path: '**' },
		]);
	});

	it('should insert after other routes, but still before the wildcard', () => {
		const newRoute: Route = { path: '' };
		const routes = [{ path: 'some-path' }, { path: '**' }];

		expect(insertRouteBeforeWildCard(newRoute, routes)).toEqual([
			{ path: 'some-path' },
			{ path: '' },
			{ path: '**' },
		]);
	});

	it('should insert exactly before the wildcard', () => {
		const newRoute: Route = { path: '' };
		const routes = [{ path: '**' }, { path: 'some-path' }];

		expect(insertRouteBeforeWildCard(newRoute, routes)).toEqual([
			{ path: '' },
			{ path: '**' },
			{ path: 'some-path' },
		]);
	});
});
