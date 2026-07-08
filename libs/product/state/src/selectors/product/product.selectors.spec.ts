import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductGridLoadSuccess,
  DaffProductStateRootSlice,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { getDaffProductPageSelectors } from './product.selectors';
import { DaffProductPageLoadSuccess } from '../../actions/public_api';

describe('selectProductState', () => {

  let store: Store<DaffProductStateRootSlice>;
  let productFactory: DaffProductFactory;
  let mockProduct: DaffProduct;
  let scheduler: TestScheduler;
  const {
    selectCurrentProductState,
    selectCurrentProductId,
    selectCurrentProduct,
  } = getDaffProductPageSelectors();

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
    });

    productFactory = TestBed.inject(DaffProductFactory);
    store = TestBed.inject(Store);

    mockProduct = productFactory.create();

    store.dispatch(new DaffProductGridLoadSuccess(new Array(mockProduct)));
    store.dispatch(new DaffProductPageLoadSuccess({
      id: mockProduct.id,
      products: [mockProduct],
    }));
  });

  describe('SelectedProductState', () => {

    describe('selectCurrentProductState', () => {

      let expectedProductState;

      beforeEach(() => {
        expectedProductState = {
          currentProductId: mockProduct.id,
          qty: 1,
        };
      });

      it('returns the state for the current product', () => {
        const selector = store.pipe(select(selectCurrentProductState));

        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: jasmine.objectContaining(expectedProductState) });
        });
      });
    });

    describe('selectCurrentProductId', () => {

      it('returns the current product id', () => {
        const selector = store.pipe(select(selectCurrentProductId));

        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: mockProduct.id });
        });
      });
    });

    describe('selectCurrentProduct', () => {
      it('selects the selected product', () => {
        const selector = store.pipe(select(selectCurrentProduct));

        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: mockProduct });
        });
      });
    });
  });
});
