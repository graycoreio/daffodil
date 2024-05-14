import { TestBed } from '@angular/core/testing';

import { DaffCartItem } from '@daffodil/cart';
import { DaffCartItemFactory } from '@daffodil/cart/testing';

import { daffCartGetItemTotalDiscount } from './get-item-total-discount';

describe('@daffodil/cart | daffCartGetItemTotalDiscount', () => {
  let cartItemFactory: DaffCartItemFactory;
  let cartItem: DaffCartItem;

  beforeEach(() => {
    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    cartItem = cartItemFactory.create();
  });

  it('should return the summed value of all the item\'s discounts', () => {
    cartItem.discounts = [
      {
        amount: 1,
        label: 'discount1',
      },
      {
        amount: 2,
        label: 'discount2',
      },
    ];

    expect(daffCartGetItemTotalDiscount(cartItem)).toEqual(3);
  });
});
