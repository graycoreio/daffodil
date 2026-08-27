import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from '@daffodil/authorizenet/driver/magento';
import {
  DaffAuthorizeNetStateRootSlice,
  daffAuthorizeNetReducers,
  DaffAuthorizeNetUpdatePaymentFailure,
  DaffLoadAcceptJsFailure,
  DAFF_AUTHORIZENET_STORE_FEATURE_KEY,
} from '@daffodil/authorizenet/state';
import { DaffCartPaymentMethodAdd } from '@daffodil/cart/state';
import { DaffStateError } from '@daffodil/core/state';

import { daffAuthorizeNetSelectors } from './authorize-net.selector';

describe('@daffodil/authorizenet/state | DaffAuthorizeNetSelectors', () => {

  let store: Store<DaffAuthorizeNetStateRootSlice>;
  let mockError: DaffStateError;
  let scheduler: TestScheduler;
  const {
    selectAuthorizeNetState,
    selectIsAcceptJsLoaded,
    selectLoading,
    selectPaymentError,
    selectAcceptJsLoadError,
  } = daffAuthorizeNetSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_AUTHORIZENET_STORE_FEATURE_KEY]: combineReducers(daffAuthorizeNetReducers),
        }),
      ],
    });

    store = TestBed.inject(Store);

    mockError = {
      code: 'code',
      message: 'error',
    };

    store.dispatch(new DaffCartPaymentMethodAdd({
      method: MAGENTO_AUTHORIZE_NET_PAYMENT_ID,
      payment_info: null,
    }));

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('selectAuthorizeNetState', () => {

    it('selects DaffAuthorizeNetReducerState', () => {
      const expectedFeatureState = {
        isAcceptLoaded: false,
        loading: false,
        paymentError: null,
        acceptJsLoadError: null,
      };
      const selector = store.pipe(select(selectAuthorizeNetState));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: expectedFeatureState });
      });
    });
  });

  describe('selectIsAcceptJsLoaded', () => {

    it('selects whether the acceptJs library has loaded', () => {
      const selector = store.pipe(select(selectIsAcceptJsLoaded));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: false });
      });
    });
  });

  describe('selectLoading', () => {

    it('selects the loading state', () => {
      const selector = store.pipe(select(selectLoading));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: false });
      });
    });
  });

  describe('selectError', () => {

    it('selects the error message state', () => {
      store.dispatch(new DaffAuthorizeNetUpdatePaymentFailure(mockError));

      const selector = store.pipe(select(selectPaymentError));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: mockError });
      });
    });
  });

  describe('selectAcceptJsLoadError', () => {

    it('selects the error message state', () => {
      store.dispatch(new DaffLoadAcceptJsFailure(mockError));

      const selector = store.pipe(select(selectAcceptJsLoadError));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: mockError });
      });
    });
  });
});
