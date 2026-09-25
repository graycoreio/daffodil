import { TestBed } from '@angular/core/testing';
import {
  Store,
  select,
  StoreModule,
  combineReducers,
} from '@ngrx/store';

import { runMarbles } from '@daffodil/jasmine';
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

      runMarbles(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: loading });
      });
    });
  });

  describe('selectPaymentErrors', () => {
    it('should select the error property of the payment state', () => {
      const selector = store.pipe(select(selectPaymentErrors));

      runMarbles(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: errors });
      });
    });
  });
});
