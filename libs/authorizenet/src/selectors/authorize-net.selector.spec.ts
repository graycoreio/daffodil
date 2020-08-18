import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { DaffCartPaymentMethodAdd } from '@daffodil/cart';

import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { daffAuthorizeNetReducers } from '../reducers/authorize-net.reducers';
import { DaffAuthorizeNetUpdatePaymentFailure, DaffLoadAcceptJsFailure } from '../actions/authorizenet.actions';
import { daffAuthorizeNetSelectors } from './authorize-net.selector';
import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from '../drivers/magento/authorize-net-payment-id';

describe('DaffAuthorizeNetSelectors', () => {

	let store: Store<DaffAuthorizeNetReducersState>;
	const {
		selectAuthorizeNetState,
		selectIsAcceptJsLoaded,
		selectLoading,
		selectPaymentError,
		selectAcceptJsLoadError
	} = daffAuthorizeNetSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          authorizenet: combineReducers(daffAuthorizeNetReducers)
        })
      ]
    });

    store = TestBed.get(Store);

		store.dispatch(new DaffCartPaymentMethodAdd({
			method: MAGENTO_AUTHORIZE_NET_PAYMENT_ID,
			payment_info: null
		}));
  });

  describe('selectAuthorizeNetState', () => {
    
    it('selects DaffAuthorizeNetReducerState', () => {
      const expectedFeatureState = {
				isAcceptLoaded: false,
				loading: false,
				paymentError: null,
				acceptJsLoadError: null
      }
      const selector = store.pipe(select(selectAuthorizeNetState));
      const expected = cold('a', { a: expectedFeatureState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsAcceptJsLoaded', () => {

    it('selects whether the acceptJs library has loaded', () => {
      const selector = store.pipe(select(selectIsAcceptJsLoaded));
      const expected = cold('a', { a: false });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectLoading', () => {

    it('selects the loading state', () => {
      const selector = store.pipe(select(selectLoading));
      const expected = cold('a', { a: false });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectError', () => {

    it('selects the error message state', () => {
			store.dispatch(new DaffAuthorizeNetUpdatePaymentFailure('error'));

      const selector = store.pipe(select(selectPaymentError));
      const expected = cold('a', { a: 'error' });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAcceptJsLoadError', () => {

    it('selects the error message state', () => {
			store.dispatch(new DaffLoadAcceptJsFailure('load error'));

      const selector = store.pipe(select(selectAcceptJsLoadError));
      const expected = cold('a', { a: 'load error' });
      expect(selector).toBeObservable(expected);
    });
  });
});
