import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { runMarbles } from '@daffodil/jasmine';
import { DaffPaypalExpressTokenResponse } from '@daffodil/paypal';
import {
  DaffPaypalStateRootSlice,
  DAFF_PAYPAL_STORE_FEATURE_KEY,
  daffPaypalReducers,
  DaffGeneratePaypalExpressTokenSuccess,
  DaffGeneratePaypalExpressTokenFailure,
  DaffPaypalReducerState,
} from '@daffodil/paypal/state';
import { DaffPaypalExpressTokenResponseFactory } from '@daffodil/paypal/testing';

import { getDaffPaypalSelectors } from './paypal.selector';
import { DaffPaypalExpressReducerState } from '../public_api';

describe('@daffodil/paypal/state | getDaffPaypalSelectors', () => {

  let store: Store<DaffPaypalStateRootSlice>;
  let paypalTokenResponseFactory: DaffPaypalExpressTokenResponseFactory;
  let stubPaypalTokenResponse: DaffPaypalExpressTokenResponse;
  const {
    selectPaypalState,
    selectPaypalExpressState,
    selectPaypalStartUrl,
    selectPaypalEditUrl,
    selectPaypalLoading,
    selectPaypalError,
  } = getDaffPaypalSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_PAYPAL_STORE_FEATURE_KEY]: combineReducers(daffPaypalReducers),
        }),
      ],
    });

    store = TestBed.inject(Store);
    paypalTokenResponseFactory = TestBed.inject(DaffPaypalExpressTokenResponseFactory);

    stubPaypalTokenResponse = paypalTokenResponseFactory.create();

    store.dispatch(new DaffGeneratePaypalExpressTokenSuccess(stubPaypalTokenResponse));
  });

  describe('selectPaypalState', () => {

    it('selects the paypal state', () => {
      const expectedState: DaffPaypalReducerState = {
        loading: false,
        error: null,
      };
      runMarbles(({ expectObservable }) => {
        const selector = store.pipe(select(selectPaypalState));
        expectObservable(selector).toBe('a', { a: expectedState });
      });
    });
  });

  describe('selectPaypalExpressState', () => {
    it('selects the paypal express state', () => {
      const expectedState: DaffPaypalExpressReducerState = {
        startUrl: stubPaypalTokenResponse.urls.start,
        editUrl: stubPaypalTokenResponse.urls.edit,
      };
      runMarbles(({ expectObservable }) => {
        const selector = store.pipe(select(selectPaypalExpressState));
        expectObservable(selector).toBe('a', { a: expectedState });
      });
    });
  });

  describe('selectPaypalLoading', () => {

    it('returns the loading state for generating a paypal token nonce', () => {
      runMarbles(({ expectObservable }) => {
        const selector = store.pipe(select(selectPaypalLoading));
        expectObservable(selector).toBe('a', { a: false });
      });
    });
  });

  describe('selectPaypalError', () => {

    it('returns any current errors', () => {
      const error: DaffStateError = { code: 'code', recoverable: false, message: 'error message' };
      runMarbles(({ expectObservable }) => {
        store.dispatch(new DaffGeneratePaypalExpressTokenFailure(error));
        const selector = store.pipe(select(selectPaypalError));
        expectObservable(selector).toBe('a', { a: error });
      });
    });
  });

  describe('selectPaypalStartUrl', () => {

    it('returns the paypal start url', () => {
      runMarbles(({ expectObservable }) => {
        const selector = store.pipe(select(selectPaypalStartUrl));
        expectObservable(selector).toBe('a', { a: stubPaypalTokenResponse.urls.start });
      });
    });
  });

  describe('selectPaypalEditUrl', () => {

    it('returns the paypal edit url', () => {
      runMarbles(({ expectObservable }) => {
        const selector = store.pipe(select(selectPaypalEditUrl));
        expectObservable(selector).toBe('a', { a: stubPaypalTokenResponse.urls.edit });
      });
    });
  });
});
