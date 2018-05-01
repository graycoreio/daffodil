import { Cart } from "../model/cart";
import { CartFactory } from "../testing/factories/cart.factory";
import { initialState, reducer, cartAdapter } from "../reducers/cart-entities.reducer";
import { CartLoad, CartLoadSuccess } from "../actions/cart.actions";

describe('Cart | Cart Entities Reducer', () => {

  let cartFactory;

  beforeEach(() => {
    cartFactory = new CartFactory();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartLoadSuccessAction is triggered', () => {

    let cart: Cart;
    let result;
    let cartId;

    beforeEach(() => {
      cart = cartFactory.create();
      cartId = cart.id;

      let cartListLoadSuccess = new CartLoadSuccess(cart);
      
      result = reducer(initialState, cartListLoadSuccess);
    });

    it('sets expected cart on state', () => {
      expect(result.entities[cartId]).toEqual(cart);
    });
  });
});
