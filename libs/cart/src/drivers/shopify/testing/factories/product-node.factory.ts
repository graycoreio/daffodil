import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import * as faker from 'faker/locale/en_US';

import { ProductNode } from '../../models/product-node';

export class MockProductNode implements ProductNode {
  id = faker.random.uuid();
  description = faker.random.words(faker.random.number(20));
}

@Injectable({
  providedIn: 'root'
})
export class ProductNodeFactory extends DaffModelFactory<ProductNode> {
  constructor() {
    super(MockProductNode);
  }
}
