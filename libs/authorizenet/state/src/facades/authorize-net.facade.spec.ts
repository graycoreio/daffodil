import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

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

describe('@daffodil/authorizenet/state | DaffAuthorizeNetFacade', () => {
  let store: Store<DaffAuthorizeNetStateRootSlice>;
  let facade: DaffAuthorizeNetFacade;
  let mockError: DaffStateError;
  let scheduler: TestScheduler;

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

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
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
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.isAcceptJsLoaded$).toBe('a', { a: false });
      });
    });
  });

  describe('loading$', () => {

    it('should return loading state for submitting a payment method', () => {
      store.dispatch(new DaffCartPaymentMethodAdd({
        method: MAGENTO_AUTHORIZE_NET_PAYMENT_ID,
        payment_info: null,
      }));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });
  });

  describe('paymentError$', () => {

    it('should return the current error message', () => {
      store.dispatch(new DaffAuthorizeNetUpdatePaymentFailure(mockError));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.paymentError$).toBe('a', { a: mockError });
      });
    });
  });

  describe('acceptJsLoadError$', () => {

    it('should return the acceptJsLoad error message', () => {
      store.dispatch(new DaffLoadAcceptJsFailure(mockError));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.acceptJsLoadError$).toBe('a', { a: mockError });
      });
    });
  });
});
