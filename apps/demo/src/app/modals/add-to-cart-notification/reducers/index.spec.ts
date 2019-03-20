import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import { Cart, CartReset, CartLoadSuccess, fromCart } from "@daffodil/cart";
import { DaffCartFactory, DaffCartItemFactory } from "@daffodil/cart/testing";

import * as fromAddToCartNotification from './index';
import { CloseAddToCartNotification } from "../actions/add-to-cart-notification.actions";

describe('selectDemoAddToCartNotificationState', () => {

  let store: Store<fromAddToCartNotification.State>;
  let expectedOpen: boolean;
  let expectedProductQty: number;
  let expectedProductId: string;
  let expectedLoading: boolean;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          demoAddToCartNotification: combineReducers(fromAddToCartNotification.reducers),
          cart: combineReducers(fromCart.reducers)
        })
      ]
    });

    expectedOpen = false;
    expectedProductQty = 0;
    expectedLoading = false;
    expectedProductId = null;
    store = TestBed.get(Store);
    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);
    store.dispatch(new CloseAddToCartNotification);
  }));

  describe('addToCartNotificationStateSelector', () => {
    
    it('selects add to cart notification state', () => {
      const expectedAddToCartNotificationState = {
        open: expectedOpen,
        productQty: expectedProductQty,
        productId: expectedProductId,
        loading: expectedLoading
      } 

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

    let stubCart: Cart;

    beforeEach(() => {
      stubCart = cartFactory.create({
        items: cartItemFactory.createMany(2, {
          qty: 2
        })
      });

      store.dispatch(new CartReset());
      store.dispatch(new CartLoadSuccess(stubCart));
    });
    
    it('selects total number of cartItems', () => {
      store.pipe(select(fromAddToCartNotification.selectCartItemCount)).subscribe((count) => {
        expect(count).toEqual(4);
      });
    });
  });
});
