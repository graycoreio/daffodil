import { DaffCartItem } from '@daffodil/cart';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';

import { initialState } from '../cart-initial-state';
import { CartState } from '../cart-state.interface';
import {
  DaffCartItemUpdate,
  DaffCartItemUpdateSuccess,
  DaffCartItemUpdateFailure,
  DaffCartItemAdd,
  DaffCartItemAddSuccess,
  DaffCartItemAddFailure,
  DaffCartItemLoad,
  DaffCartItemLoadSuccess,
  DaffCartItemLoadFailure,
  DaffCartItemDelete,
  DaffCartItemDeleteSuccess,
  DaffCartItemDeleteFailure
} from '../../actions';
import { DaffCart } from '../../models/cart';
import { reducer } from './cart-item.reducer';
import { DaffCartItemList, DaffCartItemListSuccess, DaffCartItemListFailure } from '../../actions';


describe('Cart | Reducer | Cart Item', () => {
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  let cart: DaffCart;
  let cartItem: DaffCartItem;

  beforeEach(() => {
    cartFactory = new DaffCartFactory();
    cartItemFactory = new DaffCartItemFactory();

    cart = cartFactory.create();
    cartItem = cartItemFactory.create();

    cart.items = [cartItem];
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartItemUpdateAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartItemUpdateAction = new DaffCartItemUpdate('itemId', {qty: 3});

      const result = reducer(initialState, cartItemUpdateAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartItemUpdateSuccessAction is triggered', () => {
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const cartItemUpdateSuccess = new DaffCartItemUpdateSuccess(cart);

      result = reducer(state, cartItemUpdateSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when CartItemUpdateFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const cartItemUpdateFailure = new DaffCartItemUpdateFailure(error);

      result = reducer(state, cartItemUpdateFailure);
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when CartItemDeleteAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartItemRemoveAction = new DaffCartItemDelete('itemId');

      const result = reducer(initialState, cartItemRemoveAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartItemDeleteSuccessAction is triggered', () => {
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const cartItemRemoveSuccess = new DaffCartItemDeleteSuccess(cart);

      result = reducer(state, cartItemRemoveSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart.id).toEqual(cart.id)
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when CartItemDeleteFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const cartItemRemoveFailure = new DaffCartItemDeleteFailure(error);

      result = reducer(state, cartItemRemoveFailure);
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when CartItemAddAction is triggered', () => {
    const productId = 'productId';
    const qty = 1;

    it('should set loading state to true', () => {
      const cartItemAddAction = new DaffCartItemAdd({ productId, qty });

      const result = reducer(initialState, cartItemAddAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartItemAddActionSuccess is triggered', () => {
    let result;
    let state: CartState;

    beforeEach(() => {
      const cartItemAddActionSuccess = new DaffCartItemAddSuccess(cart);
      state = {
        ...initialState,
        loading: true
      }

      result = reducer(state, cartItemAddActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should set loading state to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when CartItemAddFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      error = 'error';

      const cartItemAddFailure = new DaffCartItemAddFailure(error);

      result = reducer(state, cartItemAddFailure);
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when CartItemLoadAction is triggered', () => {
    it('should indicate that the cart is loading', () => {
      const expectedState = {
        loading: true,
        cart: null,
        errors: []
      }
      const cartItemLoad = new DaffCartItemLoad('itemId');
      const result = reducer(initialState, cartItemLoad);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartItemLoadSuccessAction is triggered', () => {
    let result;
    let state: CartState;
    let newCartItem: DaffCartItem;

    beforeEach(() => {
      newCartItem = {
        ...cartItem,
        qty: cartItem.qty + 1
      };
      const cartItemLoadActionSuccess = new DaffCartItemLoadSuccess(newCartItem);
      state = {
        ...initialState,
        cart,
        loading: true
      }

      result = reducer(state, cartItemLoadActionSuccess);
    });

    it('should set loading state to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('should set item from action.payload', () => {
      expect(result.cart.items[0]).toEqual(newCartItem);
    });
  });

  describe('when CartItemLoadFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      error = 'error';

      const cartItemLoadFailure = new DaffCartItemLoadFailure(error);

      result = reducer(state, cartItemLoadFailure);
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when CartItemListAction is triggered', () => {
    it('should indicate that the cart is loading', () => {
      const expectedState = {
        loading: true,
        cart: null,
        errors: []
      }
      const cartItemList = new DaffCartItemList();
      const result = reducer(initialState, cartItemList);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartItemListSuccessAction is triggered', () => {
    let result;
    let state: CartState;

    beforeEach(() => {
      const cartItemListActionSuccess = new DaffCartItemListSuccess(cart.items);
      state = {
        ...initialState,
        loading: true
      }

      result = reducer(state, cartItemListActionSuccess);
    });

    it('should set loading state to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('should set items from action.payload', () => {
      expect(result.cart.items).toEqual(cart.items)
    });
  });

  describe('when CartItemListFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      error = 'error';

      const cartItemListFailure = new DaffCartItemListFailure(error);

      result = reducer(state, cartItemListFailure);
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
