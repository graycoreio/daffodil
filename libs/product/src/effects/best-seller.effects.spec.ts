import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffProductFactory, DaffProductImageFactory, DaffTestingProductService } from '@daffodil/product/testing';
import { DaffBestSellersLoad, DaffBestSellersLoadSuccess, DaffBestSellersLoadFailure } from '../actions/best-sellers.actions';
import { DaffBestSellersEffects } from './best-seller.effects';
import { DaffProduct } from '../models/product';
import { DaffProductDriver } from '../drivers/injection-tokens/product-driver.token';
import { DaffProductServiceInterface } from '../drivers/interfaces/product-service.interface';

describe('BestSellersEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffBestSellersEffects;
  let productFactory: DaffProductFactory;
  let mockBestSellers: DaffProduct[];
  let daffProductDriver: DaffProductServiceInterface;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffProductDriver, 
          useValue: new DaffTestingProductService(new DaffProductFactory(), new DaffProductImageFactory())
        },
        DaffBestSellersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(DaffBestSellersEffects);
    daffProductDriver = TestBed.get(DaffProductDriver);
    productFactory = TestBed.get(DaffProductFactory);

    mockBestSellers = new Array(productFactory.create());
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when BestSellersLoadAction is triggered', () => {

    let expected;
    const bestSellersLoadAction = new DaffBestSellersLoad();
    
    describe('and the call to ProductService is successful', () => {

      beforeEach(() => {
        spyOn(daffProductDriver, 'getBestSellers').and.returnValue(of(mockBestSellers));
        const bestSellersLoadSuccessAction = new DaffBestSellersLoadSuccess(mockBestSellers);
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
        const bestSellersLoadFailureAction = new DaffBestSellersLoadFailure(error);
        actions$ = hot('--a', { a: bestSellersLoadAction });
        expected = cold('--b', { b: bestSellersLoadFailureAction });
      });
      
      it('should dispatch a BestSellersLoadFailure action', () => {
        expect(effects.loadBestSellers$).toBeObservable(expected);
      });
    });
  });
});
