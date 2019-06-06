import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of} from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffProductFactory, DaffProductImageFactory, DaffTestingProductService } from 'product/testing/src';
import { ProductGridLoad, ProductGridLoadSuccess, ProductGridLoadFailure } from 'product/src/actions/product-grid.actions';
import { ProductGridEffects } from 'product/src/effects/product-grid.effects';
import { Product } from 'product/src/models/product';
import { DaffProductServiceInterface } from 'product/src/drivers/interfaces/product-service.interface';
import { DaffProductDriver } from 'product/src/drivers/injection-tokens/product-driver.token';

describe('ProductGridEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductGridEffects;
  let productFactory: DaffProductFactory;
  let daffProductDriver: DaffProductServiceInterface;
  let mockProductGrid: Product[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductGridEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffProductDriver, 
          useValue: new DaffTestingProductService(new DaffProductFactory(), new DaffProductImageFactory())
        },
      ]
    });

    effects = TestBed.get(ProductGridEffects);
    productFactory = TestBed.get(DaffProductFactory);
    daffProductDriver = TestBed.get(DaffProductDriver);

    mockProductGrid = new Array(productFactory.create());
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ProductGridLoadAction is triggered', () => {

    let expected;
    const productGridLoadAction = new ProductGridLoad();
    
    describe('and the call to ProductService is successful', () => {

      beforeEach(() => {
        spyOn(daffProductDriver, 'getAll').and.returnValue(of(mockProductGrid));
        const productGridLoadSuccessAction = new ProductGridLoadSuccess(mockProductGrid);
        actions$ = hot('--a', { a: productGridLoadAction });
        expected = cold('--b', { b: productGridLoadSuccessAction });
      });
      
      it('should dispatch a ProductGridLoadSuccess action', () => {
        expect(effects.loadAll$).toBeObservable(expected);
      });
    });

    describe('and the call to ProductService fails', () => {
      
      beforeEach(() => {
        const error = 'Failed to load product grid';
        const response = cold('#', {}, error);
        spyOn(daffProductDriver, 'getAll').and.returnValue(response);
        const productGridLoadFailureAction = new ProductGridLoadFailure(error);
        actions$ = hot('--a', { a: productGridLoadAction });
        expected = cold('--b', { b: productGridLoadFailureAction });
      });
      
      it('should dispatch a ProductGridLoadFailure action', () => {
        expect(effects.loadAll$).toBeObservable(expected);
      });
    });
  });
});
