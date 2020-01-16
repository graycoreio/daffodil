import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { authorizeNetReducers } from '../reducers/authorize-net.reducers';
import { DaffAuthorizeNetGenerateTokenSuccess, DaffAuthorizeNetGenerateTokenFailure } from '../actions/authorizenet.actions';
import { selectAuthorizeNetState, selectPaymentNonce, selectPaymentNonceRequestError } from './authorize-net.selector';

describe('DaffAuthorizeNetSelectors', () => {

	let store: Store<DaffAuthorizeNetReducersState>;
	const stubPaymentNonce = 'paymentNonce';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          authorizenet: combineReducers(authorizeNetReducers)
        })
      ]
    });

    store = TestBed.get(Store);

		store.dispatch(new DaffAuthorizeNetGenerateTokenSuccess(stubPaymentNonce));
  });

  describe('selectAuthorizeNetState', () => {
    
    it('selects DaffAuthorizeNetReducerState', () => {
      const expectedFeatureState = {
				paymentNonce: stubPaymentNonce,
				error: null
      }
      const selector = store.pipe(select(selectAuthorizeNetState));
      const expected = cold('a', { a: expectedFeatureState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaymentNonce', () => {

    it('selects the payment nonce state', () => {
      const selector = store.pipe(select(selectPaymentNonce));
      const expected = cold('a', { a: stubPaymentNonce });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaymentNonceRequestError', () => {

    it('selects the error state', () => {
			store.dispatch(new DaffAuthorizeNetGenerateTokenFailure('error'));

      const selector = store.pipe(select(selectPaymentNonceRequestError));
      const expected = cold('a', { a: 'error' });
      expect(selector).toBeObservable(expected);
    });
  });
});
