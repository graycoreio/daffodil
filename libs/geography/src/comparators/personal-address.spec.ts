import { TestBed } from '@angular/core/testing';

import { DaffPersonalAddress } from '@daffodil/geography';
import { DaffPersonalAddressFactory } from '@daffodil/geography/testing'

import { daffComparePersonalAddresses as comparator } from './personal-address';

describe('Geography | Comparators | DaffPersonalAddress', () => {
  let addressFactory: DaffPersonalAddressFactory;

  let address0: DaffPersonalAddress;
  let address1: DaffPersonalAddress;

  beforeEach(() => {
    addressFactory = TestBed.get(DaffPersonalAddressFactory);

    address0 = addressFactory.create();
    address1 = addressFactory.create();
  });

  describe('when the addresses are null', () => {
    it('should return false', () => {
      const result = comparator(null, null);

      expect(result).toBeFalsy();
    });
  });

  describe('when the addresses are the same', () => {
    it('should return true', () => {
      const result = comparator(address0, address0);

      expect(result).toBeTruthy();
    });
  });

  describe('when the addresses are not the same', () => {
    it('should return true', () => {
      const result = comparator(address0, address1);

      expect(result).toBeFalsy();
    });
  });
});
