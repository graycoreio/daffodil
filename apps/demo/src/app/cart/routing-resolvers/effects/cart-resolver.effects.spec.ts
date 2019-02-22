import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { StoreModule, combineReducers } from '@ngrx/store';

import { fromCart, Cart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/core/testing';
import { DaffDriverInterface, DaffDriver } from '@daffodil/driver';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';

import { CartResolverEffects } from './cart-resolver.effects';
import { ResolveCart, ResolveCartSuccess, ResolveCartFailure } from '../actions/cart-resolver.actions';

describe('CartResolverEffects', () => {
  let actions$: Observable<any>;
  let effects: CartResolverEffects;
  let cartFactory: DaffCartFactory;
  let stubCart: Cart;
  let driver: DaffDriverInterface;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          carts: combineReducers(fromCart.reducers),
        }),
        DaffDriverTestingModule
      ],
      providers: [
        CartResolverEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CartResolverEffects);
    cartFactory = TestBed.get(DaffCartFactory);
    stubCart = cartFactory.create();
    driver = TestBed.get(DaffDriver);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('onResolveCart$', () => {
    
    let expected;
    const resolveCartAction = new ResolveCart();
    
    describe('when cart in redux state is defined', () => {

      beforeEach(() => {
        spyOn(effects, 'selectStoreCart').and.returnValue(of(stubCart));
      });
      
      it('should dispatch a ResolveCartSuccess action', () => {
        const resolveCartSuccessAction = new ResolveCartSuccess(stubCart);
        actions$ = hot('--a', { a: resolveCartAction });
        expected = cold('--b', { b: resolveCartSuccessAction });

        expect(effects.onResolveCart$).toBeObservable(expected);
      });
    });

    describe('when cart in redux state is null', () => {

      beforeEach(() => {
        spyOn(effects, 'selectStoreCart').and.returnValue(of(null));        
      });
      
      describe('and service call to cartService.get is successful', () => {
        
        beforeEach(() => {
          spyOn(driver.cartService, 'get').and.returnValue(of(stubCart));
        });

        it('should dispatch a ResolveCartSuccess action', () => {
          const resolveCartSuccessAction = new ResolveCartSuccess(stubCart);
          actions$ = hot('--a', { a: resolveCartAction });
          expected = cold('--b', { b: resolveCartSuccessAction });

          expect(effects.onResolveCart$).toBeObservable(expected);
        });
      });

      describe('and service call to cartService.get fails', () => {
        
        beforeEach(() => {
          const response = cold('#', {});
          spyOn(driver.cartService, 'get').and.returnValue(response);
        });

        it('should dispatch a ResolveCartSuccessFailure action', () => {
          const resolveCartFailureAction = new ResolveCartFailure(null);
          actions$ = hot('--a', { a: resolveCartAction });
          expected = cold('--b', { b: resolveCartFailureAction });

          expect(effects.onResolveCart$).toBeObservable(expected);
        });
      });
    });
  });
});
