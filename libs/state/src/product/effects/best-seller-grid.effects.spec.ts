import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { hot, cold } from 'jasmine-marbles';

import { Product, ProductFactory, DaffodilConfigFactory } from '@daffodil/core';

import { BestSellerGridLoad, BestSellerGridLoadSuccess, BestSellerGridLoadFailure } from '../actions/best-seller-grid.actions';
import { BestSellerGridEffects } from './best-seller-grid.effects';
import { ProductTestingModule } from '../testing/product-testing.module';
import { ProductService } from '../services/product.service';
import { DaffodilConfigService } from '../../config/daffodil-config.service';

describe('BestSellerGridEffects', () => {
  let actions$: Observable<any>;
  let effects: BestSellerGridEffects;
  let productService: ProductService;
  let productFactory: ProductFactory;
  let mockBestSellerGrid: Product[];
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
        BestSellerGridEffects,
        provideMockActions(() => actions$),
        {provide: DaffodilConfigService, useValue: daffodilConfigService}
      ]
    });

    effects = TestBed.get(BestSellerGridEffects);
    productService = TestBed.get(ProductService);
    productFactory = TestBed.get(ProductFactory);

    mockBestSellerGrid = new Array(productFactory.create());
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when BestSellerGridLoadAction is triggered', () => {

    let expected;
    const bestSellersLoadAction = new BestSellerGridLoad();
    
    describe('and the call to ProductService is successful', () => {

      beforeEach(() => {
        spyOn(productService, 'getBestSellers').and.returnValue(of(mockBestSellerGrid));
        const bestSellersLoadSuccessAction = new BestSellerGridLoadSuccess(mockBestSellerGrid);
        actions$ = hot('--a', { a: bestSellersLoadAction });
        expected = cold('--b', { b: bestSellersLoadSuccessAction });
      });
      
      it('should dispatch a BestSellerGridLoadSuccess action', () => {
        expect(effects.loadBestSellerGrid$).toBeObservable(expected);
      });
    });

    describe('and the call to ProductService fails', () => {
      
      beforeEach(() => {
        let error = 'Failed to load best selling products';
        let response = cold('#', {}, error);
        spyOn(productService, 'getBestSellers').and.returnValue(response);
        const bestSellersLoadFailureAction = new BestSellerGridLoadFailure(error);
        actions$ = hot('--a', { a: bestSellersLoadAction });
        expected = cold('--b', { b: bestSellersLoadFailureAction });
      });
      
      it('should dispatch a BestSellerGridLoadFailure action', () => {
        expect(effects.loadBestSellerGrid$).toBeObservable(expected);
      });
    });
  });
});
