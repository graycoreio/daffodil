import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreModule,
  Store,
} from '@ngrx/store';

import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';
import {
  DaffProductStateModule,
  DaffProductPageLoadSuccess,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffUpsellProduct } from '@daffodil/upsell-products';
import {
  DaffUpsellProductStateModule,
  DaffUpsellProductStateRootSlice,
} from '@daffodil/upsell-products/state';
import { DaffUpsellProductFactory } from '@daffodil/upsell-products/testing';

describe('@daffodil/upsell-products/state | Deduping Upsell Products Only from Product Reducers', () => {
  let store: Store<DaffUpsellProductStateRootSlice<DaffUpsellProduct>>;
  let product: DaffUpsellProduct;
  let productFactory: DaffProductFactory;
  let upsellProductFactory: DaffUpsellProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        DaffProductStateModule,
        DaffUpsellProductStateModule,
        DaffProductTestingDriverModule.forRoot(),
      ],
    });

    store = TestBed.inject(Store);
    productFactory = TestBed.inject(DaffProductFactory);
    upsellProductFactory = TestBed.inject(DaffUpsellProductFactory);

    product = upsellProductFactory.create({
      upsell: productFactory.createMany(3),
    });
  });

  describe('when the product page is loaded with upsell products', () => {
    beforeEach(() => {
      store.dispatch(new DaffProductPageLoadSuccess({
        id: product.id,
        products: [product, ...product.upsell],
      }));
    });

    it('should not store nested upsell products in product state', done => {
      store.subscribe((state) => {
        expect(state.daffProduct.products.entities[product.id].upsell).toBeFalsy();
        done();
      });
    });

    it('should store nested upsell product IDs in upsell products state', done => {
      store.subscribe((state) => {
        expect(state.daffUpsellProducts.upsellProducts.upsellProductIds).toEqual(jasmine.arrayContaining(product.upsell.map(({ id }) => id)));
        done();
      });
    });
  });
});
