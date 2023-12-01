import { TestBed } from '@angular/core/testing';
import { EntityState } from '@ngrx/entity';

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
  daffCartItemEntitiesAdapter,
} from '@daffodil/cart/state';
import { DaffStatefulCartItemFactory } from '@daffodil/cart/state/testing';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

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

  describe('when an existing cart item does not have a default daffState', () => {
    let result: EntityState<DaffStatefulCartItem>;
    let stubStatefulCartItem: DaffStatefulCartItem;
    let initialStateWithCartItem: EntityState<DaffStatefulCartItem>;

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
  });

  describe('when CartItemListSuccessAction is triggered', () => {

    let cartItems: DaffStatefulCartItem[];
    let result: EntityState<DaffStatefulCartItem>;

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
      expect(result.entities[cartItems[0].id].daffErrors).toEqual([]);
    });
  });

  describe('when CartItemLoadSuccessAction is triggered', () => {

    let statefulCartItem: DaffStatefulCartItem;
    let result: EntityState<DaffStatefulCartItem>;

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

    let stubCartItem: DaffStatefulCartItem;
    let result: EntityState<DaffStatefulCartItem>;
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
    let result: EntityState<DaffStatefulCartItem>;
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
    let result: EntityState<DaffStatefulCartItem>;
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
    let result: EntityState<DaffStatefulCartItem>;

    beforeEach(() => {
      error = {
        code: 'code',
        message: 'message',
      };
      statefulCartItem = statefulCartItemFactory.create();
      const cartItemLoadSuccess = new DaffCartItemLoadSuccess(statefulCartItem);
      const cartItemLoadFailure = new DaffCartItemLoadFailure([error], statefulCartItem.id);

      result = daffCartItemEntitiesReducer(daffCartItemEntitiesReducer(initialState, cartItemLoadSuccess), cartItemLoadFailure);
    });

    it('should reset daffState on the cart item', () => {
      expect(result.entities[statefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.Error);
    });
  });

  describe('when CartItemDeleteFailureAction is triggered', () => {
    let statefulCartItem: DaffStatefulCartItem;
    let result: EntityState<DaffStatefulCartItem>;

    beforeEach(() => {
      error = {
        code: 'code',
        message: 'message',
      };
      statefulCartItem = statefulCartItemFactory.create();
      const cartItemLoadSuccess = new DaffCartItemLoadSuccess(statefulCartItem);
      const cartItemDeleteFailure = new DaffCartItemDeleteFailure([error], statefulCartItem.id);

      result = daffCartItemEntitiesReducer(daffCartItemEntitiesReducer(initialState, cartItemLoadSuccess), cartItemDeleteFailure);
    });

    it('should reset daffState on the cart item', () => {
      expect(result.entities[statefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.Error);
    });
  });

  describe('when CartItemUpdateFailureAction is triggered', () => {
    let statefulCartItem: DaffStatefulCartItem;
    let result: EntityState<DaffStatefulCartItem>;

    beforeEach(() => {
      error = {
        code: 'code',
        message: 'message',
      };
      statefulCartItem = statefulCartItemFactory.create();
      const cartItemLoadSuccess = new DaffCartItemLoadSuccess(statefulCartItem);
      const cartItemUpdateFailure = new DaffCartItemUpdateFailure([error], statefulCartItem.id);

      result = daffCartItemEntitiesReducer(daffCartItemEntitiesReducer(initialState, cartItemLoadSuccess), cartItemUpdateFailure);
    });

    it('should reset daffState on the cart item', () => {
      expect(result.entities[statefulCartItem.id].daffState).toEqual(DaffCartItemStateEnum.Error);
    });

    it('should add the error to the cart item\'s errors', () => {
      expect(result.entities[statefulCartItem.id].daffErrors).toContain(error);
    });
  });

  describe('when CartCreateSuccessAction is triggered', () => {
    let result: EntityState<DaffStatefulCartItem>;

    beforeEach(() => {
      const cartCreateSuccess = new DaffCartCreateSuccess(<DaffCart>{});

      result = daffCartItemEntitiesReducer(initialState, cartCreateSuccess);
    });

    it('should remove all cart item entities', () => {
      expect(result.entities).toEqual({});
    });
  });
});
