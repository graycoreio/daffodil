import { TestBed } from '@angular/core/testing';

import { MagentoCartAddressFactory } from './cart-address.factory';
import { MagentoCartAddress } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartAddressFactory', () => {
  let factory: MagentoCartAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartAddressFactory]
    });

    factory = TestBed.get(MagentoCartAddressFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCartAddress;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a CartAddress with all required fields defined', () => {
      expect(result.region.code).toBeDefined();
      expect(result.region.label).toBeDefined();
      expect(result.country.code).toBeDefined();
      expect(result.country.label).toBeDefined();
      expect(result.street[0]).toBeDefined();
      expect(result.company).toBeDefined();
      expect(result.telephone).toBeDefined();
      expect(result.postcode).toBeDefined();
      expect(result.city).toBeDefined();
      expect(result.firstname).toBeDefined();
      expect(result.lastname).toBeDefined();
      expect(result.email).toBeDefined();
    });
  });
});
