import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of} from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffDriver, DaffDriverInterface } from '@daffodil/driver';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';

import { Product, DaffProductFactory } from '../../../../index';

import { ProductGridLoad, ProductGridLoadSuccess, ProductGridLoadFailure } from '../actions/product-grid.actions';
import { ProductGridEffects } from './product-grid.effects';

describe('ProductGridEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductGridEffects;
  let productFactory: DaffProductFactory;
  let daffDriver: DaffDriverInterface;
  let mockProductGrid: Product[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffDriverTestingModule
      ],
      providers: [
        ProductGridEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.get(ProductGridEffects);
    productFactory = TestBed.get(DaffProductFactory);
    daffDriver = TestBed.get(DaffDriver);

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
        spyOn(daffDriver.productService, 'getAll').and.returnValue(of(mockProductGrid));
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
        let error = 'Failed to load product grid';
        let response = cold('#', {}, error);
        spyOn(daffDriver.productService, 'getAll').and.returnValue(response);
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
