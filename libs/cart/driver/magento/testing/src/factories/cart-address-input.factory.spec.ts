import { TestBed } from '@angular/core/testing';

import { MagentoCartAddressInput } from '@daffodil/cart/driver/magento';

import { MagentoCartAddressInputFactory } from './cart-address-input.factory';

describe('Cart | Testing | Factories | CartAddressInputFactory', () => {
  let factory: MagentoCartAddressInputFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartAddressInputFactory],
    });

    factory = TestBed.inject(MagentoCartAddressInputFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCartAddressInput;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a CartAddressInput with all required fields defined', () => {
      expect(result.region_id).toBeDefined();
      expect(result.country_code).toBeDefined();
      expect(result.street[0]).toBeDefined();
      expect(result.company).toBeDefined();
      expect(result.telephone).toBeDefined();
      expect(result.postcode).toBeDefined();
      expect(result.city).toBeDefined();
      expect(result.firstname).toBeDefined();
      expect(result.lastname).toBeDefined();
      expect(result.save_in_address_book).toBeDefined();
    });
  });
});
