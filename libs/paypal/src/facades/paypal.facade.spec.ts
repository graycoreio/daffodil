import { TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffPaypalTokenResponseFactory } from '@daffodil/paypal/testing';

import { DaffPaypalFacade } from './paypal.facade';
import { daffPaypalReducers } from '../reducers/paypal-reducers';
import { DaffPaypalTokenResponse } from '../models/paypal-token-response';
import { 
	DaffGeneratePaypalExpressTokenSuccess, 
	DaffGeneratePaypalExpressToken, 
	DaffGeneratePaypalExpressTokenFailure 
} from '../actions/paypal.actions';

describe('DaffPaypalFacade', () => {
  let store: MockStore<any>;
  let facade: DaffPaypalFacade;
  const paypalTokenResponseFactory: DaffPaypalTokenResponseFactory = new DaffPaypalTokenResponseFactory();
	let stubPaypalTokenResponse: DaffPaypalTokenResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          paypal: combineReducers(daffPaypalReducers)
        })
      ],
      providers: [
        DaffPaypalFacade
      ]
    })
    
    stubPaypalTokenResponse = paypalTokenResponseFactory.create();
    store = TestBed.get(Store);
    facade = TestBed.get(DaffPaypalFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = {type: 'SOME_TYPE'};

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('paypalTokenResponse$', () => {
  
    it('should return the paypalTokenResponse', () => {
      const expected = cold('a', { a: stubPaypalTokenResponse });
      store.dispatch(new DaffGeneratePaypalExpressTokenSuccess(stubPaypalTokenResponse));
      expect(facade.paypalTokenResponse$).toBeObservable(expected);
    });
  });

  describe('paypalToken$', () => {
  
    it('should return the paypalToken', () => {
      const expected = cold('a', { a: stubPaypalTokenResponse.token });
      store.dispatch(new DaffGeneratePaypalExpressTokenSuccess(stubPaypalTokenResponse));
      expect(facade.paypalToken$).toBeObservable(expected);
    });
  });

  describe('paypalStartUrl$', () => {
  
    it('should return the paypal start url', () => {
      const expected = cold('a', { a: stubPaypalTokenResponse.urls.start });
      store.dispatch(new DaffGeneratePaypalExpressTokenSuccess(stubPaypalTokenResponse));
      expect(facade.paypalStartUrl$).toBeObservable(expected);
    });
  });

  describe('paypalEditUrl$', () => {
  
    it('should return the paypal edit url', () => {
      const expected = cold('a', { a: stubPaypalTokenResponse.urls.edit });
      store.dispatch(new DaffGeneratePaypalExpressTokenSuccess(stubPaypalTokenResponse));
      expect(facade.paypalEditUrl$).toBeObservable(expected);
    });
	});
	
  describe('loading$', () => {
    it('should be false if the paypal state is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });
  
    it('should be true if the paypal state is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffGeneratePaypalExpressToken({ cartId: '1' }));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('error$', () => {

    it('should be an observable of an array of the current errors', () => {
      const error = 'error1';
      const expected = cold('a', { a: error});
			store.dispatch(new DaffGeneratePaypalExpressTokenFailure(error));
      expect(facade.error$).toBeObservable(expected);
    });
  });
});
