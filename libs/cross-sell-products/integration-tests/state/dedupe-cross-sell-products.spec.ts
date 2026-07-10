import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreModule,
  Store,
} from '@ngrx/store';

import { DaffCrossSellProduct } from '@daffodil/cross-sell-products';
import { DaffCrossSellProductsTestingDriverModule } from '@daffodil/cross-sell-products/driver/testing';
import {
  DaffCrossSellProductStateModule,
  DaffCrossSellProductStateRootSlice,
} from '@daffodil/cross-sell-products/state';
import { DaffCrossSellProductFactory } from '@daffodil/cross-sell-products/testing';
import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';
import {
  DaffProductStateModule,
  DaffProductPageLoadSuccess,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

describe('@daffodil/cross-sell-products/state | Deduping CrossSell Products Only from Product Reducers', () => {
  let store: Store<DaffCrossSellProductStateRootSlice<DaffCrossSellProduct>>;
  let product: DaffCrossSellProduct;
  let productFactory: DaffProductFactory;
  let crossSellProductFactory: DaffCrossSellProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        DaffProductStateModule,
        DaffCrossSellProductStateModule,
        DaffProductTestingDriverModule.forRoot(),
        DaffCrossSellProductsTestingDriverModule.forRoot(),
      ],
    });

    store = TestBed.inject(Store);
    productFactory = TestBed.inject(DaffProductFactory);
    crossSellProductFactory = TestBed.inject(DaffCrossSellProductFactory);

    product = crossSellProductFactory.create({
      crossSell: productFactory.createMany(3),
    });
  });

  describe('when the product page is loaded with cross-sell products', () => {
    beforeEach(() => {
      store.dispatch(new DaffProductPageLoadSuccess({
        id: product.id,
        products: [product, ...product.crossSell],
      }));
    });

    it('should not store nested cross-sell products in product state', done => {
      store.subscribe((state) => {
        expect(state.daffProduct.products.entities[product.id]?.crossSell).toBeFalsy();
        done();
      });
    });
  });
});
