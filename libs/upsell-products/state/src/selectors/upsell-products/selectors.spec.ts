import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffProductPageLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';
import { DaffUpsellProduct } from '@daffodil/upsell-products';
import {
  daffUpsellProductsReducers,
  DaffUpsellProductStateRootSlice,
  DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY,
} from '@daffodil/upsell-products/state';
import { DaffUpsellProductFactory } from '@daffodil/upsell-products/testing';

import { getDaffUpsellProductsPageSelectors } from './selectors';

describe('selectUpsellProductsState', () => {

  let store: Store<DaffUpsellProductStateRootSlice>;
  let productFactory: DaffProductFactory;
  let upsellProductFactory: DaffUpsellProductFactory;
  let mockProduct: DaffUpsellProduct;
  const {
    selectUpsellProductIds,
    selectUpsellProducts,
  } = getDaffUpsellProductsPageSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY]: combineReducers(daffUpsellProductsReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
        DaffProductTestingModule,
      ],
    });

    store = TestBed.inject(Store);
    productFactory = TestBed.inject(DaffProductFactory);
    upsellProductFactory = TestBed.inject(DaffUpsellProductFactory);

    mockProduct = upsellProductFactory.create({
      upsell: productFactory.createMany(3),
    });

    store.dispatch(new DaffProductPageLoadSuccess({
      id: mockProduct.id,
      products: [mockProduct, ...mockProduct.upsell],
    }));
  });

  describe('selectUpsellProductIds', () => {

    it('returns the upsell product IDs', () => {
      const selector = store.pipe(select(selectUpsellProductIds));
      const expected = cold('a', { a: mockProduct.upsell.map(({ id }) => id) });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectUpsellProducts', () => {

    it('returns the upsell products', () => {
      const selector = store.pipe(select(selectUpsellProducts));
      const expected = cold('a', { a: mockProduct.upsell });

      expect(selector).toBeObservable(expected);
    });
  });
});
