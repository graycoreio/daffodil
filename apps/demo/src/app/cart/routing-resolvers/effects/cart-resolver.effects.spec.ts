import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { StoreModule, combineReducers } from '@ngrx/store';

import { fromCart, DaffCart, DaffCartDriver, DaffCartServiceInterface } from '@daffodil/cart';
import { DaffTestingCartService, DaffCartFactory } from '@daffodil/cart/testing';

import { CartResolverEffects } from './cart-resolver.effects';
import { ResolveCart, ResolveCartSuccess, ResolveCartFailure } from '../actions/cart-resolver.actions';

describe('CartResolverEffects', () => {
  let actions$: Observable<any>;
  let effects: CartResolverEffects;
  let cartFactory: DaffCartFactory;
  let stubCart: DaffCart;
  let driver: DaffCartServiceInterface;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          carts: combineReducers(fromCart.reducers),
        })
      ],
      providers: [
        CartResolverEffects,
        provideMockActions(() => actions$),
        { 
          provide: DaffCartDriver, 
          useValue: new DaffTestingCartService(new DaffCartFactory())
        }
      ]
    });

    effects = TestBed.get(CartResolverEffects);
    cartFactory = TestBed.get(DaffCartFactory);
    stubCart = cartFactory.create();
    driver = TestBed.get(DaffCartDriver);
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
          spyOn(driver, 'get').and.returnValue(of(stubCart));
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
          spyOn(driver, 'get').and.returnValue(response);
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
