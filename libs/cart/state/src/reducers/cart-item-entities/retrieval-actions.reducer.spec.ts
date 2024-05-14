
import { TestBed } from '@angular/core/testing';
import {
  Action,
  ActionReducer,
} from '@ngrx/store';

import { DaffCartItem } from '@daffodil/cart';
import {
  DaffCartRetrievalAction,
  daffCartItemEntitiesAdapter,
  DaffStatefulCart,
} from '@daffodil/cart/state';
import { DaffStatefulCartItemFactory } from '@daffodil/cart/state/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';
import {
  DaffOperationEntity,
  DaffOperationEntityState,
  DaffStateError,
} from '@daffodil/core/state';

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
  let reducer: ActionReducer<DaffOperationEntityState<DaffOperationEntity<DaffCartItem>>>;
  let result: DaffOperationEntityState<DaffOperationEntity<DaffCartItem>>;
  let initialState: DaffOperationEntityState<DaffOperationEntity<DaffCartItem>>;

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
        expect(result.entities[item.id].id).toEqual(item.id);
      });
    });
  });

  describe('when TransformAction is triggered', () => {
    beforeEach(() => {
      result = reducer(initialState, new TransformAction(cart));
    });

    it('should store the cart items', () => {
      cart.items.forEach((item) => {
        expect(result.entities[item.id].id).toEqual(item.id);
      });
    });
  });
});
