import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { daffAuthorizeNetReducers } from '../reducers/authorize-net.reducers';
import { DaffAuthorizeNetGenerateTokenSuccess, DaffAuthorizeNetGenerateTokenFailure } from '../actions/authorizenet.actions';
import { getDaffAuthorizeNetSelectors } from './authorize-net.selector';
import { DaffAuthorizeNetTokenResponse } from '../models/response/authorize-net-token-response';

describe('DaffAuthorizeNetSelectors', () => {

	let store: Store<DaffAuthorizeNetReducersState<DaffAuthorizeNetTokenResponse>>;
	const stubTokenNonce = 'tokenNonce';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          authorizenet: combineReducers(daffAuthorizeNetReducers)
        })
      ]
    });

    store = TestBed.get(Store);

		store.dispatch(new DaffAuthorizeNetGenerateTokenSuccess({ token: stubTokenNonce }));
  });

  describe('selectAuthorizeNetState', () => {
    
    it('selects DaffAuthorizeNetReducerState', () => {
      const expectedFeatureState = {
				tokenResponse: {
					token: stubTokenNonce
				},
				error: null
      }
      const selector = store.pipe(select(getDaffAuthorizeNetSelectors<DaffAuthorizeNetTokenResponse>().selectAuthorizeNetState));
      const expected = cold('a', { a: expectedFeatureState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectTokenResponse', () => {

    it('selects the token response state', () => {
			const tokenResponse = {
				token: stubTokenNonce
      }
      const selector = store.pipe(select(getDaffAuthorizeNetSelectors<DaffAuthorizeNetTokenResponse>().selectTokenResponse));
      const expected = cold('a', { a: tokenResponse });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectToken', () => {

    it('selects the token nonce state', () => {
      const selector = store.pipe(select(getDaffAuthorizeNetSelectors<DaffAuthorizeNetTokenResponse>().selectToken));
      const expected = cold('a', { a: stubTokenNonce });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectError', () => {

    it('selects the error message state', () => {
			store.dispatch(new DaffAuthorizeNetGenerateTokenFailure('error'));

      const selector = store.pipe(select(getDaffAuthorizeNetSelectors<DaffAuthorizeNetTokenResponse>().selectError));
      const expected = cold('a', { a: 'error' });
      expect(selector).toBeObservable(expected);
    });
  });
});
