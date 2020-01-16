import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import { DaffAuthorizeNetGenerateTokenSuccess } from '@daffodil/authorizenet';

import { DaffAuthorizeNetFacade } from './authorize-net.facade';
import { authorizeNetReducers } from '../reducers/authorize-net.reducers';
import { DaffAuthorizeNetGenerateTokenFailure } from '../actions/authorizenet.actions';

describe('DaffAuthorizeNetFacade', () => {
  let store: MockStore<any>;
  let facade: DaffAuthorizeNetFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          authorizenet: combineReducers(authorizeNetReducers),
        })
      ],
      providers: [
        DaffAuthorizeNetFacade
      ]
    })

    store = TestBed.get(Store);
    facade = TestBed.get(DaffAuthorizeNetFacade);
  });

  it('should be created', () => {
    const service: DaffAuthorizeNetFacade = TestBed.get(DaffAuthorizeNetFacade);
    expect(service).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('paymentNonce$', () => {

    it('should return the payment nonce', () => {
			const stubPaymentNonce = 'paymentNonce';
      const expected = cold('a', { a: stubPaymentNonce });
      store.dispatch(new DaffAuthorizeNetGenerateTokenSuccess(stubPaymentNonce));
      expect(facade.paymentNonce$).toBeObservable(expected);
    });
  });

  describe('error$', () => {

    it('should return the current error message', () => {
      const stubError = 'error message';
      const expected = cold('a', { a: stubError});
      store.dispatch(new DaffAuthorizeNetGenerateTokenFailure(stubError));
      expect(facade.error$).toBeObservable(expected);
    });
  })
});
