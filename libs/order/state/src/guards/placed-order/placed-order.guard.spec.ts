import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import {
  DaffOrder,
} from '@daffodil/order';
import {
  DaffOrderFacade,
  DaffOrderLoadSuccess,
  DAFF_ORDER_STORE_FEATURE_KEY,
  daffOrderReducers
} from '@daffodil/order/state';
import { DaffOrderFactory } from '@daffodil/order/testing';
import { daffCartReducers, DaffCartPlaceOrderSuccess } from '@daffodil/cart/state';

import { DaffPlacedOrderGuard } from './placed-order.guard';
import { DaffPlacedOrderGuardRedirectUrl } from './placed-order-guard-redirect.token';

describe('DaffPlacedOrderGuard', () => {
	let service: DaffPlacedOrderGuard;
	let store: Store<any>;
  let router: Router;

  let orderFactory: DaffOrderFactory;
  let mockOrder: DaffOrder;

  const stubUrl = 'url';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				DaffPlacedOrderGuard,
				DaffOrderFacade,
				{ provide: DaffPlacedOrderGuardRedirectUrl, useValue: stubUrl }
			],
			imports: [
        StoreModule.forRoot({
          [DAFF_ORDER_STORE_FEATURE_KEY]: combineReducers(daffOrderReducers),
          cart: combineReducers(daffCartReducers),
        }),
				RouterTestingModule
			]
    });

		service = TestBed.inject(DaffPlacedOrderGuard);
		store = TestBed.inject(Store);
    router = TestBed.inject(Router);

    orderFactory = TestBed.inject(DaffOrderFactory);
    mockOrder = orderFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
	});

	describe('canActivate', () => {
    describe('when there is a placed order', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPlaceOrderSuccess({orderId: mockOrder.id, cartId: 'cartId'}));
        store.dispatch(new DaffOrderLoadSuccess(mockOrder));
      });

      it('should allow activation when there is a placed order', () => {
        const expected = cold('a', { a: true })

        expect(service.canActivate()).toBeObservable(expected);
      });
    });

		describe('when there is no placed order', () => {
			beforeEach(() => {
				spyOn(router, 'navigateByUrl');
			});

			it('should not allow activation', () => {
				const expected = cold('a', { a: false })

				expect(service.canActivate()).toBeObservable(expected);
			});

			it('should redirect to the given DaffPlacedOrderGuardRedirectUrl', () => {
				service.canActivate().subscribe();
				expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
			});
		});
	});
});
