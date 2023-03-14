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
    expect(result.id).toEqual(String(mockAddress.id));
    expect(result.street).toEqual(mockAddress.street[0]);
    expect(result.street2).toEqual(mockAddress.street[1]);
    expect(result.city).toEqual(mockAddress.city);
    expect(result.region).toEqual(String(mockAddress.region.region_id));
    expect(result.region_code).toEqual(mockAddress.region.region_code);
    expect(result.country).toEqual(mockAddress.country_code);
    expect(result.country_id).toEqual(mockAddress.country_code);
    expect(result.postcode).toEqual(mockAddress.postcode);
    expect(result.firstname).toEqual(mockAddress.firstname);
    expect(result.lastname).toEqual(mockAddress.lastname);
    expect(result.telephone).toEqual(mockAddress.telephone);
    expect(result.email).toEqual(mockAddress.email);
    expect(result.defaultBilling).toEqual(mockAddress.default_billing);
    expect(result.defaultShipping).toEqual(mockAddress.default_shipping);
  });
});
