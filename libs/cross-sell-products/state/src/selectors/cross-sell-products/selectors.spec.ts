import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreModule,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import { DaffResolveCartSuccess } from '@daffodil/cart/state';
import { DaffCartWithCrossSellProducts } from '@daffodil/cross-sell-products';
import {
  DaffCrossSellProductStateModule,
  DaffCrossSellProductStateRootSlice,
} from '@daffodil/cross-sell-products/state';
import { DaffCartWithCrossSellProductsFactory } from '@daffodil/cross-sell-products/testing';
import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';
import { DAFF_PRODUCT_STORE_FEATURE_KEY } from '@daffodil/product/state';

import { getDaffCrossSellProductsPageSelectors } from './selectors';

describe('selectCrossSellProductsState', () => {
  let store: Store<DaffCrossSellProductStateRootSlice>;
  let crossSellProductFactory: DaffCartWithCrossSellProductsFactory;
  let mockCart: DaffCartWithCrossSellProducts;
  const {
    selectCrossSellProductIds,
    selectCrossSellProducts,
  } = getDaffCrossSellProductsPageSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        DaffCrossSellProductStateModule,
        DaffProductTestingDriverModule.forRoot(),
        DaffTestingCartDriverModule.forRoot(),
      ],
    });

    store = TestBed.inject(Store);
    crossSellProductFactory = TestBed.inject(DaffCartWithCrossSellProductsFactory);

    mockCart = crossSellProductFactory.create();

    store.dispatch(new DaffResolveCartSuccess(mockCart));
  });

  describe('selectCrossSellProductIds', () => {

    it('returns the cross-sell product IDs', () => {
      const selector = store.pipe(select(selectCrossSellProductIds));
      const expected = cold('a', { a: mockCart.crossSellIds });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCrossSellProducts', () => {

    it('returns the cross-sell products', (done) => {
      store.subscribe((state) => {
        const selector = store.pipe(select(selectCrossSellProducts));
        const expected = cold('a', { a: mockCart.crossSellIds.map((id) => state[DAFF_PRODUCT_STORE_FEATURE_KEY].products.entities[id]) });

        expect(selector).toBeObservable(expected);
        done();
      });
    });
  });
});
