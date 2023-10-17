import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffPaymentFactory } from '@daffodil/checkout/testing';
import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';

import {
  selectBillingState,
  selectBillingAddress,
  selectBillingAddressIsShippingAddress,
  selectPaymentInfo,
} from './billing.selector';
import { PaymentInfo } from '../../models/payment/payment-info';
import {
  DaffUpdateBillingAddress,
  DaffUpdatePaymentInfo,
} from '../actions/billing.actions';
import { daffBillingReducers } from '../reducers/billing-reducers';
import { DaffBillingReducersState } from '../reducers/billing-reducers.interface';

describe('selectBillingFeatureState', () => {

  let store: Store<DaffBillingReducersState>;
  const addressFactory: DaffAddressFactory = new DaffAddressFactory();
  let stubBillingAddress: DaffAddress;

  const paymentFactory: DaffPaymentFactory = new DaffPaymentFactory();
  let stubPaymentInfo: PaymentInfo;

  let stubBillingAddressIsShippingAddress: boolean;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          billing: combineReducers(daffBillingReducers),
        }),
      ],
    });

    stubPaymentInfo = paymentFactory.create();
    stubBillingAddress = addressFactory.create();
    stubBillingAddressIsShippingAddress = false;
    store = TestBed.inject(Store);
    store.dispatch(new DaffUpdateBillingAddress(stubBillingAddress));
    store.dispatch(new DaffUpdatePaymentInfo(stubPaymentInfo));
  }));

  describe('selectBillingState', () => {

    it('selects billing state', () => {
      const expectedBillingState = {
        billingAddress: stubBillingAddress,
        billingAddressIsShippingAddress: stubBillingAddressIsShippingAddress,
        paymentInfo: stubPaymentInfo,
      };

      const selector = store.pipe(select(selectBillingState));
      const expected = cold('a', { a: expectedBillingState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectBillingAddress', () => {

    it('selects billingAddress state', () => {
      const selector = store.pipe(select(selectBillingAddress));
      const expected = cold('a', { a: stubBillingAddress });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectBillingAddressIsShippingAddress', () => {

    it('selects billingAddressIsShippingAddress state', () => {
      const selector = store.pipe(select(selectBillingAddressIsShippingAddress));
      const expected = cold('a', { a: stubBillingAddressIsShippingAddress });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaymentInfo', () => {

    it('selects paymentInfo state', () => {
      const selector = store.pipe(select(selectPaymentInfo));
      const expected = cold('a', { a: stubPaymentInfo });
      expect(selector).toBeObservable(expected);
    });
  });
});
