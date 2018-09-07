import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { hot, cold } from 'jasmine-marbles';

import { Product, ProductFactory, DaffodilConfigFactory } from '@daffodil/core';

import { BestSellersLoad, BestSellersLoadSuccess, BestSellersLoadFailure } from '../actions/best-sellers.actions';
import { BestSellersEffects } from './best-seller.effects';
import { ProductTestingModule } from '../testing/product-testing.module';
import { ProductService } from '../services/product.service';
import { DaffodilConfigService } from '../../config/daffodil-config.service';

describe('BestSellersEffects', () => {
  let actions$: Observable<any>;
  let effects: BestSellersEffects;
  let productService: ProductService;
  let productFactory: ProductFactory;
  let mockBestSellers: Product[];
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
        BestSellersEffects,
        provideMockActions(() => actions$),
        {provide: DaffodilConfigService, useValue: daffodilConfigService}
      ]
    });

    effects = TestBed.get(BestSellersEffects);
    productService = TestBed.get(ProductService);
    productFactory = TestBed.get(ProductFactory);

    mockBestSellers = new Array(productFactory.create());
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when BestSellersLoadAction is triggered', () => {

    let expected;
    const bestSellersLoadAction = new BestSellersLoad();
    
    describe('and the call to ProductService is successful', () => {

      beforeEach(() => {
        spyOn(productService, 'getBestSellers').and.returnValue(of(mockBestSellers));
        const bestSellersLoadSuccessAction = new BestSellersLoadSuccess(mockBestSellers);
        actions$ = hot('--a', { a: bestSellersLoadAction });
        expected = cold('--b', { b: bestSellersLoadSuccessAction });
      });
      
      it('should dispatch a BestSellersLoadSuccess action', () => {
        expect(effects.loadBestSellers$).toBeObservable(expected);
      });
    });

    describe('and the call to ProductService fails', () => {
      
      beforeEach(() => {
        let error = 'Failed to load best selling products';
        let response = cold('#', {}, error);
        spyOn(productService, 'getBestSellers').and.returnValue(response);
        const bestSellersLoadFailureAction = new BestSellersLoadFailure(error);
        actions$ = hot('--a', { a: bestSellersLoadAction });
        expected = cold('--b', { b: bestSellersLoadFailureAction });
      });
      
      it('should dispatch a BestSellersLoadFailure action', () => {
        expect(effects.loadBestSellers$).toBeObservable(expected);
      });
    });
  });
});
