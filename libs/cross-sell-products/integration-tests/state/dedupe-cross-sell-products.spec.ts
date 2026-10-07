import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreModule,
  Store,
} from '@ngrx/store';

import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DAFF_CART_STORE_FEATURE_KEY ,
  DaffResolveCartSuccess,
} from '@daffodil/cart/state';
import { DaffCartWithCrossSellProducts } from '@daffodil/cross-sell-products';
import {
  DaffCrossSellProductStateModule,
  DaffCrossSellProductStateRootSlice,
} from '@daffodil/cross-sell-products/state';
import { DaffCartWithCrossSellProductsFactory } from '@daffodil/cross-sell-products/testing';
import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';

describe('@daffodil/cross-sell-products/state | Deduping CrossSell Products Only from Product Reducers', () => {
  let store: Store<DaffCrossSellProductStateRootSlice>;
  let cart: DaffCartWithCrossSellProducts;
  let crossSellProductFactory: DaffCartWithCrossSellProductsFactory;

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

    cart = crossSellProductFactory.create();
  });

  describe('when the cart is loaded with cross-sell products', () => {
    beforeEach(() => {
      store.dispatch(new DaffResolveCartSuccess(cart));
    });

    xit('should not store nested cross-sell products in cart state', done => {
      store.subscribe((state) => {
        expect(state[DAFF_CART_STORE_FEATURE_KEY].cart.cart?.crossSells).toBeFalsy();
        done();
      });
    });
  });
});
