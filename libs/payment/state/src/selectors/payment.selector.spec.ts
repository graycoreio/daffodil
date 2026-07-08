import { TestBed } from '@angular/core/testing';
import {
  Store,
  select,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { DaffPaymentStateRootSlice } from '@daffodil/payment/state';

import { daffPaymentGetSelectors } from './payment.selector';
import {
  daffPaymentReducerFactory,
  DaffPaymentReducersState,
  DAFF_PAYMENT_STORE_FEATURE_KEY,
} from '../public_api';

describe('@daffodil/payment/state | daffPaymentGetSelectors', () => {
  let store: Store<DaffPaymentStateRootSlice>;

  let loading: boolean;
  let errors: string[];

  let scheduler: TestScheduler;

  const {
    selectPaymentLoading,
    selectPaymentErrors,
  } = daffPaymentGetSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_PAYMENT_STORE_FEATURE_KEY]: combineReducers<DaffPaymentReducersState>({
            payment: daffPaymentReducerFactory([]),
          }),
        }),
      ],
    });

    store = TestBed.inject(Store);

    loading = false;
    errors = [];

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('selectPaymentLoading', () => {
    it('should select the loading property of the payment state', () => {
      const selector = store.pipe(select(selectPaymentLoading));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: loading });
      });
    });
  });

  describe('selectPaymentErrors', () => {
    it('should select the error property of the payment state', () => {
      const selector = store.pipe(select(selectPaymentErrors));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: errors });
      });
    });
  });
});
