import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffProductFactory, DaffProductImageFactory, DaffTestingProductService } from 'product/testing/src';

import { BestSellersLoad, BestSellersLoadSuccess, BestSellersLoadFailure } from 'product/src/actions/best-sellers.actions';
import { BestSellersEffects } from 'product/src/effects/best-seller.effects';
import { Product } from 'product/src/models/product';
import { DaffProductDriver } from 'product/src/drivers/injection-tokens/product-driver.token';
import { DaffProductServiceInterface } from 'product/src/drivers/interfaces/product-service.interface';

describe('BestSellersEffects', () => {
  let actions$: Observable<any>;
  let effects: BestSellersEffects;
  let productFactory: DaffProductFactory;
  let mockBestSellers: Product[];
  let daffProductDriver: DaffProductServiceInterface;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffProductDriver, 
          useValue: new DaffTestingProductService(new DaffProductFactory(), new DaffProductImageFactory())
        },
        BestSellersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(BestSellersEffects);
    daffProductDriver = TestBed.get(DaffProductDriver);
    productFactory = TestBed.get(DaffProductFactory);

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
        spyOn(daffProductDriver, 'getBestSellers').and.returnValue(of(mockBestSellers));
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
        const error = 'Failed to load best selling products';
        const response = cold('#', {}, error);
        spyOn(daffProductDriver, 'getBestSellers').and.returnValue(response);
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
