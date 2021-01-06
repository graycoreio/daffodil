import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffCheckoutDriver } from '@daffodil/checkout';
import { DaffOrderFactory, DaffCheckoutTestingDriverModule } from '@daffodil/checkout/testing';

import { OrderEffects } from './order.effects';
import { DaffPlaceOrder, DaffPlaceOrderSuccess, DaffPlaceOrderFailure } from '../actions/order.actions';
import { DaffCheckoutServiceInterface } from '../../drivers/interfaces/checkout-service.interface';
import { DaffOrder } from '../../models/order/order';

describe('Daffodil | State | Order | OrderEffects', () => {
  let actions$: Observable<any>;
  let effects: OrderEffects;
  let daffCheckoutDriver: DaffCheckoutServiceInterface;
  let stubOrder: DaffOrder;
  let orderFactory: DaffOrderFactory;
  let stubCart: DaffCart;
  let cartFactory: DaffCartFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCheckoutTestingDriverModule.forRoot()
      ],
      providers: [
        OrderEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.inject(OrderEffects);
    orderFactory = TestBed.inject(DaffOrderFactory);
    cartFactory = TestBed.inject(DaffCartFactory);
    daffCheckoutDriver = TestBed.inject<DaffCheckoutServiceInterface>(DaffCheckoutDriver);

    stubCart = cartFactory.create();
    stubOrder = orderFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when PlaceOrderAction is triggered', () => {
    let expected;

    describe('and the call to CartService is successful', () => {

      beforeEach(() => {
        spyOn(daffCheckoutDriver, 'placeOrder').and.returnValue(of(stubOrder));
        const placeOrderAction = new DaffPlaceOrder(stubCart);
        const placeOrderSuccessAction = new DaffPlaceOrderSuccess(stubOrder);
        actions$ = hot('--a', { a: placeOrderAction });
        expected = cold('--b', { b: placeOrderSuccessAction });
      });

      it('should dispatch a DaffPlaceOrderSuccess action', () => {
        expect(effects.onPlaceOrder$).toBeObservable(expected);
      });
    });

    describe('and the call to CartService fails', () => {

      beforeEach(() => {
        const error = 'Failed to place order';
        const response = cold('#', {}, error);
        spyOn(daffCheckoutDriver, 'placeOrder').and.returnValue(response);
        const placeOrderAction = new DaffPlaceOrder(stubCart);
        const placeOrderFailureAction = new DaffPlaceOrderFailure(error);
        actions$ = hot('--a', { a: placeOrderAction });
        expected = cold('--b', { b: placeOrderFailureAction });
      });

      it('should dispatch a DaffPlaceOrderFailure action', () => {
        expect(effects.onPlaceOrder$).toBeObservable(expected);
      });
    });
  });
});
