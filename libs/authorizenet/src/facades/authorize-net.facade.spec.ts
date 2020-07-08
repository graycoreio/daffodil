import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import { DaffAuthorizeNetFacade } from './authorize-net.facade';
import { daffAuthorizeNetReducers } from '../reducers/authorize-net.reducers';
import { DaffAuthorizeNetUpdatePaymentFailure } from '../actions/authorizenet.actions';
import { DaffCartPaymentMethodAdd } from '@daffodil/cart';
import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from '../drivers/magento/authorize-net-payment-id';

describe('DaffAuthorizeNetFacade', () => {
  let store: MockStore<any>;
  let facade: DaffAuthorizeNetFacade;

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

  describe('loading$', () => {

    it('should return loading state for submitting a payment method', () => {
      const expected = cold('a', { a: false });
      store.dispatch(new DaffCartPaymentMethodAdd({
				method: MAGENTO_AUTHORIZE_NET_PAYMENT_ID,
				payment_info: null
			}));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('error$', () => {

    it('should return the current error message', () => {
      const stubError = 'error message';
      const expected = cold('a', { a: stubError});
      store.dispatch(new DaffAuthorizeNetUpdatePaymentFailure(stubError));
      expect(facade.error$).toBeObservable(expected);
    });
  })
});
