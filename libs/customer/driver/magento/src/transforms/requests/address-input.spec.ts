import { TestBed } from '@angular/core/testing';

import { DaffCustomerAddress } from '@daffodil/customer';
import { MagentoCustomerAddressInput } from '@daffodil/customer/driver/magento';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';

import { magentoCustomerAddressInputTransform } from './address-input';

describe('@daffodil/customer/driver/magento | magentoCustomerAddressInputTransform', () => {
  let customerAddressFactory: DaffCustomerAddressFactory;
  let mockCustomerAddress: DaffCustomerAddress;

  let result: MagentoCustomerAddressInput;

  beforeEach(() => {
    customerAddressFactory = TestBed.inject(DaffCustomerAddressFactory);

    mockCustomerAddress = customerAddressFactory.create();

    result = magentoCustomerAddressInputTransform(mockCustomerAddress);
  });

  it('should transform fields', () => {
    expect(result.firstname).toEqual(mockCustomerAddress.firstname);
    expect(result.lastname).toEqual(mockCustomerAddress.lastname);
    expect(result.city).toEqual(mockCustomerAddress.city);
    expect(result.country_code).toEqual(mockCustomerAddress.country);
    expect(result.country_id).toEqual(mockCustomerAddress.country);
    expect(result.default_billing).toEqual(mockCustomerAddress.defaultBilling);
    expect(result.default_shipping).toEqual(mockCustomerAddress.defaultShipping);
    expect(result.middlename).toEqual(mockCustomerAddress.middlename);
    expect(result.postcode).toEqual(mockCustomerAddress.postcode);
    expect(result.prefix).toEqual(mockCustomerAddress.prefix);
    expect(result.region.region_id).toEqual(Number(mockCustomerAddress.region));
    expect(result.street).toEqual([
      mockCustomerAddress.street,
      mockCustomerAddress.street2,
    ]);
    expect(result.suffix).toEqual(mockCustomerAddress.suffix);
    expect(result.telephone).toEqual(mockCustomerAddress.telephone);
  });
});
