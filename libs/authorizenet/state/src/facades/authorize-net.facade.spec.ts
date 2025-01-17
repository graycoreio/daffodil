import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from '@daffodil/authorizenet/driver/magento';
import {
  daffAuthorizeNetReducers,
  DaffAuthorizeNetStateRootSlice,
  DaffAuthorizeNetUpdatePaymentFailure,
  DaffLoadAcceptJsFailure,
  DAFF_AUTHORIZENET_STORE_FEATURE_KEY,
} from '@daffodil/authorizenet/state';
import { DaffCartPaymentMethodAdd } from '@daffodil/cart/state';
import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthorizeNetFacade } from './authorize-net.facade';

describe('DaffAuthorizeNetFacade', () => {
  let store: Store<DaffAuthorizeNetStateRootSlice>;
  let facade: DaffAuthorizeNetFacade;
  let mockError: DaffStateError;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_AUTHORIZENET_STORE_FEATURE_KEY]: combineReducers(daffAuthorizeNetReducers),
        }),
      ],
      providers: [
        DaffAuthorizeNetFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffAuthorizeNetFacade);

    mockError = {
      code: 'code',
      message: 'error',
    };
  });

  it('should be created', () => {
    const service: DaffAuthorizeNetFacade = TestBed.inject(DaffAuthorizeNetFacade);
    expect(service).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('isAcceptJsLoaded$', () => {

    it('should return false by default', () => {
      const expected = cold('a', { a: false });

      expect(facade.isAcceptJsLoaded$).toBeObservable(expected);
    });
  });

  describe('loading$', () => {

    it('should return loading state for submitting a payment method', () => {
      const expected = cold('a', { a: false });
      store.dispatch(new DaffCartPaymentMethodAdd({
        method: MAGENTO_AUTHORIZE_NET_PAYMENT_ID,
        payment_info: null,
      }));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('paymentError$', () => {

    it('should return the current error message', () => {
      const expected = cold('a', { a: mockError });
      store.dispatch(new DaffAuthorizeNetUpdatePaymentFailure(mockError));
      expect(facade.paymentError$).toBeObservable(expected);
    });
  });

  describe('acceptJsLoadError$', () => {

    it('should return the acceptJsLoad error message', () => {
      const expected = cold('a', { a: mockError });
      store.dispatch(new DaffLoadAcceptJsFailure(mockError));
      expect(facade.acceptJsLoadError$).toBeObservable(expected);
    });
  });
});
