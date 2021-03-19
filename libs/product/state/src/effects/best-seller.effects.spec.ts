import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable ,
  of,
} from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriver,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';
import { DaffTestingProductService } from '@daffodil/product/driver/testing';
import {
  DaffBestSellersLoad,
  DaffBestSellersLoadSuccess,
  DaffBestSellersLoadFailure,
} from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffProductImageFactory,
} from '@daffodil/product/testing';

import { DaffBestSellersEffects } from './best-seller.effects';

describe('BestSellersEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffBestSellersEffects<DaffProduct>;
  let productFactory: DaffProductFactory;
  let mockBestSellers: DaffProduct[];
  let daffProductDriver: DaffProductServiceInterface;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffProductDriver,
          useValue: new DaffTestingProductService(new DaffProductFactory(), new DaffProductImageFactory()),
        },
        DaffBestSellersEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffBestSellersEffects);
    daffProductDriver = TestBed.inject(DaffProductDriver);
    productFactory = TestBed.inject(DaffProductFactory);

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
        const error: DaffStateError = { code: 'code', message: 'Failed to load best selling products' };
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
