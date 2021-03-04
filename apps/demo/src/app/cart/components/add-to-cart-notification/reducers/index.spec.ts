import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartClear,
  DaffCartLoadSuccess,
  daffCartReducers,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';

import { CloseAddToCartNotification } from '../actions/add-to-cart-notification.actions';
import * as fromAddToCartNotification from './index';

describe('selectDemoAddToCartNotificationState', () => {

  let store: Store<fromAddToCartNotification.State>;
  let expectedOpen: boolean;
  let expectedProductQty: number;
  let expectedProductId: string;
  let expectedLoading: boolean;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          demoAddToCartNotification: combineReducers(fromAddToCartNotification.reducers),
          cart: combineReducers(daffCartReducers),
        }),
      ],
    });

    expectedOpen = false;
    expectedProductQty = 0;
    expectedLoading = false;
    expectedProductId = null;
    store = TestBed.inject(Store);
    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    store.dispatch(new CloseAddToCartNotification());
  }));

  describe('addToCartNotificationStateSelector', () => {

    it('selects add to cart notification state', () => {
      const expectedAddToCartNotificationState = {
        open: expectedOpen,
        productQty: expectedProductQty,
        productId: expectedProductId,
        loading: expectedLoading,
      };

      store.pipe(select(fromAddToCartNotification.addToCartNotificationStateSelector)).subscribe((addToCartNotificationState) => {
        expect(addToCartNotificationState).toEqual(expectedAddToCartNotificationState);
      });
    });
  });

  describe('selectOpen', () => {

    it('selects showAddToCartNotification state', () => {
      store.pipe(select(fromAddToCartNotification.selectOpen)).subscribe((open) => {
        expect(open).toEqual(expectedOpen);
      });
    });
  });

  describe('selectProductQty', () => {

    it('selects productQty state', () => {
      store.pipe(select(fromAddToCartNotification.selectProductQty)).subscribe((productQty) => {
        expect(productQty).toEqual(expectedProductQty);
      });
    });
  });

  describe('selectLoading', () => {

    it('selects loading state', () => {
      store.pipe(select(fromAddToCartNotification.selectLoading)).subscribe((loading) => {
        expect(loading).toEqual(expectedLoading);
      });
    });
  });

  describe('selectCartItemCount', () => {

    let stubCart: DaffCart;

    beforeEach(() => {
      stubCart = cartFactory.create({
        items: cartItemFactory.createMany(2, {
          qty: 2,
        }),
      });

      store.dispatch(new DaffCartClear());
      store.dispatch(new DaffCartLoadSuccess(stubCart));
    });

    it('selects total number of cartItems', () => {
      store.pipe(select(fromAddToCartNotification.selectCartItemCount)).subscribe((count) => {
        expect(count).toEqual(4);
      });
    });
  });
});
