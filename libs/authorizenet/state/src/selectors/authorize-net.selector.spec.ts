import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCartPaymentMethodAdd } from '@daffodil/cart/state';
import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from '@daffodil/authorizenet/driver/magento';
import { DaffAuthorizeNetReducersState, daffAuthorizeNetReducers, DaffAuthorizeNetUpdatePaymentFailure, DaffLoadAcceptJsFailure, DAFF_AUTHORIZENET_STORE_FEATURE_KEY } from '@daffodil/authorizenet/state';
import { DaffStateError } from '@daffodil/core/state';

import { daffAuthorizeNetSelectors } from './authorize-net.selector';

describe('DaffAuthorizeNetSelectors', () => {

  let store: Store<DaffAuthorizeNetReducersState>;
  let mockError: DaffStateError;
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
          [DAFF_AUTHORIZENET_STORE_FEATURE_KEY]: combineReducers(daffAuthorizeNetReducers)
        })
      ]
    });

    store = TestBed.inject(Store);

    mockError = {
      code: 'code',
      message: 'error'
    };

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
			store.dispatch(new DaffAuthorizeNetUpdatePaymentFailure(mockError));

      const selector = store.pipe(select(selectPaymentError));
      const expected = cold('a', { a: mockError });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAcceptJsLoadError', () => {

    it('selects the error message state', () => {
			store.dispatch(new DaffLoadAcceptJsFailure(mockError));

      const selector = store.pipe(select(selectAcceptJsLoadError));
      const expected = cold('a', { a: mockError });
      expect(selector).toBeObservable(expected);
    });
  });
});
