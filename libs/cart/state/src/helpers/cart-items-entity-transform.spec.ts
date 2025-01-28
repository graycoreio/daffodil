import { TestBed } from '@angular/core/testing';

import { DaffCartItem } from '@daffodil/cart';
import { DaffCartItemFactory } from '@daffodil/cart/testing';
import { daffArrayToDict } from '@daffodil/core';
import {
  DaffOperationEntity,
  DaffState,
} from '@daffodil/core/state';

import { daffCartItemsEntityTransform } from './cart-items-entity-transform';

describe('@daffodil/cart/state | daffCartItemsEntityTransform', () => {
  let cartItemFactory: DaffCartItemFactory;
  let cartItem: DaffCartItem;
  let incomingCartItem: DaffCartItem;
  let result: Array<DaffOperationEntity<DaffCartItem>>;

  beforeEach(() => {
    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    cartItem = cartItemFactory.create();
  });

  describe('when the incoming cart item exists in the collection', () => {
    beforeEach(() => {
      incomingCartItem = cartItemFactory.create({
        id: cartItem.id,
        qty: cartItem.qty + 1,
      });
      result = daffCartItemsEntityTransform(daffArrayToDict([cartItem], (item) => item.id), [incomingCartItem]);
    });

    it('should set the cart item state to mutated', () => {
      expect(result.find((item) => item.id === cartItem.id).daffState).toEqual(DaffState.Updated);
    });

    it('should set operation entity values', () => {
      result.forEach((item) => {
        expect(item.daffErrors).toBeDefined();
        expect(item.daffState).toBeDefined();
        expect(item.daffTemp).toBeDefined();
      });
    });
  });

  describe('when the incoming cart item does not exist in the collection', () => {
    beforeEach(() => {
      incomingCartItem = cartItemFactory.create({
        id: `new ${cartItem.id}`,
      });
      result = daffCartItemsEntityTransform(daffArrayToDict([cartItem], (item) => item.id), [incomingCartItem]);
    });

    it('should set the incoming cart item state to added', () => {
      expect(result.find((item) => item.id === incomingCartItem.id).daffState).toEqual(DaffState.Added);
    });

    it('should set operation entity values', () => {
      result.forEach((item) => {
        expect(item.daffErrors).toBeDefined();
        expect(item.daffState).toBeDefined();
        expect(item.daffTemp).toBeDefined();
      });
    });
  });
});
