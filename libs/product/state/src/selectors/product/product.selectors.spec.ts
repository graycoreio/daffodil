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
  DaffProductGridLoadSuccess,
  DaffProductStateRootSlice,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductPageLoadSuccess } from '../../actions/public_api';
import { getDaffProductPageSelectors } from './product.selectors';

describe('selectProductState', () => {

  let store: Store<DaffProductStateRootSlice>;
  const productFactory: DaffProductFactory = new DaffProductFactory();
  let mockProduct: DaffProduct;
  const {
    selectCurrentProductLoadingState,
    selectCurrentProductState,
    selectCurrentProductId,
  } = getDaffProductPageSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
    });

    mockProduct = productFactory.create();
    store = TestBed.inject(Store);

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
          loading: false,
          errors: [],
        };
      });

      it('returns the state for the current product', () => {
        const selector = store.pipe(select(selectCurrentProductState));
        const expected = cold('a', { a: expectedProductState });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('selectCurrentProductLoadingState', () => {

      it('selects the loading state of the current product', () => {
        const selector = store.pipe(select(selectCurrentProductLoadingState));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('selectCurrentProductId', () => {

      it('returns the current product id', () => {
        const selector = store.pipe(select(selectCurrentProductId));
        const expected = cold('a', { a: mockProduct.id });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
