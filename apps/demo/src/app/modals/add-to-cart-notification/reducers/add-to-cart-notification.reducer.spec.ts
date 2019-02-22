import { AddToCart, AddToCartSuccess, Cart } from "@daffodil/cart";
import { DaffCartFactory } from "@daffodil/core/testing";

import { initialState, reducer, getOpen, getProductQty, getLoading, getProductId } from "../reducers/add-to-cart-notification.reducer";
import { OpenAddToCartNotification, CloseAddToCartNotification } from "../actions/add-to-cart-notification.actions";

describe('Add To Cart Notification | Reducer', () => {
  
  describe('initialState', () => {
    
    it('should set open to false', () => {
      expect(initialState.open).toBeFalsy();
    });
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when OpenAddToCartNotification action is triggered', () => {

    let result;

    beforeEach(() => {
      const openAddToCartNotificationAction = new OpenAddToCartNotification();
      
      result = reducer(initialState, openAddToCartNotificationAction);
    });

    it('sets open to true', () => {
      expect(result.open).toEqual(true)
    });
  });

  describe('when CloseAddToCartNotification action is triggered', () => {

    let result;

    beforeEach(() => {
      const closeAddToCartNotificationAction = new CloseAddToCartNotification();
      
      result = reducer(initialState, closeAddToCartNotificationAction);
    });

    it('sets open to false', () => {
      expect(result.open).toBeFalsy();
    });
  });

  describe('when AddToCart action is triggered', () => {

    let result;
    let stubQty;
    let stubId;

    beforeEach(() => {
      stubQty = 1;
      stubId = 'id';
      const addToCartAction = new AddToCart({productId: stubId, qty: stubQty});
      
      result = reducer(initialState, addToCartAction);
    });

    it('sets productQty to given qty', () => {
      expect(result.productQty).toEqual(stubQty);
    });

    it('sets productId to given id', () => {
      expect(result.productId).toEqual(stubId);
    });

    it('sets loading to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when AddToCartSuccess action is triggered', () => {

    let result;
    const cartFactory = new DaffCartFactory();
    const stubCart: Cart = cartFactory.create();

    beforeEach(() => {
      const addToCartSuccessAction = new AddToCartSuccess(stubCart);
      
      result = reducer(initialState, addToCartSuccessAction);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('getOpen', () => {
    
    it('returns open state', () => {
      expect(getOpen(initialState)).toEqual(initialState.open);
    });
  });

  describe('getProductQty', () => {
    
    it('returns productQty state', () => {
      expect(getProductQty(initialState)).toEqual(initialState.productQty);
    });
  });

  describe('getProductId', () => {
    
    it('returns productId state', () => {
      expect(getProductId(initialState)).toEqual(initialState.productId);
    });
  });

  describe('getLoading', () => {
    
    it('returns loading state', () => {
      expect(getLoading(initialState)).toEqual(initialState.loading);
    });
  });
});
