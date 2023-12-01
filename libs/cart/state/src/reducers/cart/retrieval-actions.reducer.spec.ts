
import { TestBed } from '@angular/core/testing';
import {
  Action,
  ActionReducer,
} from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartReducerState,
  daffCartReducerInitialState,
  DaffCartRetrievalAction,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

import { daffCartRetrievalActionsReducerFactory } from './retrieval-actions.reducer';

class DirectAction implements DaffCartRetrievalAction {
  type = 'direct';
  constructor(public payload: DaffCart) {}
}

class TransformAction implements Action {
  type = 'transform';
  constructor(public response: DaffCart) {}
}

describe('@daffodil/cart/state | daffCartRetrievalActionsReducerFactory', () => {
  let cartFactory: DaffCartFactory;
  let error: DaffStateError;
  let cart: DaffCart;
  let reducer: ActionReducer<DaffCartReducerState>;
  let result: DaffCartReducerState;

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);

    cart = cartFactory.create();
    error = {
      code: 'error code',
      message: 'error message',
    };

    reducer = daffCartRetrievalActionsReducerFactory([
      { type: 'direct' },
      { type: 'transform', transform: <any>((action: TransformAction) => action.response) },
    ]);
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      result = reducer(daffCartReducerInitialState, action);

      expect(result).toEqual(daffCartReducerInitialState);
    });
  });

  describe('when DirectAction is triggered', () => {
    beforeEach(() => {
      result = reducer(daffCartReducerInitialState, new DirectAction(cart));
    });

    it('should store the cart', () => {
      expect(result.cart).toEqual(cart);
    });
  });

  describe('when TransformAction is triggered', () => {
    beforeEach(() => {
      result = reducer(daffCartReducerInitialState, new TransformAction(cart));
    });

    it('should store the cart', () => {
      expect(result.cart).toEqual(cart);
    });
  });
});
