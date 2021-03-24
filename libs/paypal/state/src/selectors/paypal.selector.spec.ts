import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffStateError } from '@daffodil/core/state';
import { DaffPaypalTokenResponse } from '@daffodil/paypal';
import {
  DaffPaypalReducersState,
  DAFF_PAYPAL_STORE_FEATURE_KEY,
  daffPaypalReducers,
  DaffGeneratePaypalExpressTokenSuccess,
  DaffGeneratePaypalExpressTokenFailure,
} from '@daffodil/paypal/state';
import { DaffPaypalTokenResponseFactory } from '@daffodil/paypal/testing';

import { getDaffPaypalSelectors } from './paypal.selector';

describe('Daff Paypal Selectors', () => {

  let store: Store<DaffPaypalReducersState>;
  const navigationTreeFactory: DaffPaypalTokenResponseFactory = new DaffPaypalTokenResponseFactory();
  let stubPaypalTokenResponse: DaffPaypalTokenResponse;
  const {
    selectPaypalState,
    selectPaypalTokenResponse,
    selectPaypalToken,
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

    stubPaypalTokenResponse = navigationTreeFactory.create();
    store = TestBed.inject(Store);

    store.dispatch(new DaffGeneratePaypalExpressTokenSuccess(stubPaypalTokenResponse));
  });

  describe('selectPaypalState', () => {

    it('selects the paypal state', () => {
      const expectedState = {
        paypalTokenResponse: stubPaypalTokenResponse,
        loading: false,
        error: null,
      };
      const selector = store.pipe(select(selectPaypalState));
      const expected = cold('a', { a: expectedState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaypalTokenResponse', () => {

    it('returns the paypal token response', () => {
      const selector = store.pipe(select(selectPaypalTokenResponse));
      const expected = cold('a', { a: stubPaypalTokenResponse });
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
      const error: DaffStateError = { code: 'code', message: 'error message' };
      store.dispatch(new DaffGeneratePaypalExpressTokenFailure(error));
      const selector = store.pipe(select(selectPaypalError));
      const expected = cold('a', { a: error });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaypalToken', () => {

    it('returns the paypal token nonce', () => {
      const selector = store.pipe(select(selectPaypalToken));
      const expected = cold('a', { a: stubPaypalTokenResponse.token });
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
