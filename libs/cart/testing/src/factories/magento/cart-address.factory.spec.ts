import { TestBed } from '@angular/core/testing';

import { MagentoCartAddressFactory } from './cart-address.factory';
import { MagentoCartAddress } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartAddressFactory', () => {
  let cartItemFactory: MagentoCartAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartAddressFactory]
    });

    cartItemFactory = TestBed.get(MagentoCartAddressFactory);
  });

  it('should be created', () => {
    expect(cartItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCartAddress;

    beforeEach(() => {
      result = cartItemFactory.create();
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
    });
  });

  describe('createMany', () => {
    let result: MagentoCartAddress[];

    it('should create as many cart items as desired', () => {
      const spy = spyOn(cartItemFactory, 'create');

      result = cartItemFactory.createMany(2);
      expect(result.length).toEqual(2);
      expect(cartItemFactory.create).toHaveBeenCalledTimes(2);

      spy.calls.reset();

      result = cartItemFactory.createMany(3);
      expect(result.length).toEqual(3);
      expect(cartItemFactory.create).toHaveBeenCalledTimes(3);
    });
  })
});
