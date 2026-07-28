import { TestBed } from '@angular/core/testing';

import { MagentoOrderAddress } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderAddressFactory } from './order-address.factory';

describe('@daffodil/order/magento/2.4.1/testing | OrderAddressFactory', () => {

  let orderAddressFactory: MagentoOrderAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderAddressFactory],
    });

    orderAddressFactory = TestBed.inject(MagentoOrderAddressFactory);
  });

  it('should be created', () => {
    expect(orderAddressFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoOrderAddress;

    beforeEach(() => {
      result = orderAddressFactory.create();
    });

    it('should return a MagentoOrderAddress with all required fields defined', () => {
      expect(result.city).toBeDefined();
      expect(result.company).toBeDefined();
      expect(result.country_code).toBeDefined();
      expect(result.fax).toBeDefined();
      expect(result.firstname).toBeDefined();
      expect(result.middlename).toBeDefined();
      expect(result.lastname).toBeDefined();
      expect(result.postcode).toBeDefined();
      expect(result.prefix).toBeDefined();
      expect(result.region_id).toBeDefined();
      expect(result.region_code).toBeDefined();
      expect(result.street).toBeDefined();
      expect(result.suffix).toBeDefined();
      expect(result.telephone).toBeDefined();
    });
  });
});
