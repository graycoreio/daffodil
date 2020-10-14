import { DaffLoadingState } from '@daffodil/core/state';
import { DaffCartItem } from '@daffodil/cart';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';

import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
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
} from '../../actions/public_api';
import { DaffCart } from '../../models/cart';
import { cartItemReducer } from './cart-item.reducer';
import { DaffCartItemList, DaffCartItemListSuccess, DaffCartItemListFailure } from '../../actions/public_api';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartItemInputType } from '../../models/cart-item-input';

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

      const result = cartItemReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartItemUpdateAction is triggered', () => {
    it('should indicate that the cart item is being mutated', () => {
      const cartItemUpdateAction = new DaffCartItemUpdate('itemId', {qty: 3});

      const result = cartItemReducer(initialState, cartItemUpdateAction);

      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffLoadingState.Mutating);
    });
  });

  describe('when CartItemUpdateSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Item]: DaffLoadingState.Resolving
        }
      }

      const cartItemUpdateSuccess = new DaffCartItemUpdateSuccess(cart);

      result = cartItemReducer(state, cartItemUpdateSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffLoadingState.Complete);
    });

    it('should reset the errors in the item section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Item]).toEqual([]);
    });
  });

  describe('when CartItemUpdateFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Item]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Item]: new Array('firstError')
        }
      }

      const cartItemUpdateFailure = new DaffCartItemUpdateFailure(error);

      result = cartItemReducer(state, cartItemUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the item section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Item].length).toEqual(2);
    });
  });

  describe('when CartItemDeleteAction is triggered', () => {
    it('should indicate that the cart item is being mutated', () => {
      const cartItemRemoveAction = new DaffCartItemDelete('itemId');

      const result = cartItemReducer(initialState, cartItemRemoveAction);

      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffLoadingState.Mutating);
    });
  });

  describe('when CartItemDeleteSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Item]: DaffLoadingState.Resolving
        }
      }

      const cartItemRemoveSuccess = new DaffCartItemDeleteSuccess(cart);

      result = cartItemReducer(state, cartItemRemoveSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart.id).toEqual(cart.id)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffLoadingState.Complete);
    });

    it('should reset the errors in the item section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Item]).toEqual([]);
    });
  });

  describe('when CartItemDeleteFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Item]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Item]: new Array('firstError')
        }
      }

      const cartItemRemoveFailure = new DaffCartItemDeleteFailure(error);

      result = cartItemReducer(state, cartItemRemoveFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the item section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Item].length).toEqual(2);
    });
  });

  describe('when CartItemAddAction is triggered', () => {
		const type = DaffCartItemInputType.Simple;
    const productId = 'productId';
    const qty = 1;

    it('should indicate that the cart item is being mutated', () => {
      const cartItemAddAction = new DaffCartItemAdd({ type, productId, qty });

      const result = cartItemReducer(initialState, cartItemAddAction);

      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffLoadingState.Mutating);
    });
  });

  describe('when CartItemAddActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartItemAddActionSuccess = new DaffCartItemAddSuccess(cart);
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Item]: DaffLoadingState.Resolving
        }
      }

      result = cartItemReducer(state, cartItemAddActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffLoadingState.Complete);
    });

    it('should reset the errors in the item section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Item]).toEqual([]);
    });
  });

  describe('when CartItemAddFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Item]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Item]: new Array('firstError')
        }
      }

      error = 'error';

      const cartItemAddFailure = new DaffCartItemAddFailure(error);

      result = cartItemReducer(state, cartItemAddFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the item section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Item].length).toEqual(2);
    });
  });

  describe('when CartItemLoadAction is triggered', () => {
    it('should indicate that the cart is loading', () => {
      const expectedState = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Item]: DaffLoadingState.Resolving
        },
      }
      const cartItemLoad = new DaffCartItemLoad('itemId');
      const result = cartItemReducer(initialState, cartItemLoad);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartItemLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;
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
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Item]: DaffLoadingState.Resolving
        }
      }

      result = cartItemReducer(state, cartItemLoadActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffLoadingState.Complete);
    });

    it('should set item from action.payload', () => {
      expect(result.cart.items[0]).toEqual(newCartItem);
    });

    it('should reset the errors in the item section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Item]).toEqual([]);
    });
  });

  describe('when CartItemLoadFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Item]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Item]: new Array('firstError')
        }
      }

      error = 'error';

      const cartItemLoadFailure = new DaffCartItemLoadFailure(error);

      result = cartItemReducer(state, cartItemLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the item section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Item].length).toEqual(2);
    });
  });

  describe('when CartItemListAction is triggered', () => {
    it('should indicate that the cart is loading', () => {
      const expectedState = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Item]: DaffLoadingState.Resolving
        },
      }
      const cartItemList = new DaffCartItemList();
      const result = cartItemReducer(initialState, cartItemList);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartItemListSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartItemListActionSuccess = new DaffCartItemListSuccess(cart.items);
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Item]: DaffLoadingState.Resolving
        }
      }

      result = cartItemReducer(state, cartItemListActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffLoadingState.Complete);
    });

    it('should set items from action.payload', () => {
      expect(result.cart.items).toEqual(cart.items)
    });

    it('should reset the errors in the item section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Item]).toEqual([]);
    });
  });

  describe('when CartItemListFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Item]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Item]: new Array('firstError')
        }
      }

      error = 'error';

      const cartItemListFailure = new DaffCartItemListFailure(error);

      result = cartItemReducer(state, cartItemListFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the item section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Item].length).toEqual(2);
    });
  });
});
