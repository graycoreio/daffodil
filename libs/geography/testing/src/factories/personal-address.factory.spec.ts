import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { DaffPersonalAddress } from '@daffodil/geography';

import {
  DaffPersonalAddressFactory,
  MockDaffPersonalAddress,
} from './personal-address.factory';

describe('Geography | Interfaces | Factories | DaffPersonalAddressFactory', () => {
  let factory;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [DaffPersonalAddressFactory],
    });

    factory = TestBed.inject(DaffPersonalAddressFactory);
  }));

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('creating an address', () => {
    let result: MockDaffPersonalAddress;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return an Address with firstname', () => {
      expect(result.firstname).toBeDefined();
    });

    it('should return an Address with lastname', () => {
      expect(result.lastname).toBeDefined();
    });

    it('should return an Address with an email', () => {
      expect(result.email).toBeDefined();
    });

    it('should return an Address with telephone', () => {
      expect(result.telephone).toBeDefined();
    });
  });

  describe('creating many addresses', () => {
    let result: DaffPersonalAddress[];

    it('should create as many cart addresses as desired', () => {
      result = factory.createMany(2);
      expect(result.length).toEqual(2);

      result = factory.createMany(3);
      expect(result.length).toEqual(3);
    });
  });
});
