import { TestBed, waitForAsync } from '@angular/core/testing';

import { DaffAddress } from '@daffodil/geography';

import { DaffAddressFactory, MockDaffAddress } from './address.factory';

describe('Geography | Interfaces | Factories | DaffAddressFactory', () => {

  let daffodilAddressFactory;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [DaffAddressFactory]
    });

    daffodilAddressFactory = TestBed.inject(DaffAddressFactory);
  }));

  it('should be created', () => {
    expect(daffodilAddressFactory).toBeTruthy();
  });

  describe('creating an address', () => {

    let result: MockDaffAddress;

    beforeEach(() => {
      result = daffodilAddressFactory.create();
    });

    it('should return an Address with street', () => {
      expect(result.street).toBeDefined();
    });

    it('should return an Address with city', () => {
      expect(result.city).toBeDefined();
    });

    it('should return an Address with region', () => {
      expect(result.region).toBeDefined();
    });

    it('should return an Address with postcode', () => {
      expect(result.postcode).toBeDefined();
    });
  });

  describe('creating many addresses', () => {
    let result: DaffAddress[];

    it('should create as many cart addresses as desired', () => {
      result = daffodilAddressFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = daffodilAddressFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  });
});
