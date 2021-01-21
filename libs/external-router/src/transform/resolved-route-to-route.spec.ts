import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { daffTransformResolvedRouteToRoute } from './resolved-route-to-route';

describe('@daffodil/external-router | daffTransformResolvedRouteToRoute', () => {
	let router: Router;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
		});

		router = TestBed.get(Router);
	});

	it('transforms a DaffResolvableRoute into an Angular route.', () => {
		expect(
			daffTransformResolvedRouteToRoute(
				{ url: 'some-url', type: 'some-type' },
				[{ type: 'some-type', route: { redirectTo: '/' } }],
			),
		).toEqual({
			path: 'some-url',
			redirectTo: '/',
		});
	});

	it('throws an error it is unable to map the route to a known type', () => {
		expect(() =>
			daffTransformResolvedRouteToRoute({ url: '', type: 'some-type' }, []),
		).toThrow();
	});
});
