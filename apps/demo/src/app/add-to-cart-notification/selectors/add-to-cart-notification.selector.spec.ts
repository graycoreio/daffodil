import { TestBed, async } from '@angular/core/testing';
import { StoreModule, Store, select, combineReducers } from '@ngrx/store';

import { DaffCart, DaffCartReset, DaffCartLoadSuccess, fromCart } from '@daffodil/cart';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';

import { State, reducer } from '../reducers/add-to-cart-notification.reducer';
import * as fromAddToCartNotification from './add-to-cart-notification.selector';

import { CloseAddToCartNotification } from '../actions/add-to-cart-notification.actions';

describe('selectDemoAddToCartNotificationState', () => {

  let store: Store<State>;
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
          demoAddToCartNotification: reducer,
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

    let stubCart: DaffCart;

    beforeEach(() => {
      stubCart = cartFactory.create({
        items: cartItemFactory.createMany(2, {
          qty: 2
        })
      });

      store.dispatch(new DaffCartReset());
      store.dispatch(new DaffCartLoadSuccess(stubCart));
    });
    
    it('selects total number of cartItems', () => {
      store.pipe(select(fromAddToCartNotification.selectCartItemCount)).subscribe((count) => {
        expect(count).toEqual(4);
      });
    });
  });
});
