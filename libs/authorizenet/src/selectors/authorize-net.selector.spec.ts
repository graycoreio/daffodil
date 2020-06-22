import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { DaffCartPaymentMethodAdd } from '@daffodil/cart';

import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { daffAuthorizeNetReducers } from '../reducers/authorize-net.reducers';
import { DaffAuthorizeNetGenerateTokenFailure, DaffAuthorizeNetGenerateToken } from '../actions/authorizenet.actions';
import { daffAuthorizeNetSelectors } from './authorize-net.selector';
import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from '../drivers/magento/authorize-net-payment-id';

describe('DaffAuthorizeNetSelectors', () => {

	let store: Store<DaffAuthorizeNetReducersState>;
	const {
		selectAuthorizeNetState,
		selectCcLast4,
		selectLoading,
		selectError
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
				loading: false,
				cc_last_4: null,
				error: null
      }
      const selector = store.pipe(select(selectAuthorizeNetState));
      const expected = cold('a', { a: expectedFeatureState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCcLast4', () => {

    it('selects the last four digits of a credit card', () => {
			store.dispatch(new DaffAuthorizeNetGenerateToken({
				creditCard: {
					name: 'name',
					cardnumber: '1234123412341234',
					month: 'month',
					year: 'year',
					securitycode: '123'
				}
			}));
			const selector = store.pipe(select(selectCcLast4));
      const expected = cold('a', { a: '1234' });
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
			store.dispatch(new DaffAuthorizeNetGenerateTokenFailure('error'));

      const selector = store.pipe(select(selectError));
      const expected = cold('a', { a: 'error' });
      expect(selector).toBeObservable(expected);
    });
  });
});
