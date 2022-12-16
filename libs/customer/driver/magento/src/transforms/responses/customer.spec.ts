import { TestBed } from '@angular/core/testing';

import { DaffCustomer } from '@daffodil/customer';
import { MagentoCustomer } from '@daffodil/customer/driver/magento';
import { MagentoCustomerFactory } from '@daffodil/customer/driver/magento/testing';

import { magentoCustomerTransform } from './customer';

describe('@daffodil/customer/driver/magento | magentoCustomerTransform', () => {
  let customerFactory: MagentoCustomerFactory;
  let mockCustomer: MagentoCustomer;
  let result: DaffCustomer;

  beforeEach(() => {
    customerFactory = TestBed.inject(MagentoCustomerFactory);

    mockCustomer = customerFactory.create();

    result = magentoCustomerTransform(mockCustomer);
  });

  it('should transform fields', () => {
    expect(result.id).toEqual(mockCustomer.email);
    expect(result.email).toEqual(mockCustomer.email);
    expect(result.firstName).toEqual(mockCustomer.firstname);
    expect(result.lastName).toEqual(mockCustomer.lastname);
    expect(result.isSubscribed).toEqual(mockCustomer.is_subscribed);
  });

  it('should transform addresses', () => {
    expect(result.addresses).toEqual(mockCustomer.addresses.map(({ id }) => jasmine.objectContaining({ id })));
  });
});
