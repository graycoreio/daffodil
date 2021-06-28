import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffStateError } from '@daffodil/core/state';
import { DaffPaypalTokenResponse } from '@daffodil/paypal';
import {
  DAFF_PAYPAL_STORE_FEATURE_KEY,
  daffPaypalReducers,
  DaffGeneratePaypalExpressTokenSuccess,
  DaffGeneratePaypalExpressToken,
  DaffGeneratePaypalExpressTokenFailure,
  DaffPaypalStateRootSlice,
} from '@daffodil/paypal/state';
import { DaffPaypalTokenResponseFactory } from '@daffodil/paypal/testing';

import { DaffPaypalFacade } from './paypal.facade';

describe('DaffPaypalFacade', () => {
  let store: Store<DaffPaypalStateRootSlice>;
  let facade: DaffPaypalFacade;
  const paypalTokenResponseFactory: DaffPaypalTokenResponseFactory = new DaffPaypalTokenResponseFactory();
  let stubPaypalTokenResponse: DaffPaypalTokenResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_PAYPAL_STORE_FEATURE_KEY]: combineReducers(daffPaypalReducers),
        }),
      ],
      providers: [
        DaffPaypalFacade,
      ],
    });

    stubPaypalTokenResponse = paypalTokenResponseFactory.create();
    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffPaypalFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('paypalTokenResponse$', () => {

    it('should return the paypalTokenResponse', () => {
      const expected = cold('a', { a: stubPaypalTokenResponse });
      store.dispatch(new DaffGeneratePaypalExpressTokenSuccess(stubPaypalTokenResponse));
      expect(facade.paypalTokenResponse$).toBeObservable(expected);
    });
  });

  describe('paypalToken$', () => {

    it('should return the paypalToken', () => {
      const expected = cold('a', { a: stubPaypalTokenResponse.token });
      store.dispatch(new DaffGeneratePaypalExpressTokenSuccess(stubPaypalTokenResponse));
      expect(facade.paypalToken$).toBeObservable(expected);
    });
  });

  describe('paypalStartUrl$', () => {

    it('should return the paypal start url', () => {
      const expected = cold('a', { a: stubPaypalTokenResponse.urls.start });
      store.dispatch(new DaffGeneratePaypalExpressTokenSuccess(stubPaypalTokenResponse));
      expect(facade.paypalStartUrl$).toBeObservable(expected);
    });
  });

  describe('paypalEditUrl$', () => {

    it('should return the paypal edit url', () => {
      const expected = cold('a', { a: stubPaypalTokenResponse.urls.edit });
      store.dispatch(new DaffGeneratePaypalExpressTokenSuccess(stubPaypalTokenResponse));
      expect(facade.paypalEditUrl$).toBeObservable(expected);
    });
  });

  describe('loading$', () => {
    it('should be false if the paypal state is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the paypal state is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffGeneratePaypalExpressToken({ cartId: '1' }));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('error$', () => {

    it('should be an observable of an array of the current errors', () => {
      const error: DaffStateError = { code: 'code', message: 'Failed to retrieve token' };
      const expected = cold('a', { a: error });
      store.dispatch(new DaffGeneratePaypalExpressTokenFailure(error));
      expect(facade.error$).toBeObservable(expected);
    });
  });
});
