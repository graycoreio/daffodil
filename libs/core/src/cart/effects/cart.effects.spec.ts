import { TestBed, inject } from '@angular/core/testing';

import { provideMockActions } from '@ngrx/effects/testing';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { hot, cold } from 'jasmine-marbles';

import { CartEffects } from './cart.effects';

import { CartTestingModule } from '../testing/cart-testing.module';
import { CartService } from '../services/cart.service';
import { CartFactory } from '../testing/factories/cart.factory';
import { Cart } from '../model/cart';
import { CartLoad, CartLoadSuccess, CartLoadFailure, AddToCart, AddToCartSuccess, AddToCartFailure } from '../actions/cart.actions';

import { DaffodilConfigService } from '../../config/daffodil-config.service';
import { DaffodilConfigFactory } from '../../config/testing/daffodil-config.factory';
import { ProductFactory } from '../../product/testing/factories/product.factory';

describe('CartEffects', () => {
  let actions$: Observable<any>;
  let effects: CartEffects;
  let cartService: CartService;
  let cartFactory: CartFactory;
  let mockCart: Cart;
  let daffodilConfigService: DaffodilConfigService;
  let daffodilConfigFactory: DaffodilConfigFactory;
  let productFactory: ProductFactory;

  beforeEach(() => {
    daffodilConfigFactory = new DaffodilConfigFactory();
    daffodilConfigService = new DaffodilConfigService(daffodilConfigFactory.create());
    productFactory = new ProductFactory();

    TestBed.configureTestingModule({
      imports: [
        CartTestingModule
      ],
      providers: [
        CartEffects,
        provideMockActions(() => actions$),
        {provide: DaffodilConfigService, useValue: daffodilConfigService}
      ]
    });

    effects = TestBed.get(CartEffects);
    cartService = TestBed.get(CartService);
    cartFactory = TestBed.get(CartFactory);

    mockCart = cartFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartLoadAction is triggered', () => {

    let expected;
    const cartLoadAction = new CartLoad();
    
    describe('and the call to CartService is successful', () => {

      beforeEach(() => {
        spyOn(cartService, 'get').and.returnValue(of(mockCart));
        const cartLoadSuccessAction = new CartLoadSuccess(mockCart);
        actions$ = hot('--a', { a: cartLoadAction });
        expected = cold('--b', { b: cartLoadSuccessAction });
      });
      
      it('should dispatch a CartLoadSuccess action', () => {
        expect(effects.load$).toBeObservable(expected);
      });
    });

    describe('and the call to CartService fails', () => {
      
      beforeEach(() => {
        let error = 'Failed to load cart';
        let response = cold('#', {}, error);
        spyOn(cartService, 'get').and.returnValue(response);
        const cartLoadFailureAction = new CartLoadFailure(error);
        actions$ = hot('--a', { a: cartLoadAction });
        expected = cold('--b', { b: cartLoadFailureAction });
      });
      
      it('should dispatch a CartLoadFailure action', () => {
        expect(effects.load$).toBeObservable(expected);
      });
    });
  });

  describe('when AddToCartAction is triggered', () => {

    let expected;
    let product;
    let qty: number;
    const addToCartAction = new AddToCart({product, qty});

    beforeEach(() => {
      product =  productFactory.create();
    });
    
    describe('and the call to CartService is successful', () => {

      beforeEach(() => {
        spyOn(cartService, 'addToCart').and.returnValue(of(mockCart));
        const addToCartSuccessAction = new AddToCartSuccess(mockCart);
        actions$ = hot('--a', { a: addToCartAction });
        expected = cold('--b', { b: addToCartSuccessAction });
      });
      
      it('should dispatch a CartLoadSuccess action', () => {
        expect(effects.addToCart$).toBeObservable(expected);
      });
    });

    describe('and the call to CartService fails', () => {
      
      beforeEach(() => {
        let error = 'Failed to add item to cart';
        let response = cold('#', {}, error);
        spyOn(cartService, 'addToCart').and.returnValue(response);
        const addToCartFailureAction = new AddToCartFailure(error);
        actions$ = hot('--a', { a: addToCartAction });
        expected = cold('--b', { b: addToCartFailureAction });
      });
      
      it('should dispatch a CartLoadFailure action', () => {
        expect(effects.addToCart$).toBeObservable(expected);
      });
    });
  });
});
