import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoCustomerAddressFactory } from '@daffodil/customer/driver/magento/testing';
import {
  MagentoTokenBaseCard,
  MagentoTokenBaseCardTypeCode,
} from '@daffodil/customer-payment-authorizenet/driver/magento';

export class MockMagentoTokenBaseCard implements MagentoTokenBaseCard {
  __typename = <const>'TokenBaseCard';
  hash = faker.datatype.uuid();
  address = this.addressFactory.create();
  customer_email = faker.internet.email();
  customer_id = faker.helpers.unique(faker.datatype.number);
  method = faker.random.word();
  active = faker.datatype.boolean();
  created_at = faker.date.past().toString();
  updated_at = faker.date.past().toString();
  last_use = faker.date.past().toString();
  expires = faker.date.past().toString();
  label = faker.random.word();
  additional = {
    cc_type: faker.helpers.arrayElement(Object.values(MagentoTokenBaseCardTypeCode)),
    cc_owner: faker.person.fullName(),
    cc_last4: faker.finance.creditCardNumber().slice(4),
    cc_exp_year: faker.date.future().getMonth().toString(),
    cc_exp_month: faker.date.future().getFullYear().toString(),
  };

  constructor(
    protected addressFactory: MagentoCustomerAddressFactory,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class MagentoTokenBaseCardFactory extends DaffModelFactory<MagentoTokenBaseCard> {
  constructor(
    addressFactory: MagentoCustomerAddressFactory,
  ) {
    super(MockMagentoTokenBaseCard, addressFactory);
  }
}
