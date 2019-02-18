import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { Product } from '@daffodil/core';
import { DaffProductFactory } from '@daffodil/core/testing';

import { DaffDriver, DaffDriverInterface } from '@daffodil/driver';

import { ProductEffects } from './product.effects';
import { ProductLoad, ProductLoadSuccess, ProductLoadFailure } from '../actions/product.actions';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';

describe('ProductEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductEffects;
  let mockProduct: Product;
  let daffDriver: DaffDriverInterface;

  let productFactory: DaffProductFactory;
  let productId;

  beforeEach(() => {
    productId = "product id";

    TestBed.configureTestingModule({
      imports: [
        DaffDriverTestingModule
      ],
      providers: [
        ProductEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.get(ProductEffects);
    productFactory = TestBed.get(DaffProductFactory);

    daffDriver = TestBed.get(DaffDriver);

    mockProduct = productFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ProductLoadAction is triggered', () => {

    let expected;
    const productLoadAction = new ProductLoad(productId);
    
    describe('and the call to ProductService is successful', () => {

      beforeEach(() => {
        spyOn(daffDriver.productService, 'get').and.returnValue(of(mockProduct));
        const productLoadSuccessAction = new ProductLoadSuccess(mockProduct);
        actions$ = hot('--a', { a: productLoadAction });
        expected = cold('--b', { b: productLoadSuccessAction });
      });
      
      it('should dispatch a ProductLoadSuccess action', () => {
        expect(effects.load$).toBeObservable(expected);
      });
    });

    describe('and the call to ProductService fails', () => {
      
      beforeEach(() => {
        const error = 'Failed to load product';
        const response = cold('#', {}, error);
        spyOn(daffDriver.productService, 'get').and.returnValue(response);
        const productLoadFailureAction = new ProductLoadFailure(error);
        actions$ = hot('--a', { a: productLoadAction });
        expected = cold('--b', { b: productLoadFailureAction });
      });
      
      it('should dispatch a ProductLoadFailure action', () => {
        expect(effects.load$).toBeObservable(expected);
      });
    });
  });
});
