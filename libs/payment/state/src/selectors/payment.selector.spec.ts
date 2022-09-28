import { TestBed } from '@angular/core/testing';
import {
  Store,
  select,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffPaymentStateRootSlice } from '@daffodil/payment/state';

import {
  daffPaymentReducerFactory,
  DaffPaymentReducersState,
  DAFF_PAYMENT_STORE_FEATURE_KEY,
} from '../public_api';
import { daffPaymentGetSelectors } from './payment.selector';

describe('@daffodil/payment/state | daffPaymentGetSelectors', () => {
  let store: Store<DaffPaymentStateRootSlice>;

  let loading: boolean;
  let errors: string[];

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
  });

  describe('selectPaymentLoading', () => {
    it('should select the loading property of the payment state', () => {
      const selector = store.pipe(select(selectPaymentLoading));
      const expected = cold('a', { a: loading });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaymentErrors', () => {
    it('should select the error property of the payment state', () => {
      const selector = store.pipe(select(selectPaymentErrors));
      const expected = cold('a', { a: errors });

      expect(selector).toBeObservable(expected);
    });
  });
});
