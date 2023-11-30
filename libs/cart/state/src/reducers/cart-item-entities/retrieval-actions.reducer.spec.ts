
import { TestBed } from '@angular/core/testing';
import { EntityState } from '@ngrx/entity';
import {
  Action,
  ActionReducer,
} from '@ngrx/store';

import {
  DaffCartItemStateEnum,
  DaffCartRetrievalAction,
  DaffStatefulCart,
  DaffStatefulCartItem,
  daffCartItemEntitiesAdapter,
} from '@daffodil/cart/state';
import { DaffStatefulCartItemFactory } from '@daffodil/cart/state/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

import { daffCartItemEntitiesRetrievalActionsReducerFactory } from './retrieval-actions.reducer';

class DirectAction implements DaffCartRetrievalAction {
  type = 'direct';
  constructor(public payload: DaffStatefulCart) {}
}

class TransformAction<T extends DaffStatefulCart = DaffStatefulCart> implements Action {
  type = 'transform';
  constructor(public response: T) {}
}

describe('@daffodil/cart/state | daffCartItemEntitiesRetrievalActionsReducerFactory', () => {
  let cartItemFactory: DaffStatefulCartItemFactory;
  let cartFactory: DaffCartFactory;

  let error: DaffStateError;
  let cart: DaffStatefulCart;
  let reducer: ActionReducer<EntityState<DaffStatefulCartItem>>;
  let result: EntityState<DaffStatefulCartItem>;
  let initialState: EntityState<DaffStatefulCartItem>;

  beforeEach(() => {
    initialState = daffCartItemEntitiesAdapter().getInitialState();
    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffStatefulCartItemFactory);

    cart = {
      ...cartFactory.create(),
      items: cartItemFactory.createMany(3),
    };
    error = {
      code: 'error code',
      message: 'error message',
    };

    reducer = daffCartItemEntitiesRetrievalActionsReducerFactory([
      { type: 'direct' },
      { type: 'transform', transform: <any>((action: TransformAction) => action.response) },
    ]);
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      result = reducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when DirectAction is triggered', () => {
    beforeEach(() => {
      result = reducer(initialState, new DirectAction(cart));
    });

    it('should store the cart items', () => {
      cart.items.forEach((item) => {
        expect(result.entities[item.id]).toEqual(item);
      });
    });

    describe('and when an incoming cart item has an existing daffState', () => {
      beforeEach(() => {
        cart.items[0].daffState = DaffCartItemStateEnum.New;
        result = reducer(initialState, new DirectAction(cart));
      });

      it('should retain the existing daffState', () => {
        expect(result.entities[cart.items[0].id].daffState).toEqual(cart.items[0].daffState);
      });
    });

    describe('and when an incoming cart item does not have an existing daffState', () => {
      beforeEach(() => {
        cart.items[0].daffState = undefined;
        result = reducer(initialState, new DirectAction(cart));
      });

      describe('and the item in state has an existing daffState', () => {
        let state: EntityState<DaffStatefulCartItem>;

        beforeEach(() => {
          state = daffCartItemEntitiesAdapter().addOne({
            ...cart.items[0],
            daffState: DaffCartItemStateEnum.New,
          }, initialState);
          result = reducer(state, new DirectAction(cart));
        });

        it('should retain the existing daffState in entity state', () => {
          expect(result.entities[cart.items[0].id].daffState).toEqual(state.entities[cart.items[0].id].daffState);
        });
      });

      describe('and the item in state does not have an existing daffState', () => {
        let state: EntityState<DaffStatefulCartItem>;

        beforeEach(() => {
          state = daffCartItemEntitiesAdapter().addOne({
            ...cart.items[0],
            daffState: undefined,
          }, initialState);
          result = reducer(state, new DirectAction(cart));
        });

        it('should initialize the daffState field', () => {
          expect(result.entities[cart.items[0].id].daffState).toEqual(DaffCartItemStateEnum.Default);
        });
      });
    });
  });

  describe('when TransformAction is triggered', () => {
    beforeEach(() => {
      result = reducer(initialState, new TransformAction(cart));
    });

    it('should store the cart items', () => {
      cart.items.forEach((item) => {
        expect(result.entities[item.id]).toEqual(item);
      });
    });

    describe('when an incoming cart item has an existing daffState', () => {
      beforeEach(() => {
        cart.items[0].daffState = DaffCartItemStateEnum.New;
        result = reducer(initialState, new TransformAction(cart));
      });

      it('should retain the existing daffState', () => {
        expect(result.entities[cart.items[0].id].daffState).toEqual(cart.items[0].daffState);
      });
    });

    describe('when an incoming cart item does not have an existing daffState', () => {
      beforeEach(() => {
        cart.items[0].daffState = undefined;
        result = reducer(initialState, new TransformAction(cart));
      });

      describe('and the item in state has an existing daffState', () => {
        let state: EntityState<DaffStatefulCartItem>;

        beforeEach(() => {
          state = daffCartItemEntitiesAdapter().addOne({
            ...cart.items[0],
            daffState: DaffCartItemStateEnum.New,
          }, initialState);
          result = reducer(state, new TransformAction(cart));
        });

        it('should retain the existing daffState in entity state', () => {
          expect(result.entities[cart.items[0].id].daffState).toEqual(state.entities[cart.items[0].id].daffState);
        });
      });

      describe('and the item in state does not have an existing daffState', () => {
        let state: EntityState<DaffStatefulCartItem>;

        beforeEach(() => {
          state = daffCartItemEntitiesAdapter().addOne({
            ...cart.items[0],
            daffState: undefined,
          }, initialState);
          result = reducer(state, new TransformAction(cart));
        });

        it('should initialize the daffState field', () => {
          expect(result.entities[cart.items[0].id].daffState).toEqual(DaffCartItemStateEnum.Default);
        });
      });
    });
  });
});
