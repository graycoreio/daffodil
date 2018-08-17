import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { hot, cold } from 'jasmine-marbles';

import { Product, ProductFactory, DaffodilConfigFactory } from '@daffodil/core';

import { ProductGridLoad, ProductGridLoadSuccess, ProductGridLoadFailure } from '../actions/product-grid.actions';
import { ProductGridEffects } from './product-grid.effects';
import { ProductTestingModule } from '../testing/product-testing.module';
import { ProductService } from '../services/product.service';
import { DaffodilConfigService } from '../../config/daffodil-config.service';

describe('ProductGridEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductGridEffects;
  let productService: ProductService;
  let productFactory: ProductFactory;
  let mockProductGrid: Product[];
  let daffodilConfigService: DaffodilConfigService;
  let daffodilConfigFactory: DaffodilConfigFactory;

  beforeEach(() => {
    daffodilConfigFactory = new DaffodilConfigFactory();
    daffodilConfigService = new DaffodilConfigService(daffodilConfigFactory.create());

    TestBed.configureTestingModule({
      imports: [
        ProductTestingModule
      ],
      providers: [
        ProductGridEffects,
        provideMockActions(() => actions$),
        {provide: DaffodilConfigService, useValue: daffodilConfigService}
      ]
    });

    effects = TestBed.get(ProductGridEffects);
    productService = TestBed.get(ProductService);
    productFactory = TestBed.get(ProductFactory);

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
        spyOn(productService, 'getAll').and.returnValue(of(mockProductGrid));
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
        spyOn(productService, 'getAll').and.returnValue(response);
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
