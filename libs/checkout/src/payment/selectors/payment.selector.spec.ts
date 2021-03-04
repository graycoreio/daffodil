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

import { DaffPaymentFactory } from '../../../testing/src';
import { PaymentInfo } from '../../models/payment/payment-info';
import { DaffUpdatePaymentInfo } from '../actions/payment.actions';
import { daffPaymentReducers } from '../reducers/payment-reducers';
import { DaffPaymentReducersState } from '../reducers/payment-reducers.interface';
import {
  selectPaymentState,
  selectPaymentInfo,
} from './payment.selector';

describe('selectPaymentState', () => {

  let store: Store<DaffPaymentReducersState>;
  const paymentFactory: DaffPaymentFactory = new DaffPaymentFactory();
  let stubPaymentInfo: PaymentInfo;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          payment: combineReducers(daffPaymentReducers),
        }),
      ],
    });

    stubPaymentInfo = paymentFactory.create();
    store = TestBed.inject(Store);
    store.dispatch(new DaffUpdatePaymentInfo(stubPaymentInfo));
  }));

  describe('selectPaymentState', () => {

    it('selects payment state', () => {
      const expectedPaymentState = {
        paymentInfo: stubPaymentInfo,
      };
      const selector = store.pipe(select(selectPaymentState));
      const expected = cold('a', { a: expectedPaymentState });
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
