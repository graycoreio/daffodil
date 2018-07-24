import { TestBed, inject } from '@angular/core/testing';

import { provideMockActions } from '@ngrx/effects/testing';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { hot, cold } from 'jasmine-marbles';

import { ProductEffects } from './product.effects';

import { ProductTestingModule } from '../testing/product-testing.module';
import { ProductService } from '../services/product.service';
import { ProductFactory } from '@daffodil/core';
import { Product } from '@daffodil/core';
import { ProductLoad, ProductLoadSuccess, ProductLoadFailure } from '../actions/product.actions';

import { DaffodilConfigService } from '../../config/daffodil-config.service';
import { DaffodilConfigFactory } from '@daffodil/core';

describe('ProductEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductEffects;
  let productService: ProductService;
  let productFactory: ProductFactory;
  let mockProduct: Product;
  let daffodilConfigService: DaffodilConfigService;
  let daffodilConfigFactory: DaffodilConfigFactory;
  let productId;

  beforeEach(() => {
    productId = "product id";
    daffodilConfigFactory = new DaffodilConfigFactory();
    daffodilConfigService = new DaffodilConfigService(daffodilConfigFactory.create());

    TestBed.configureTestingModule({
      imports: [
        ProductTestingModule
      ],
      providers: [
        ProductEffects,
        provideMockActions(() => actions$),
        {provide: DaffodilConfigService, useValue: daffodilConfigService}
      ]
    });

    effects = TestBed.get(ProductEffects);
    productService = TestBed.get(ProductService);
    productFactory = TestBed.get(ProductFactory);

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
        spyOn(productService, 'get').and.returnValue(of(mockProduct));
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
        let error = 'Failed to load product';
        let response = cold('#', {}, error);
        spyOn(productService, 'get').and.returnValue(response);
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
