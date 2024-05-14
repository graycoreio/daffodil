import { TestBed } from '@angular/core/testing';

import { DaffCartItem } from '@daffodil/cart';
import { DaffCartItemFactory } from '@daffodil/cart/testing';

import { daffCartGetAffectedItems } from './get-affected-item';

describe('@daffodil/cart | daffCartGetAffectedItems', () => {
  let cartItemFactory: DaffCartItemFactory;
  let newItems: Array<DaffCartItem>;
  let oldItems: Array<DaffCartItem>;
  let result: Array<DaffCartItem['id']>;

  beforeEach(() => {
    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    oldItems = cartItemFactory.createMany(2);
    newItems = [
      {
        ...oldItems[0],
        qty: oldItems[0].qty + 1,
      },
      oldItems[1],
      cartItemFactory.create({
        id: `${oldItems[0].id}${oldItems[1].id}`,
      }),
    ];
    result = daffCartGetAffectedItems(oldItems, newItems);
  });

  it('should return updated cart items', () => {
    expect(result).toContain(newItems[0].id);
  });

  it('should return added cart items', () => {
    expect(result).toContain(newItems[2].id);
  });

  it('should not return unchanged cart items', () => {
    expect(result).not.toContain(newItems[1].id);
  });
});
