import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import * as faker from 'faker/locale/en_US';

import { MailingAddress } from '../../models/mailing-address';
import { ShippingRateNodeFactory } from './shipping-rate-node.factory';

export class MockMailingAddress implements MailingAddress {
  id = faker.random.uuid();
  customer_id = faker.random.uuid();
  address1 = faker.random.word();
  address2 = faker.random.word();
  city = faker.random.word();
  company = faker.random.word();
  country = faker.random.word();
  firstName = faker.random.word();
  lastName = faker.random.word();
  phone = faker.random.word();
  province = faker.random.word();
  zip = faker.random.number(99999).toString();
  shipping_rate = this.shippingRateNode();

  private shippingRateNode () {
    return (new ShippingRateNodeFactory()).create();
  }
}

@Injectable({
  providedIn: 'root'
})
export class MailingAddressFactory extends DaffModelFactory<MailingAddress> {
  constructor() {
    super(MockMailingAddress);
  }
}
