import { TestBed } from '@angular/core/testing';

import { DaffCustomer } from '@daffodil/customer';
import { MagentoCustomerInput } from '@daffodil/customer/driver/magento';
import { DaffCustomerFactory } from '@daffodil/customer/testing';

import { magentoCustomerInputTransform } from './customer-input';

describe('@daffodil/customer/driver/magento | magentoCustomerInputTransform', () => {
  let customerFactory: DaffCustomerFactory;
  let mockCustomer: DaffCustomer;

  let result: MagentoCustomerInput;

  beforeEach(() => {
    customerFactory = TestBed.inject(DaffCustomerFactory);

    mockCustomer = customerFactory.create();

    result = magentoCustomerInputTransform(mockCustomer);
  });

  it('should transform firstname', () => {
    expect(result.firstname).toEqual(mockCustomer.firstName);
  });

  it('should transform lastname', () => {
    expect(result.lastname).toEqual(mockCustomer.lastName);
  });
});
