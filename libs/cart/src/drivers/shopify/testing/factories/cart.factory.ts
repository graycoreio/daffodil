import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';

import { MailingAddressNode } from '../../models/mailing-address-node';
import { Cart } from '../../models/cart';
import { ShippingRateNode } from '../../models/shipping-rate-node';
import { CheckoutLineItemConnection } from '../../models/checkout-line-item-connection';
import { MailingAddressFactory } from './mailing-address.factory';
import { ShippingRateNodeFactory } from './shipping-rate-node.factory';
import { CartItemFactory } from './cart-item.factory';

export class MockCart implements Cart {
  id = faker.random.uuid();
  createdAt = (new Date()).toString();
  updatedAt = (new Date()).toString();
  totalPriceV2 = {
    amount: faker.random.number(1500)
  };
  subtotalPriceV2 = {
    amount: faker.random.number(1500)
  };
  lineItemsSubtotalPrice = {
    amount: faker.random.number(1500)
  };
  shippingAddress = this.mailingAddressNode();
  shippingLine = this.shippingRateNode();
  lineItems = this.checkoutLineItemsConnection();
  currencyCode = faker.random.word();

  store_to_base_rate = faker.random.number(1500);
  grand_total = faker.random.number(1500);
  checkout_method = 'card';
  customer_id = faker.random.uuid();
  coupon_code = faker.random.number(100000).toString();
  subtotal = faker.random.number(1500);
  subtotal_with_discount = faker.random.number(1500);
  items = [];
  addresses = [];
  payment = null;

  private mailingAddressNode () {
    return (new MailingAddressFactory()).create();
  }

  private shippingRateNode () {
    return (new ShippingRateNodeFactory()).create();
  }

  private checkoutLineItemsConnection (): CheckoutLineItemConnection {
    const factory = new CartItemFactory();

    return {
      edges: factory.createMany(
        faker.random.number(10)
      ).map(item => ({
        node: item
      }))
    }
  }
};


@Injectable({
  providedIn: 'root'
})
export class CartFactory extends DaffModelFactory<Cart>{
  constructor() {
    super(MockCart);
  }
}
