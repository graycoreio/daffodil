import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartItem,
} from '@daffodil/cart';
import {
  DaffCartItemListSuccess,
  DaffCartItemLoadSuccess,
  DaffCartItemDelete,
  DaffCartItemStateReset,
  DaffCartItemUpdate,
  DaffCartCreateSuccess,
  daffCartItemEntitiesAdapter,
} from '@daffodil/cart/state';
import { DaffStatefulCartItemFactory } from '@daffodil/cart/state/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';
import {
  DaffOperationEntity,
  DaffOperationEntityState,
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { daffCartItemEntitiesReducer } from './cart-item-entities.reducer';

describe('@daffodil/cart/state | daffCartItemEntitiesReducer', () => {
  let error: DaffStateError;
  let statefulCartItemFactory: DaffStatefulCartItemFactory;
  let cartFactory: DaffCartFactory;
  const initialState = daffCartItemEntitiesAdapter().getInitialState();

  beforeEach(() => {
    statefulCartItemFactory = TestBed.inject(DaffStatefulCartItemFactory);
    cartFactory = TestBed.inject(DaffCartFactory);

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

  describe('when CartItemListSuccessAction is triggered', () => {

    let cartItems: DaffOperationEntity<DaffCartItem>[];
    let result: DaffOperationEntityState<DaffOperationEntity<DaffCartItem>>;

    beforeEach(() => {
      cartItems = statefulCartItemFactory.createMany(2);
      const cartItemListSuccess = new DaffCartItemListSuccess(cartItems);

      result = daffCartItemEntitiesReducer(initialState, cartItemListSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected statefulCartItem on state', () => {
      expect(result.entities[cartItems[0].id].id).toEqual(cartItems[0].id);
    });

    it('should reset the cart item\'s errors', () => {
      expect(result.entities[cartItems[0].id].daffErrors).toEqual([]);
    });
  });

  describe('when CartItemLoadSuccessAction is triggered', () => {

    let statefulCartItem: DaffOperationEntity<DaffCartItem>;
    let result: DaffOperationEntityState<DaffOperationEntity<DaffCartItem>>;

    beforeEach(() => {
      statefulCartItem = statefulCartItemFactory.create();
      const cartItemLoadSuccess = new DaffCartItemLoadSuccess(statefulCartItem);

      result = daffCartItemEntitiesReducer(initialState, cartItemLoadSuccess);
    });

    it('sets expected statefulCartItem on state', () => {
      expect(result.entities[statefulCartItem.id]).toEqual(statefulCartItem);
    });

    it('should reset the cart item\'s errors', () => {
      expect(result.entities[statefulCartItem.id].daffErrors).toEqual([]);
    });
  });

  describe('when CartItemStateResetAction is triggered', () => {

    let stubCartItem: DaffOperationEntity<DaffCartItem>;
    let result: DaffOperationEntityState<DaffOperationEntity<DaffCartItem>>;
    let testInitialState;

    beforeEach(() => {
      stubCartItem = statefulCartItemFactory.create();
      testInitialState = {
        ids: [stubCartItem.id.toString()],
        entities: {
          [stubCartItem.id]: {
            ...stubCartItem,
            daffState: DaffState.Added,
          },
        },
      };
      const cartItemStateReset = new DaffCartItemStateReset(stubCartItem.id);

      result = daffCartItemEntitiesReducer(testInitialState, cartItemStateReset);
    });

    it('resets the state of all the cart items to default', () => {
      expect(result.entities[stubCartItem.id].daffState).toEqual(DaffState.Stable);
    });
  });

  describe('when CartItemUpdateAction is triggered', () => {

    let stubStatefulCartItem: DaffOperationEntity<DaffCartItem>;
    let result: DaffOperationEntityState<DaffOperationEntity<DaffCartItem>>;
    let testInitialState;

    beforeEach(() => {
      stubStatefulCartItem = statefulCartItemFactory.create();
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
      expect(result.entities[stubStatefulCartItem.id].daffState).toEqual(DaffState.Updating);
    });
  });

  describe('when CartItemDeleteAction is triggered', () => {

    let stubCartItem: DaffOperationEntity<DaffCartItem>;
    let result: DaffOperationEntityState<DaffOperationEntity<DaffCartItem>>;
    let testInitialState;

    beforeEach(() => {
      stubCartItem = statefulCartItemFactory.create();
      testInitialState = {
        ids: [stubCartItem.id.toString()],
        entities: {
          [stubCartItem.id]: stubCartItem,
        },
      };
      const cartItemDeleteAction = new DaffCartItemDelete(stubCartItem.id);

      result = daffCartItemEntitiesReducer(testInitialState, cartItemDeleteAction);
    });

    it('sets the cart item state to deleting', () => {
      expect(result.entities[stubCartItem.id].daffState).toEqual(DaffState.Deleting);
    });
  });

  describe('when CartCreateSuccessAction is triggered', () => {
    let result: DaffOperationEntityState<DaffOperationEntity<DaffCartItem>>;

    beforeEach(() => {
      const cartCreateSuccess = new DaffCartCreateSuccess(<DaffCart>{});

      result = daffCartItemEntitiesReducer(initialState, cartCreateSuccess);
    });

    it('should remove all cart item entities', () => {
      expect(result.entities).toEqual({});
    });
  });
});
