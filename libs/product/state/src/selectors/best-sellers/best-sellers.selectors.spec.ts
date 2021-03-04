import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffProduct } from '@daffodil/product';
import {
  DaffBestSellersLoadSuccess,
  DaffProductReducersState,
  daffProductReducers,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { getDaffBestSellersSelectors } from './best-sellers.selectors';

describe('selectBestSellersState', () => {

  let store: Store<DaffProductReducersState>;
  const productFactory: DaffProductFactory = new DaffProductFactory();
  let mockProduct: DaffProduct;
  const {
    selectBestSellersProducts,
    selectBestSellersLoadingState,
    selectBestSellersState,
    selectBestSellersIdsState,
  } = getDaffBestSellersSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          product: combineReducers(daffProductReducers),
        }),
      ],
    });

    mockProduct = productFactory.create();
    store = TestBed.inject(Store);

    store.dispatch(new DaffBestSellersLoadSuccess(new Array(mockProduct)));
  });

  describe('BestSellersState', () => {

    describe('selectBestSellersState', () => {

      it('selects best seller grid state', () => {
        const expectedState = {
          productIds: [mockProduct.id],
          loading: false,
          errors: [],
        };
        const selector = store.pipe(select(selectBestSellersState));
        const expected = cold('a', { a: expectedState });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('selectBestSellersLoadingState', () => {

      it('selects best sellers loading state', () => {
        const selector = store.pipe(select(selectBestSellersLoadingState));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('selectBestSellersIdsState', () => {

      it('selects best sellers ids state', () => {
        const selector = store.pipe(select(selectBestSellersIdsState));
        const expected = cold('a', { a: [mockProduct.id]});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('selectBestSellersProducts', () => {
      it('should return the list of best sellers off the product entity state', () => {
        const selector = store.pipe(select(selectBestSellersProducts));
        const expected = cold('a', { a: [mockProduct]});

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
