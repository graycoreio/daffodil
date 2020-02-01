import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import * as faker from 'faker/locale/en_US';

import { CartItem } from '../../models/cart-item';
import { ProductVariantNodeFactory } from './product-variant-node.factory';

export class MockCartItem implements CartItem {
  id = faker.random.uuid();
  quantity = faker.random.number(100);
  title = faker.random.word();
  variant = this.productVariantNode();

  private productVariantNode() {
    return (new ProductVariantNodeFactory()).create();
  }
}

@Injectable({
  providedIn: 'root'
})
export class CartItemFactory extends DaffModelFactory<CartItem> {
  constructor() {
    super(MockCartItem);
  }
}
