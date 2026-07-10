import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';
import { DaffCrossSellProduct } from '@daffodil/cross-sell-products';
import {
  daffCrossSellProductsReducers,
  DaffCrossSellProductStateRootSlice,
  DAFF_CROSS_SELL_PRODUCTS_STORE_FEATURE_KEY,
  DaffCrossSellProductsListSuccess,
} from '@daffodil/cross-sell-products/state';
import { DaffCrossSellProductFactory } from '@daffodil/cross-sell-products/testing';
import {
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
  DaffProductReducersState,
} from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';

import { getDaffCrossSellProductsPageSelectors } from './selectors';
import { daffCrossSellProductsExtraProductEntitiesReducer } from '../../reducers/product-entities/reducer';

describe('selectCrossSellProductsState', () => {

  let store: Store<DaffCrossSellProductStateRootSlice>;
  let productFactory: DaffProductFactory;
  let crossSellProductFactory: DaffCrossSellProductFactory;
  let mockProduct: DaffCrossSellProduct;
  const {
    selectCrossSellProductIds,
    selectCrossSellProducts,
  } = getDaffCrossSellProductsPageSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CROSS_SELL_PRODUCTS_STORE_FEATURE_KEY]: combineReducers(daffCrossSellProductsReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: daffComposeReducers([
            combineReducers(daffProductReducers),
            combineReducers<DaffProductReducersState>({
              products: daffCrossSellProductsExtraProductEntitiesReducer,
              product: daffIdentityReducer,
              productGrid: daffIdentityReducer,
            }),
          ]),
        }),
        DaffProductTestingModule,
      ],
    });

    store = TestBed.inject(Store);
    productFactory = TestBed.inject(DaffProductFactory);
    crossSellProductFactory = TestBed.inject(DaffCrossSellProductFactory);

    mockProduct = crossSellProductFactory.create({
      crossSell: productFactory.createMany(3),
    });

    store.dispatch(new DaffCrossSellProductsListSuccess(mockProduct.crossSell));
  });

  describe('selectCrossSellProductIds', () => {

    it('returns the cross-sell product IDs', () => {
      const selector = store.pipe(select(selectCrossSellProductIds));
      const expected = cold('a', { a: mockProduct.crossSell.map(({ id }) => id) });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCrossSellProducts', () => {

    it('returns the cross-sell products', () => {
      const selector = store.pipe(select(selectCrossSellProducts));
      const expected = cold('a', { a: mockProduct.crossSell });

      expect(selector).toBeObservable(expected);
    });
  });
});
