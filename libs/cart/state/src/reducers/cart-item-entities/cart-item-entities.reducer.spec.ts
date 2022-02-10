import { DaffCart } from '@daffodil/cart';
import {
  DaffCartItemListSuccess,
  DaffCartItemLoadSuccess,
  DaffCartItemUpdateSuccess,
  DaffCartItemAddSuccess,
  DaffCartItemDeleteSuccess,
  DaffCartLoadSuccess,
  DaffCartClearSuccess,
  DaffCartItemDelete,
  DaffCartItemStateEnum,
  DaffCartItemStateReset,
  DaffCartItemUpdate,
  DaffResolveCartSuccess,
  DaffStatefulCartItem,
  DaffCartItemLoadFailure,
  DaffCartItemDeleteFailure,
  DaffCartItemUpdateFailure,
  DaffCartCreateSuccess,
  DaffCartItemDeleteOutOfStockSuccess,
  DaffCartLoadPartialSuccess,
  DaffResolveCartPartialSuccess,
} from '@daffodil/cart/state';
import { DaffStatefulCartItemFactory } from '@daffodil/cart/state/testing';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

import { daffCartItemEntitiesAdapter } from './cart-item-entities-reducer-adapter';
import { daffCartItemEntitiesReducer } from './cart-item-entities.reducer';

describe('Cart | Cart Item Entities Reducer', () => {
  let error: DaffStateError;
  let statefulCartItemFactory: DaffStatefulCartItemFactory;
  const initialState = daffCartItemEntitiesAdapter().getInitialState();

  beforeEach(() => {
    statefulCartItemFactory = new DaffStatefulCartItemFactory();

    error = {
      code: 'code',
      message: 'message',
    };
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffCartItemEntitiesReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when an existing cart item does not have a default daffState', () => {
    let result;
    let stubStatefulCartItem: DaffStatefulCartItem;
    let initialStateWithCartItem;

    beforeEach(() => {
      stubStatefulCartItem = new DaffStatefulCartItemFactory().create({
        id: 'id',
      });
      initialStateWithCartItem = {
        ...initialState,
        entities: {
          [stubStatefulCartItem.id]: {
            ...stubStatefulCartItem,
            daffState: DaffCartItemStateEnum.New,
          },
        },
      };
    });

    it('should retain the existing daffState when a CartItemListSuccessAction is triggered', () => {
      const cartItemListSuccess = new DaffCartItemListSuccess([{
        ...stubStatefulCartItem,
        daffState: DaffCartItemStateEnum.Default,
      }]);

      result = daffCartItemEntitiesReducer(initialStateWithCartItem, cartItemListSuccess);
      expect(result.entities[stubStatefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.New);
    });

    it('should retain the existing daffState when a CartItemLoadSuccessAction is triggered', () => {
      const cartItemLoadSuccess = new DaffCartItemLoadSuccess({
        ...stubStatefulCartItem,
        daffState: DaffCartItemStateEnum.Default,
      });

      result = daffCartItemEntitiesReducer(initialStateWithCartItem, cartItemLoadSuccess);
      expect(result.entities[stubStatefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.New);
    });

    it('should retain the existing daffState when a CartItemDeleteSuccessAction is triggered', () => {
      const cartItemDeleteSuccess = new DaffCartItemDeleteSuccess(new DaffCartFactory().create({
        items: [new DaffCartItemFactory().create({ id: stubStatefulCartItem.id })],
      }));

      result = daffCartItemEntitiesReducer(initialStateWithCartItem, cartItemDeleteSuccess);
      expect(result.entities[stubStatefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.New);
    });

    it('should retain the existing daffState when a CartLoadSuccessAction is triggered', () => {
      const cartLoadSuccess = new DaffCartLoadSuccess(new DaffCartFactory().create({
        items: [new DaffCartItemFactory().create({ id: stubStatefulCartItem.id })],
      }));

      result = daffCartItemEntitiesReducer(initialStateWithCartItem, cartLoadSuccess);
      expect(result.entities[stubStatefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.New);
    });

    it('should retain the existing daffState when a CartClearSuccessAction is triggered', () => {
      const cartClearSuccess = new DaffCartClearSuccess(new DaffCartFactory().create({
        items: [new DaffCartItemFactory().create({ id: stubStatefulCartItem.id })],
      }));

      result = daffCartItemEntitiesReducer(initialStateWithCartItem, cartClearSuccess);
      expect(result.entities[stubStatefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.New);
    });

    it('should retain the existing daffState when a CartItemUpdateSuccessAction is triggered', () => {
      const cartItem = new DaffCartItemFactory().create();
      const cartItemUpdateSuccess = new DaffCartItemUpdateSuccess(new DaffCartFactory().create({
        items: [
          stubStatefulCartItem,
          cartItem,
        ],
      }), cartItem.id);
      result = daffCartItemEntitiesReducer(initialStateWithCartItem, cartItemUpdateSuccess);

      expect(result.entities[stubStatefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.New);
    });
  });

  describe('when CartItemListSuccessAction is triggered', () => {

    let cartItems: DaffStatefulCartItem[];
    let result;

    beforeEach(() => {
      cartItems = statefulCartItemFactory.createMany(2);
      const cartItemListSuccess = new DaffCartItemListSuccess(cartItems);

      result = daffCartItemEntitiesReducer(initialState, cartItemListSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected statefulCartItem on state', () => {
      expect(result.entities[cartItems[0].id]).toEqual(cartItems[0]);
    });

    it('should reset the cart item\'s errors', () => {
      expect(result.entities[cartItems[0].id].errors).toEqual([]);
    });
  });

  describe('when CartItemLoadSuccessAction is triggered', () => {

    let statefulCartItem: DaffStatefulCartItem;
    let result;

    beforeEach(() => {
      statefulCartItem = statefulCartItemFactory.create();
      const cartItemLoadSuccess = new DaffCartItemLoadSuccess(statefulCartItem);

      result = daffCartItemEntitiesReducer(initialState, cartItemLoadSuccess);
    });

    it('sets expected statefulCartItem on state', () => {
      expect(result.entities[statefulCartItem.id]).toEqual(statefulCartItem);
    });

    it('should reset the cart item\'s errors', () => {
      expect(result.entities[statefulCartItem.id].errors).toEqual([]);
    });
  });

  describe('when CartItemUpdateSuccessAction is triggered', () => {

    let cart: DaffCart;
    let cartItems: DaffStatefulCartItem[];
    let result;

    beforeEach(() => {
      cartItems = statefulCartItemFactory.createMany(2, {
        errors: [error],
      });
      cart = new DaffCartFactory().create({
        items: cartItems,
      });
      const cartItemUpdateSuccess = new DaffCartItemUpdateSuccess(cart, cartItems[0].id);

      result = daffCartItemEntitiesReducer(initialState, cartItemUpdateSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[cartItems[0].id].id).toEqual(cartItems[0].id);
    });

    it('sets the state of the updated cart item to Updated', () => {
      expect(result.entities[cartItems[0].id].daffState).toEqual(DaffCartItemStateEnum.Updated);
    });

    it('should reset the cart item\'s errors', () => {
      expect(result.entities[cartItems[0].id].errors).toEqual([]);
    });
  });

  describe('when CartItemAddSuccessAction is triggered with a new cart item', () => {

    let cart: DaffCart;
    let statefulCartItem: DaffStatefulCartItem;
    let result;

    beforeEach(() => {
      statefulCartItem = statefulCartItemFactory.create({
        errors: [error],
      });
      cart = new DaffCartFactory().create({
        items: [statefulCartItem],
      });
      const cartItemAddSuccess = new DaffCartItemAddSuccess(cart);

      result = daffCartItemEntitiesReducer(initialState, cartItemAddSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cart.items.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[statefulCartItem.id].id).toEqual(statefulCartItem.id);
    });

    it('sets the new cart item\'s state to New', () => {
      expect(result.entities[statefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.New);
    });

    it('should reset the cart item\'s errors', () => {
      expect(result.entities[statefulCartItem.id].errors).toEqual([]);
    });
  });

  describe('when CartItemAddSuccessAction is triggered with an existing cart item', () => {

    let cart: DaffCart;
    let statefulCartItem: DaffStatefulCartItem;
    let result;

    beforeEach(() => {
      statefulCartItem = statefulCartItemFactory.create({
        errors: [error],
      });
      cart = new DaffCartFactory().create({
        items: [statefulCartItem],
      });
      const cartItemAddSuccess = new DaffCartItemAddSuccess({
        ...cart,
        items: [{
          ...statefulCartItem,
          qty: statefulCartItem.qty + 1,
        }],
      });

      result = daffCartItemEntitiesReducer({
        ...initialState,
        entities: {
          [statefulCartItem.id]: statefulCartItem,
        },
      }, cartItemAddSuccess);
    });

    it('sets the cart item\'s state to Updated', () => {
      expect(result.entities[statefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.Updated);
    });

    it('should reset the cart item\'s errors', () => {
      expect(result.entities[statefulCartItem.id].errors).toEqual([]);
    });
  });

  describe('when CartItemDeleteSuccessAction is triggered', () => {

    let cart: DaffCart;
    let cartItems: DaffStatefulCartItem[];
    let result;

    beforeEach(() => {
      cartItems = statefulCartItemFactory.createMany(2);
      cart = new DaffCartFactory().create({
        items: cartItems,
      });
      const cartItemDeleteSuccess = new DaffCartItemDeleteSuccess(cart);

      result = daffCartItemEntitiesReducer(initialState, cartItemDeleteSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[cartItems[0].id]).toEqual(cartItems[0]);
    });
  });

  describe('when CartLoadSuccessAction is triggered', () => {

    let cart: DaffCart;
    let cartItems: DaffStatefulCartItem[];
    let result;

    beforeEach(() => {
      cartItems = statefulCartItemFactory.createMany(2);
      cart = new DaffCartFactory().create({
        items: cartItems,
      });
      const cartLoadSuccess = new DaffCartLoadSuccess(cart);

      result = daffCartItemEntitiesReducer(initialState, cartLoadSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[cartItems[0].id]).toEqual(cartItems[0]);
    });

    it('should reset the cart item errors', () => {
      expect(result.entities[cartItems[0].id].errors).toEqual([]);
    });
  });

  describe('when ResolveCartSuccessAction is triggered', () => {

    let cart: DaffCart;
    let cartItems: DaffStatefulCartItem[];
    let result;

    beforeEach(() => {
      cartItems = statefulCartItemFactory.createMany(2);
      cart = new DaffCartFactory().create({
        items: cartItems,
      });
      const resolveCartSuccess = new DaffResolveCartSuccess(cart);

      result = daffCartItemEntitiesReducer(initialState, resolveCartSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[cartItems[0].id]).toEqual(cartItems[0]);
    });

    it('should reset the cart item errors', () => {
      expect(result.entities[cartItems[0].id].errors).toEqual([]);
    });
  });

  describe('when DeleteOutOfStockSuccessAction is triggered', () => {

    let cart: DaffCart;
    let cartItems: DaffStatefulCartItem[];
    let result;

    beforeEach(() => {
      cartItems = statefulCartItemFactory.createMany(2);
      cart = new DaffCartFactory().create({
        items: cartItems,
      });
      const deleteOutOfStockSuccess = new DaffCartItemDeleteOutOfStockSuccess(cart);

      result = daffCartItemEntitiesReducer(initialState, deleteOutOfStockSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[cartItems[0].id]).toEqual(cartItems[0]);
    });

    it('should reset the cart item errors', () => {
      expect(result.entities[cartItems[0].id].errors).toEqual([]);
    });
  });

  describe('when ResolveCartPartialSuccessAction is triggered', () => {

    let cart: DaffCart;
    let cartItems: DaffStatefulCartItem[];
    let result;

    beforeEach(() => {
      cartItems = statefulCartItemFactory.createMany(2);
      cart = new DaffCartFactory().create({
        items: cartItems,
      });
      const resolveCartPartialSuccess = new DaffResolveCartPartialSuccess(cart, []);

      result = daffCartItemEntitiesReducer(initialState, resolveCartPartialSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[cartItems[0].id]).toEqual(cartItems[0]);
    });

    it('should reset the cart item errors', () => {
      expect(result.entities[cartItems[0].id].errors).toEqual([]);
    });
  });

  describe('when CartLoadPartialSuccessAction is triggered', () => {

    let cart: DaffCart;
    let cartItems: DaffStatefulCartItem[];
    let result;

    beforeEach(() => {
      cartItems = statefulCartItemFactory.createMany(2);
      cart = new DaffCartFactory().create({
        items: cartItems,
      });
      const cartLoadPartialSuccess = new DaffCartLoadPartialSuccess(cart, []);

      result = daffCartItemEntitiesReducer(initialState, cartLoadPartialSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[cartItems[0].id]).toEqual(cartItems[0]);
    });

    it('should reset the cart item errors', () => {
      expect(result.entities[cartItems[0].id].errors).toEqual([]);
    });
  });

  describe('when CartClearSuccessAction is triggered', () => {

    let cart: DaffCart;
    let result;

    beforeEach(() => {
      cart = new DaffCartFactory().create({
        items: [],
      });
      const cartItemAddSuccess = new DaffCartClearSuccess(cart);

      result = daffCartItemEntitiesReducer(initialState, cartItemAddSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(0);
    });
  });

  describe('when CartItemStateResetAction is triggered', () => {

    let stubCartItem: DaffStatefulCartItem;
    let result;
    let testInitialState;

    beforeEach(() => {
      stubCartItem = new DaffStatefulCartItemFactory().create();
      testInitialState = {
        ids: [stubCartItem.id.toString()],
        entities: {
          [stubCartItem.id]: {
            ...stubCartItem,
            daffState: DaffCartItemStateEnum.New,
          },
        },
      };
      const cartItemStateReset = new DaffCartItemStateReset();

      result = daffCartItemEntitiesReducer(testInitialState, cartItemStateReset);
    });

    it('resets the state of all the cart items to default', () => {
      expect(result.entities[stubCartItem.id].daffState).toEqual(DaffCartItemStateEnum.Default);
    });
  });

  describe('when CartItemUpdateAction is triggered', () => {

    let stubStatefulCartItem: DaffStatefulCartItem;
    let result;
    let testInitialState;

    beforeEach(() => {
      stubStatefulCartItem = new DaffStatefulCartItemFactory().create();
      testInitialState = {
        ids: [stubStatefulCartItem.id.toString()],
        entities: {
          [stubStatefulCartItem.id]: stubStatefulCartItem,
        },
      };
      const cartItemUpdateAction = new DaffCartItemUpdate(stubStatefulCartItem.id, { qty: 4 });

      result = daffCartItemEntitiesReducer(testInitialState, cartItemUpdateAction);
    });

    it('sets the updating cart item state to mutating', () => {
      expect(result.entities[stubStatefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.Mutating);
    });
  });

  describe('when CartItemDeleteAction is triggered', () => {

    let stubCartItem: DaffStatefulCartItem;
    let result;
    let testInitialState;

    beforeEach(() => {
      stubCartItem = new DaffStatefulCartItemFactory().create();
      testInitialState = {
        ids: [stubCartItem.id.toString()],
        entities: {
          [stubCartItem.id]: stubCartItem,
        },
      };
      const cartItemDeleteAction = new DaffCartItemDelete(stubCartItem.id);

      result = daffCartItemEntitiesReducer(testInitialState, cartItemDeleteAction);
    });

    it('sets the cart item state to mutating', () => {
      expect(result.entities[stubCartItem.id].daffState).toEqual(DaffCartItemStateEnum.Mutating);
    });
  });

  describe('when CartItemLoadFailureAction is triggered', () => {
    let statefulCartItem: DaffStatefulCartItem;
    let result;

    beforeEach(() => {
      error = {
        code: 'code',
        message: 'message',
      };
      statefulCartItem = statefulCartItemFactory.create();
      const cartItemLoadSuccess = new DaffCartItemLoadSuccess(statefulCartItem);
      const cartItemLoadFailure = new DaffCartItemLoadFailure(error, statefulCartItem.id);

      result = daffCartItemEntitiesReducer(daffCartItemEntitiesReducer(initialState, cartItemLoadSuccess), cartItemLoadFailure);
    });

    it('should reset daffState on the cart item', () => {
      expect(result.entities[statefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.Error);
    });
  });

  describe('when CartItemDeleteFailureAction is triggered', () => {
    let statefulCartItem: DaffStatefulCartItem;
    let result;

    beforeEach(() => {
      error = {
        code: 'code',
        message: 'message',
      };
      statefulCartItem = statefulCartItemFactory.create();
      const cartItemLoadSuccess = new DaffCartItemLoadSuccess(statefulCartItem);
      const cartItemDeleteFailure = new DaffCartItemDeleteFailure(error, statefulCartItem.id);

      result = daffCartItemEntitiesReducer(daffCartItemEntitiesReducer(initialState, cartItemLoadSuccess), cartItemDeleteFailure);
    });

    it('should reset daffState on the cart item', () => {
      expect(result.entities[statefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.Error);
    });
  });

  describe('when CartItemUpdateFailureAction is triggered', () => {
    let statefulCartItem: DaffStatefulCartItem;
    let result;

    beforeEach(() => {
      error = {
        code: 'code',
        message: 'message',
      };
      statefulCartItem = statefulCartItemFactory.create();
      const cartItemLoadSuccess = new DaffCartItemLoadSuccess(statefulCartItem);
      const cartItemUpdateFailure = new DaffCartItemUpdateFailure(error, statefulCartItem.id);

      result = daffCartItemEntitiesReducer(daffCartItemEntitiesReducer(initialState, cartItemLoadSuccess), cartItemUpdateFailure);
    });

    it('should reset daffState on the cart item', () => {
      expect(result.entities[statefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.Error);
    });

    it('should add the error to the cart item\'s errors', () => {
      expect(result.entities[statefulCartItem.id].errors).toContain(error);
    });
  });

  describe('when CartCreateSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      const cartCreateSuccess = new DaffCartCreateSuccess(<DaffCart>{});

      result = daffCartItemEntitiesReducer(initialState, cartCreateSuccess);
    });

    it('should remove all cart item entities', () => {
      expect(result.entities).toEqual({});
    });
  });
});
