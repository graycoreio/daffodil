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
  let productFactory: DaffProductFactory;
  let mockProduct: DaffProduct;
  const {
    selectCurrentProductState,
    selectCurrentProductId,
    selectCurrentProduct,
  } = getDaffProductPageSelectors();

  beforeEach(() => {
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
        const expected = cold('a', { a: jasmine.objectContaining(expectedProductState) });

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

    describe('selectCurrentProduct', () => {
      it('selects the selected product', () => {
        const selector = store.pipe(select(selectCurrentProduct));
        const expected = cold('a', { a: mockProduct });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
