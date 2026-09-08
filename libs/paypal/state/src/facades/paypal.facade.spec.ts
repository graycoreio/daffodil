import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffPaypalExpressTokenRequest,
  DaffPaypalExpressTokenResponse,
} from '@daffodil/paypal';
import {
  DAFF_PAYPAL_STORE_FEATURE_KEY,
  daffPaypalReducers,
  DaffGeneratePaypalExpressTokenSuccess,
  DaffGeneratePaypalExpressToken,
  DaffGeneratePaypalExpressTokenFailure,
  DaffPaypalStateRootSlice,
} from '@daffodil/paypal/state';
import {
  DaffPaypalExpressTokenRequestFactory,
  DaffPaypalExpressTokenResponseFactory,
} from '@daffodil/paypal/testing';

import { DaffPaypalFacade } from './paypal.facade';

describe('DaffPaypalFacade', () => {
  let store: Store<DaffPaypalStateRootSlice>;
  let facade: DaffPaypalFacade;

  let paypalTokenResponseFactory: DaffPaypalExpressTokenResponseFactory;
  let paypalTokenRequestFactory: DaffPaypalExpressTokenRequestFactory;
  let stubPaypalTokenResponse: DaffPaypalExpressTokenResponse;
  let paypalRequest: DaffPaypalExpressTokenRequest;

  let scheduler: TestScheduler;

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

    paypalTokenResponseFactory = TestBed.inject(DaffPaypalExpressTokenResponseFactory);
    paypalTokenRequestFactory = TestBed.inject(DaffPaypalExpressTokenRequestFactory);
    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffPaypalFacade);

    stubPaypalTokenResponse = paypalTokenResponseFactory.create();
    paypalRequest = paypalTokenRequestFactory.create();

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('paypalStartUrl$', () => {

    it('should return the paypal start url', () => {
      scheduler.run(({ expectObservable }) => {
        store.dispatch(new DaffGeneratePaypalExpressTokenSuccess(stubPaypalTokenResponse));
        expectObservable(facade.paypalStartUrl$).toBe('a', { a: stubPaypalTokenResponse.urls.start });
      });
    });
  });

  describe('paypalEditUrl$', () => {

    it('should return the paypal edit url', () => {
      scheduler.run(({ expectObservable }) => {
        store.dispatch(new DaffGeneratePaypalExpressTokenSuccess(stubPaypalTokenResponse));
        expectObservable(facade.paypalEditUrl$).toBe('a', { a: stubPaypalTokenResponse.urls.edit });
      });
    });
  });

  describe('loading$', () => {
    it('should be false if the paypal state is not loading', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });

    it('should be true if the paypal state is loading', () => {
      scheduler.run(({ expectObservable }) => {
        store.dispatch(new DaffGeneratePaypalExpressToken(paypalRequest));
        expectObservable(facade.loading$).toBe('a', { a: true });
      });
    });
  });

  describe('error$', () => {

    it('should be an observable of an array of the current errors', () => {
      const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to retrieve token' };
      scheduler.run(({ expectObservable }) => {
        store.dispatch(new DaffGeneratePaypalExpressTokenFailure(error));
        expectObservable(facade.error$).toBe('a', { a: error });
      });
    });
  });
});
