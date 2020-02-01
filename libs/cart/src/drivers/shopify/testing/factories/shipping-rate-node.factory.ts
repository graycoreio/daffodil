import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import * as faker from 'faker/locale/en_US';

import { ShippingRateNode } from '../../models/shipping-rate-node';

export class MockCartShippingRate implements ShippingRateNode {
  handle = faker.random.word();
  priceV2 = {
    amount: faker.random.number(1500)
  };
}

@Injectable({
  providedIn: 'root'
})
export class ShippingRateNodeFactory extends DaffModelFactory<ShippingRateNode> {
  constructor() {
    super(MockCartShippingRate);
  }
}
