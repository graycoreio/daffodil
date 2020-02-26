import { Injectable } from '@angular/core';

import { MagentoShippingAddress } from '@daffodil/cart';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MockMagentoCartAddress } from './cart-address.factory';

export class MockMagentoShippingAddress extends MockMagentoCartAddress implements MagentoShippingAddress {
  available_shipping_methods = [];
  selected_shipping_method = null;
}

@Injectable({
  providedIn: 'root'
})
export class MagentoShippingAddressFactory extends DaffModelFactory<MagentoShippingAddress> {
  constructor() {
    super(MockMagentoShippingAddress);
  }
}
