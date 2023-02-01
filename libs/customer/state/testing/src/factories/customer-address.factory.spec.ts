import { TestBed } from '@angular/core/testing';

import { DaffCustomerAddressEntity } from '@daffodil/customer/state';

import { DaffCustomerAddressEntityFactory } from './customer-address.factory';

describe('@daffodil/customer/state/testing | DaffCustomerAddressEntityFactory', () => {
  let factory: DaffCustomerAddressEntityFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCustomerAddressEntityFactory],
    });

    factory = TestBed.inject(DaffCustomerAddressEntityFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCustomerAddressEntity;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.daffErrors).toBeDefined();
      expect(result.daffState).toBeDefined();
      expect(result.daffTemp).toBeDefined();
    });
  });
});
