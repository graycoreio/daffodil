import { TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffPaymentFactory } from '@daffodil/checkout/testing';

import { DaffPaymentFacade } from './payment.facade';
import { PaymentInfo } from '../../models/payment/payment-info';
import { daffPaymentReducers } from '../reducers/payment-reducers';
import { DaffUpdatePaymentInfo } from '../actions/payment.actions';

describe('DaffPaymentFacade', () => {
  let store: MockStore<any>;
  let facade: DaffPaymentFacade;
  const paymentFactory: DaffPaymentFactory = new DaffPaymentFactory();
  let stubPayment: PaymentInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          payment: combineReducers(daffPaymentReducers)
        })
      ],
      providers: [
        DaffPaymentFacade,
      ]
    })
    
    stubPayment = paymentFactory.create();
    store = TestBed.get(Store);
    facade = TestBed.get(DaffPaymentFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = {type: 'SOME_TYPE'};

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('paymentInfo$', () => {
    it('should return the payment information', () => {
      const expected = cold('a', { a: stubPayment });
      store.dispatch(new DaffUpdatePaymentInfo(stubPayment));
      expect(facade.paymentInfo$).toBeObservable(expected);
    });
  });
});
