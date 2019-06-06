import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffProductFactory, DaffProductImageFactory, DaffTestingProductService } from 'product/testing/src';
import { ProductEffects } from 'product/src/effects/product.effects';
import { ProductLoad, ProductLoadSuccess, ProductLoadFailure } from 'product/src/actions/product.actions';
import { Product } from 'product/src/models/product';
import { DaffProductServiceInterface } from 'product/src/drivers/interfaces/product-service.interface';
import { DaffProductDriver } from 'product/src/drivers/injection-tokens/product-driver.token';

describe('ProductEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductEffects;
  let mockProduct: Product;
  let daffProductDriver: DaffProductServiceInterface;

  let productFactory: DaffProductFactory;
  let productId;

  beforeEach(() => {
    productId = "product id";

    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffProductDriver, 
          useValue: new DaffTestingProductService(new DaffProductFactory(), new DaffProductImageFactory())
        },
      ]
    });

    effects = TestBed.get(ProductEffects);
    productFactory = TestBed.get(DaffProductFactory);

    daffProductDriver = TestBed.get(DaffProductDriver);

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
        spyOn(daffProductDriver, 'get').and.returnValue(of(mockProduct));
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
        spyOn(daffProductDriver, 'get').and.returnValue(response);
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
