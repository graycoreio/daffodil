import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffProductFactory, DaffProductImageFactory, DaffTestingProductService } from '@daffodil/product/testing';
import { DaffProductEffects } from './product.effects';
import { DaffProductLoad, DaffProductLoadSuccess, DaffProductLoadFailure } from '../actions/product.actions';
import { DaffProduct } from '../models/product';
import { DaffProductServiceInterface } from '../drivers/interfaces/product-service.interface';
import { DaffProductDriver } from '../drivers/injection-tokens/product-driver.token';

describe('DaffProductEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffProductEffects<DaffProduct>;
  let mockProduct: DaffProduct;
  let daffProductDriver: DaffProductServiceInterface;

  let productFactory: DaffProductFactory;
  let productId;

  beforeEach(() => {
    productId = 'product id';

    TestBed.configureTestingModule({
      providers: [
        DaffProductEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffProductDriver, 
          useValue: new DaffTestingProductService(new DaffProductFactory(), new DaffProductImageFactory())
        },
      ]
    });

    effects = TestBed.get(DaffProductEffects);
    productFactory = TestBed.get(DaffProductFactory);

    daffProductDriver = TestBed.get(DaffProductDriver);

    mockProduct = productFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ProductLoadAction is triggered', () => {

    let expected;
    const productLoadAction = new DaffProductLoad(productId);
    
    describe('and the call to ProductService is successful', () => {

      beforeEach(() => {
        spyOn(daffProductDriver, 'get').and.returnValue(of(mockProduct));
        const productLoadSuccessAction = new DaffProductLoadSuccess(mockProduct);
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
        const productLoadFailureAction = new DaffProductLoadFailure(error);
        actions$ = hot('--a', { a: productLoadAction });
        expected = cold('--b', { b: productLoadFailureAction });
      });
      
      it('should dispatch a ProductLoadFailure action', () => {
        expect(effects.load$).toBeObservable(expected);
      });
    });
  });
});
