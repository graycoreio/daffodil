import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import { DaffAuthorizeNetFacade } from './authorize-net.facade';
import { daffAuthorizeNetReducers } from '../reducers/authorize-net.reducers';
import { DaffAuthorizeNetGenerateTokenFailure, DaffAuthorizeNetGenerateTokenSuccess } from '../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenResponse } from '../models/response/authorize-net-token-response';

describe('DaffAuthorizeNetFacade', () => {
  let store: MockStore<any>;
  let facade: DaffAuthorizeNetFacade<DaffAuthorizeNetTokenResponse>;
	const stubAuthorizeTokenResponse = {
		token: 'authorizeToken'
	};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          authorizenet: combineReducers(daffAuthorizeNetReducers),
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
    const service: DaffAuthorizeNetFacade<DaffAuthorizeNetTokenResponse> = TestBed.get(DaffAuthorizeNetFacade);
    expect(service).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('authorizeTokenResponse$', () => {

    it('should return the payment nonce', () => {
      const expected = cold('a', { a: stubAuthorizeTokenResponse });
      store.dispatch(new DaffAuthorizeNetGenerateTokenSuccess(stubAuthorizeTokenResponse));
      expect(facade.authorizeTokenResponse$).toBeObservable(expected);
    });
  });

  describe('tokenNonce$', () => {

    it('should return the payment nonce', () => {
      const expected = cold('a', { a: stubAuthorizeTokenResponse.token });
      store.dispatch(new DaffAuthorizeNetGenerateTokenSuccess(stubAuthorizeTokenResponse));
      expect(facade.tokenNonce$).toBeObservable(expected);
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
