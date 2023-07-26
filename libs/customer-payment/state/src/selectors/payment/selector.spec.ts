import { TestBed } from '@angular/core/testing';
import {
  Store,
  select,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCustomerPayment } from '@daffodil/customer-payment';
import {
  DaffCustomerPaymentLoadSuccess,
  daffCustomerPaymentReducer,
  DaffCustomerPaymentReducersState,
  DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY,
  DaffCustomerPaymentStateRootSlice,
  daffCustomerPaymentEntitiesReducer,
} from '@daffodil/customer-payment/state';
import { DaffCustomerPaymentFactory } from '@daffodil/customer-payment/testing';

import { daffCustomerPaymentGetSelectors } from './selector';

describe('@daffodil/payment/state | daffCustomerPaymentGetSelectors', () => {
  let store: Store<DaffCustomerPaymentStateRootSlice>;
  let paymentFactory: DaffCustomerPaymentFactory;

  let mockCustomerPayment: DaffCustomerPayment;
  let loading: boolean;
  let errors: string[];

  const {
    selectPayment,
    selectPayments,
  } = daffCustomerPaymentGetSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY]: combineReducers<DaffCustomerPaymentReducersState>({
            payment: daffCustomerPaymentReducer,
            paymentEntities: daffCustomerPaymentEntitiesReducer,
          }),
        }),
      ],
    });

    store = TestBed.inject(Store);
    paymentFactory = TestBed.inject(DaffCustomerPaymentFactory);

    mockCustomerPayment = paymentFactory.create();
    loading = false;
    errors = [];
  });

  describe('selectPayment', () => {
    describe('before the payment is loaded', () => {
      it('should return nully', () => {
        const selector = store.pipe(select(selectPayment(mockCustomerPayment.id)));
        const expected = cold('a', { a: jasmine.falsy() });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('after the payment is loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCustomerPaymentLoadSuccess(mockCustomerPayment));
      });

      it('should select the payment', () => {
        const selector = store.pipe(select(selectPayment(mockCustomerPayment.id)));
        const expected = cold('a', { a: jasmine.objectContaining(mockCustomerPayment) });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectPayments', () => {
    describe('before the payment is loaded', () => {
      it('should return an empty array', () => {
        const selector = store.pipe(select(selectPayments));
        const expected = cold('a', { a: []});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('after the payment is loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCustomerPaymentLoadSuccess(mockCustomerPayment));
      });

      it('should select the payments', () => {
        const selector = store.pipe(select(selectPayments));
        const expected = cold('a', { a: [jasmine.objectContaining(mockCustomerPayment)]});

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
