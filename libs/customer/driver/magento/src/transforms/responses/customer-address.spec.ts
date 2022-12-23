import { TestBed } from '@angular/core/testing';

import { DaffCustomerAddress } from '@daffodil/customer';
import { MagentoCustomerAddress } from '@daffodil/customer/driver/magento';
import { MagentoCustomerAddressFactory } from '@daffodil/customer/driver/magento/testing';

import { magentoCustomerAddressTransform } from './customer-address';

describe('@daffodil/customer/driver/magento | magentoCustomerAddressTransform', () => {
  let addressFactory: MagentoCustomerAddressFactory;
  let mockAddress: MagentoCustomerAddress;
  let result: DaffCustomerAddress;

  beforeEach(() => {
    addressFactory = TestBed.inject(MagentoCustomerAddressFactory);

    mockAddress = addressFactory.create();

    result = magentoCustomerAddressTransform(mockAddress);
  });

  it('should transform', () => {
    expect(result.id).toEqual(mockAddress.id);
    expect(result.street).toEqual(mockAddress.street[0]);
    expect(result.city).toEqual(mockAddress.city);
    expect(result.region).toEqual(mockAddress.region.region_code);
    expect(result.country).toEqual(mockAddress.country_code);
    expect(result.country_id).toEqual(mockAddress.country_code);
    expect(result.postcode).toEqual(mockAddress.postcode);
    expect(result.firstname).toEqual(mockAddress.firstname);
    expect(result.lastname).toEqual(mockAddress.lastname);
    expect(result.telephone).toEqual(mockAddress.telephone);
    expect(result.email).toEqual(mockAddress.email);
  });
});
