import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffStateError } from '@daffodil/core/state';
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

import { DaffPaypalExpressReducerState } from '../public_api';
import { getDaffPaypalSelectors } from './paypal.selector';

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
      const selector = store.pipe(select(selectPaypalState));
      const expected = cold('a', { a: expectedState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaypalExpressState', () => {
    it('selects the paypal express state', () => {
      const expectedState: DaffPaypalExpressReducerState = {
        startUrl: stubPaypalTokenResponse.urls.start,
        editUrl: stubPaypalTokenResponse.urls.edit,
      };
      const selector = store.pipe(select(selectPaypalExpressState));
      const expected = cold('a', { a: expectedState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaypalLoading', () => {

    it('returns the loading state for generating a paypal token nonce', () => {
      const selector = store.pipe(select(selectPaypalLoading));
      const expected = cold('a', { a: false });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaypalError', () => {

    it('returns any current errors', () => {
      const error: DaffStateError = { code: 'code', recoverable: false, message: 'error message' };
      store.dispatch(new DaffGeneratePaypalExpressTokenFailure(error));
      const selector = store.pipe(select(selectPaypalError));
      const expected = cold('a', { a: error });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaypalStartUrl', () => {

    it('returns the paypal start url', () => {
      const selector = store.pipe(select(selectPaypalStartUrl));
      const expected = cold('a', { a: stubPaypalTokenResponse.urls.start });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaypalEditUrl', () => {

    it('returns the paypal edit url', () => {
      const selector = store.pipe(select(selectPaypalEditUrl));
      const expected = cold('a', { a: stubPaypalTokenResponse.urls.edit });
      expect(selector).toBeObservable(expected);
    });
  });
});
