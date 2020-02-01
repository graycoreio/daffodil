import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import * as faker from 'faker/locale/en_US';

import { ProductVariantNode } from '../../models/product-variant-node';
import { ProductNodeFactory } from './product-node.factory';
import { ImageNodeFactory } from './image-node.factory';

export class MockProductVariantNode implements ProductVariantNode {
  id = faker.random.uuid();
  image = this.imageNode();
  priceV2 = {
    amount: faker.random.number(1500)
  };
  sku = faker.random.alphaNumeric(20);
  weight = faker.random.number(1000);
  product = this.productNode();

  private productNode() {
    return (new ProductNodeFactory()).create();
  }

  private imageNode() {
    return (new ImageNodeFactory()).create();
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductVariantNodeFactory extends DaffModelFactory<ProductVariantNode> {
  constructor() {
    super(MockProductVariantNode);
  }
}
