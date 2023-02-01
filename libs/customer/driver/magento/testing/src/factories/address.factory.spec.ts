import { TestBed } from '@angular/core/testing';

import { MagentoCustomerAddress } from '@daffodil/customer/driver/magento';

import { MagentoCustomerAddressFactory } from './address.factory';

describe('@daffodil/customer/driver/magento/testing | CustomerAddressFactory', () => {
  let factory: MagentoCustomerAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCustomerAddressFactory],
    });

    factory = TestBed.inject(MagentoCustomerAddressFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCustomerAddress;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a CustomerAddress with all required fields defined', () => {
      expect(result.region.region_code).toBeDefined();
      expect(result.region.region_id).toBeDefined();
      expect(result.country_code).toBeDefined();
      expect(result.street[0]).toBeDefined();
      expect(result.company).toBeDefined();
      expect(result.telephone).toBeDefined();
      expect(result.postcode).toBeDefined();
      expect(result.city).toBeDefined();
      expect(result.firstname).toBeDefined();
      expect(result.lastname).toBeDefined();
      expect(result.email).toBeDefined();
      expect(result.default_billing).toBeDefined();
      expect(result.default_shipping).toBeDefined();
    });
  });
});
