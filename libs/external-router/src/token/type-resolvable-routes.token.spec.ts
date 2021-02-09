import { TestBed } from '@angular/core/testing';
import { TypeRoutePair } from '../model/type-route-pair';
import {
	DAFF_EXTERNAL_ROUTER_TYPE_RESOLVABLE_ROUTES,
	provideRouteResolvableByType,
} from './type-resolvable-routes.token';

describe('@daffodil/external-router | DAFF_EXTERNAL_ROUTER_TYPE_RESOLVABLE_ROUTES', () => {
	let token: TypeRoutePair[];

	it('should be an empty array by default', () => {
		TestBed.configureTestingModule({});
		token = TestBed.get(DAFF_EXTERNAL_ROUTER_TYPE_RESOLVABLE_ROUTES);
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

		token = TestBed.get(DAFF_EXTERNAL_ROUTER_TYPE_RESOLVABLE_ROUTES);
		expect(token).toEqual([
			{
				type: 'some-type',
				route: {
					redirectTo: 'somewhere',
				},
			},
		]);
	});

	it('allow you to provide many resolvable routes for a type', () => {
		TestBed.configureTestingModule({
			providers: [
				provideRouteResolvableByType('some-type', {
					redirectTo: 'somewhere',
				}),
			],
		});

		token = TestBed.get(DAFF_EXTERNAL_ROUTER_TYPE_RESOLVABLE_ROUTES);
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
