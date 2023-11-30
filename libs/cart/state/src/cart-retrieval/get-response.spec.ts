import { TestBed } from '@angular/core/testing';
import { Action } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartRetrievalAction,
  DaffCartRetrievalActionInjection,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { daffCartRetrievalGetResponse } from './get-response';

class DirectAction implements DaffCartRetrievalAction {
  type = 'direct';
  constructor(public payload: DaffCart) {}
}

class TransformAction implements Action {
  type = 'transform';
  constructor(public response: DaffCart) {}
}

describe('@daffodil/cart/state | daffCartRetrievalGetResponse', () => {
  let result: Partial<DaffCart> | null;
  let actions: DaffCartRetrievalActionInjection[];
  let cartFactory: DaffCartFactory;
  let mockCart: DaffCart;

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);

    mockCart = cartFactory.create();
    actions = [
      { type: 'direct' },
      { type: 'transform', transform: <any>((action: TransformAction) => action.response) },
    ];
  });

  describe('when the action is not a recognized retrieval action', () => {
    beforeEach(() => {
      result = daffCartRetrievalGetResponse(
        { type: 'unknown' },
        actions,
      );
    });

    it('should return null', () => {
      expect(result).toBeNull();
    });
  });

  describe('when the action is direct', () => {
    beforeEach(() => {
      result = daffCartRetrievalGetResponse(
        new DirectAction(mockCart),
        actions,
      );
    });

    it('should return the cart', () => {
      expect(result).toEqual(mockCart);
    });
  });

  describe('when the action is transform', () => {
    beforeEach(() => {
      result = daffCartRetrievalGetResponse(
        new TransformAction(mockCart),
        actions,
      );
    });

    it('should return the cart', () => {
      expect(result).toEqual(mockCart);
    });
  });
});
