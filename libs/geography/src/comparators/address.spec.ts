import { TestBed } from '@angular/core/testing';

import { DaffAddress } from '@daffodil/geography';
import { DaffAddressFactory } from '@daffodil/geography/testing'

import { daffCompareAddresses as comparator } from './address';

describe('Geography | Comparators | DaffAddress', () => {
  let addressFactory: DaffAddressFactory;

  let address0: DaffAddress;
  let address1: DaffAddress;

  beforeEach(() => {
    addressFactory = TestBed.get(DaffAddressFactory);

    address0 = addressFactory.create();
    address1 = addressFactory.create();
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
