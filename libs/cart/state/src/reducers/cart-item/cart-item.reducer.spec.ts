import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartItem,
  DaffCartItemInputType,
} from '@daffodil/cart';
import { DaffCartDriverErrorCodes } from '@daffodil/cart/driver';
import {
  DaffCartOperationType,
  DaffCartReducerState,
  DaffCartItemUpdateSuccess,
  DaffCartItemUpdateFailure,
  DaffCartItemDeleteSuccess,
  DaffCartItemDeleteFailure,
  DaffCartItemAdd,
  DaffCartItemAddSuccess,
  DaffCartItemAddFailure,
  DaffCartItemLoad,
  DaffCartItemLoadSuccess,
  DaffCartItemLoadFailure,
  DaffCartItemList,
  DaffCartItemListSuccess,
  DaffCartItemListFailure,
  daffCartReducerInitialState,
  DaffCartItemUpdate,
  DaffCartItemDelete,
  DaffCartItemDeleteOutOfStockSuccess,
  DaffCartItemDeleteOutOfStock,
  DaffCartItemDeleteOutOfStockFailure,
} from '@daffodil/cart/state';
import { DaffStatefulCartItemFactory } from '@daffodil/cart/state/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';
import {
  DaffStateError,
  DaffState,
  DaffOperationEntity,
} from '@daffodil/core/state';

import { cartItemReducer } from './cart-item.reducer';

describe('@daffodil/cart/state | cartItemReducer', () => {
  let cartFactory: DaffCartFactory;
  let statefulCartItemFactory: DaffStatefulCartItemFactory;

  let cart: DaffCart;
  let cartItem: DaffOperationEntity<DaffCartItem>;

  let result: DaffCartReducerState;

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);
    statefulCartItemFactory = new DaffStatefulCartItemFactory();

    cart = cartFactory.create();
    cartItem = statefulCartItemFactory.create();

    cart.items = [cartItem];
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      result = cartItemReducer(daffCartReducerInitialState, action);

      expect(result).toBe(daffCartReducerInitialState);
    });
  });

  describe('when CartItemUpdateAction is triggered', () => {
    beforeEach(() => {
      const cartItemUpdate = new DaffCartItemUpdate('itemId', { qty: 4 });
      result = cartItemReducer(daffCartReducerInitialState, cartItemUpdate);
    });

    it('should indicate that the cart is loading', () => {
      const expectedState: DaffCartReducerState<DaffCart> = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Updating,
        },
      };

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartItemUpdateSuccessAction is triggered', () => {
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
      };

      const cartItemUpdateSuccess = new DaffCartItemUpdateSuccess(cart, 'id');

      result = cartItemReducer(state, cartItemUpdateSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the item section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Item]).toEqual([]);
    });
  });

  describe('when CartItemUpdateFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Item]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartItemUpdateFailure = new DaffCartItemUpdateFailure([error], cartItem.id);

      result = cartItemReducer(state, cartItemUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffState.Stable);
    });
  });

  describe('when CartItemDeleteAction is triggered', () => {
    beforeEach(() => {
      const cartItemDelete = new DaffCartItemDelete('itemId');
      result = cartItemReducer(daffCartReducerInitialState, cartItemDelete);
    });

    it('should indicate that the cart is loading', () => {
      const expectedState: DaffCartReducerState<DaffCart> = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Updating,
        },
      };

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartItemDeleteSuccessAction is triggered', () => {
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
      };

      const cartItemRemoveSuccess = new DaffCartItemDeleteSuccess(cart);

      result = cartItemReducer(state, cartItemRemoveSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the item section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Item]).toEqual([]);
    });
  });

  describe('when CartItemDeleteFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Item]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartItemRemoveFailure = new DaffCartItemDeleteFailure([error], cartItem.id);

      result = cartItemReducer(state, cartItemRemoveFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffState.Stable);
    });
  });

  describe('when CartItemDeleteOutOfStockAction is triggered', () => {
    beforeEach(() => {
      const cartItemDeleteOutOfStock = new DaffCartItemDeleteOutOfStock();
      result = cartItemReducer(daffCartReducerInitialState, cartItemDeleteOutOfStock);
    });

    it('should indicate that the cart is loading', () => {
      const expectedState: DaffCartReducerState<DaffCart> = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Updating,
        },
      };

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartItemDeleteOutOfStockSuccessAction is triggered', () => {
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Item]: [{ code: 'code', message: 'message' }],
          [DaffCartOperationType.Cart]: [{ code: DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK, message: 'message' }],
        },
      };

      const cartItemRemoveSuccess = new DaffCartItemDeleteOutOfStockSuccess(cart);

      result = cartItemReducer(state, cartItemRemoveSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the item section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Item]).toEqual([]);
    });

    it('should remove out of stock errors from the cart errors', () => {
      expect(result.errors[DaffCartOperationType.Cart]).not.toContain(jasmine.objectContaining({ code: DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK }));
    });
  });

  describe('when CartItemDeleteOutOfStockFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Item]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartItemRemoveFailure = new DaffCartItemDeleteOutOfStockFailure([error]);

      result = cartItemReducer(state, cartItemRemoveFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffState.Stable);
    });

    it('should add an error to the item section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Item].length).toEqual(2);
    });
  });

  describe('when CartItemAddAction is triggered', () => {
    const type = DaffCartItemInputType.Simple;
    const productId = 'productId';
    const qty = 1;

    it('should indicate that the cart item is being added', () => {
      const cartItemAddAction = new DaffCartItemAdd({ type, productId, qty });

      result = cartItemReducer(daffCartReducerInitialState, cartItemAddAction);

      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffState.Adding);
    });
  });

  describe('when CartItemAddActionSuccess is triggered', () => {
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartItemAddActionSuccess = new DaffCartItemAddSuccess(cart, cartItem.id);
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
      };

      result = cartItemReducer(state, cartItemAddActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the item section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Item]).toEqual([]);
    });
  });

  describe('when CartItemAddFailureAction is triggered', () => {
    let error: DaffStateError;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Item]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartItemAddFailure = new DaffCartItemAddFailure([error]);

      result = cartItemReducer(state, cartItemAddFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffState.Stable);
    });

    it('should add an error to the item section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Item].length).toEqual(2);
    });
  });

  describe('when CartItemLoadAction is triggered', () => {
    it('should indicate that the cart is loading', () => {
      const expectedState: DaffCartReducerState<DaffCart> = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
      };
      const cartItemLoad = new DaffCartItemLoad('itemId');
      result = cartItemReducer(daffCartReducerInitialState, cartItemLoad);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartItemLoadSuccessAction is triggered', () => {
    let state: DaffCartReducerState<DaffCart>;
    let newCartItem: DaffOperationEntity<DaffCartItem>;

    beforeEach(() => {
      newCartItem = {
        ...cartItem,
        qty: cartItem.qty + 1,
      };
      const cartItemLoadActionSuccess = new DaffCartItemLoadSuccess(newCartItem);
      state = {
        ...daffCartReducerInitialState,
        cart,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
      };

      result = cartItemReducer(state, cartItemLoadActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffState.Stable);
    });

    it('should set item from action.payload', () => {
      expect(result.cart.items[0]).toEqual(newCartItem);
    });

    it('should reset the errors in the item section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Item]).toEqual([]);
    });
  });

  describe('when CartItemLoadFailureAction is triggered', () => {
    let error: DaffStateError;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Item]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartItemLoadFailure = new DaffCartItemLoadFailure([error], cartItem.id);

      result = cartItemReducer(state, cartItemLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffState.Stable);
    });

    it('should add an error to the item section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Item].length).toEqual(2);
    });
  });

  describe('when CartItemListAction is triggered', () => {
    it('should indicate that the cart is loading', () => {
      const expectedState: DaffCartReducerState<any> = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
      };
      const cartItemList = new DaffCartItemList();
      result = cartItemReducer(daffCartReducerInitialState, cartItemList);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartItemListSuccessAction is triggered', () => {
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartItemListActionSuccess = new DaffCartItemListSuccess([cartItem]);
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
      };

      result = cartItemReducer(state, cartItemListActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffState.Stable);
    });

    it('should set items from action.payload', () => {
      expect(result.cart.items).toEqual(cart.items);
    });

    it('should reset the errors in the item section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Item]).toEqual([]);
    });
  });

  describe('when CartItemListFailureAction is triggered', () => {
    let error: DaffStateError;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Item]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Item]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartItemListFailure = new DaffCartItemListFailure([error]);

      result = cartItemReducer(state, cartItemListFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Item]).toEqual(DaffState.Stable);
    });

    it('should add an error to the item section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Item].length).toEqual(2);
    });
  });
});
