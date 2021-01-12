import { TestBed, waitForAsync } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';
import { DaffCartClear, DaffCartLoadSuccess, DaffCartReducersState, daffCartReducers } from '@daffodil/cart/state';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';

import { isCartEmpty, selectCartItemCount } from './cart-selector';

describe('selectCartState', () => {

  let store: Store<DaffCartReducersState>;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;
  let mockCart: DaffCart;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
        })
      ]
    });

    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    store = TestBed.inject(Store);
  }));

  describe('selectCartItemCount', () => {

    beforeEach(() => {
      mockCart = cartFactory.create({
        items: cartItemFactory.createMany(2)
      });

      mockCart.items[0].qty = 2;
      mockCart.items[1].qty = 4;

      store.dispatch(new DaffCartClear());
      store.dispatch(new DaffCartLoadSuccess(mockCart));
    });

    it('selects total number of cartItems', () => {
      store.pipe(select(selectCartItemCount)).subscribe((count) => {
        expect(count).toEqual(6);
      });
    });
  });

  describe('isCartEmpty', () => {

    describe('when cart is empty', () => {

      beforeEach(() => {
        mockCart = cartFactory.create();
        store.dispatch(new DaffCartClear());
        store.dispatch(new DaffCartLoadSuccess(mockCart));
      });

      it('should return true', () => {
        store.pipe(select(isCartEmpty)).subscribe((isCartEmptyValue) => {
          expect(isCartEmptyValue).toBeTruthy();
        });
      });
    });

    describe('when cart is not empty', () => {

      beforeEach(() => {
        mockCart = cartFactory.create({
          items: cartItemFactory.createMany(2)
        });
        store.dispatch(new DaffCartClear());
        store.dispatch(new DaffCartLoadSuccess(mockCart));
      });

      it('should return false', () => {
        store.pipe(select(isCartEmpty)).subscribe((isCartEmptyValue) => {
          expect(isCartEmptyValue).toBeFalsy();
        });
      });
    });
  });
});
