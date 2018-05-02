import { Cart } from "../model/cart";
import { CartFactory } from "../testing/factories/cart.factory";
import { initialState, reducer, cartAdapter } from "../reducers/cart-entities.reducer";
import { CartLoad, CartLoadSuccess, CartReset } from "../actions/cart.actions";

describe('Cart | Cart Entities Reducer', () => {

  let cartFactory;
  let result;
  let cart: Cart;
  let cartLoadSuccess;

  beforeEach(() => {
    cartFactory = new CartFactory();
    cart = cartFactory.create();
    cartLoadSuccess = new CartLoadSuccess(cart);
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartLoadSuccessAction is triggered', () => {

    let cartId;

    beforeEach(() => {
      cartId = cart.id;

      result = reducer(initialState, cartLoadSuccess);
    });

    it('sets expected cart on state', () => {
      expect(result.entities[cartId]).toEqual(cart);
    });
  });

  describe('when CartResetAction is triggered', () => {

    beforeEach(() => {
      result = reducer(initialState, cartLoadSuccess);

      let cartReset = new CartReset();      
      result = reducer(result, cartReset);
    });
    
    it('resets state to initialState', () => {
      expect(result).toEqual(initialState);
    });
  });
});
