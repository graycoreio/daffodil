import { TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';
import { DaffPaymentFactory } from '@daffodil/checkout/testing';

import { DaffBillingFacade } from './billing.facade';
import { PaymentInfo } from '../../models/payment/payment-info';
import { daffBillingReducers } from '../reducers/billing-reducers';
import { DaffUpdateBillingAddress, DaffToggleBillingAddressIsShippingAddress, DaffUpdatePaymentInfo } from '../actions/billing.actions';

describe('DaffBillingFacade', () => {
  let store: MockStore<any>;
  let facade: DaffBillingFacade;
  let stubBillingAddress: DaffAddress;
  let stubBillingAddressIsShippingAddress: boolean;
  let stubPaymentInfo: PaymentInfo;
  const addressFactory: DaffAddressFactory = new DaffAddressFactory();
  const paymentFactory: DaffPaymentFactory = new DaffPaymentFactory();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          billing: combineReducers(daffBillingReducers)
        })
      ],
      providers: [
        DaffBillingFacade,
      ]
    })
    
    stubBillingAddress = addressFactory.create();
    stubBillingAddressIsShippingAddress = false;
    stubPaymentInfo = paymentFactory.create();
    store = TestBed.get(Store);
    facade = TestBed.get(DaffBillingFacade);
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

  describe('billingAddress$', () => {
  
    it('should return the billing address', () => {
      const expected = cold('a', { a: stubBillingAddress });
      store.dispatch(new DaffUpdateBillingAddress(stubBillingAddress));
      expect(facade.billingAddress$).toBeObservable(expected);
    });
  });

  describe('billingAddressIsShippingAddress$', () => {
  
    it('should return whether the billing address is the same as the shipping address', () => {
      const expected = cold('a', { a: !stubBillingAddressIsShippingAddress });
      store.dispatch(new DaffToggleBillingAddressIsShippingAddress());
      expect(facade.billingAddressIsShippingAddress$).toBeObservable(expected);
    });
  });

  describe('paymentInfo$', () => {
  
    it('should return the payment info', () => {
      const expected = cold('a', { a: stubPaymentInfo });
      store.dispatch(new DaffUpdatePaymentInfo(stubPaymentInfo));
      expect(facade.paymentInfo$).toBeObservable(expected);
    });
  });
});
