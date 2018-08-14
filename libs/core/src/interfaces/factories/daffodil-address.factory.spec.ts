import { TestBed } from '@angular/core/testing';

import { DaffodilAddressFactory, MockDaffodilAddress } from './daffodil-address.factory';

describe('Core | Testing | DaffodilAddressFactory', () => {
  
  let daffodilAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffodilAddressFactory]
    });

    daffodilAddressFactory = TestBed.get(DaffodilAddressFactory);
  });

  it('should be created', () => {
    expect(daffodilAddressFactory).toBeTruthy();
  });

  describe('createDaffodilAddress', () => {

    let result:MockDaffodilAddress;

    beforeEach(() => {
      result = daffodilAddressFactory.create();
    });

    it('should return an Address with firstname', () => {
      expect(result.firstname).toBeDefined();
    });

    it('should return an Address with lastname', () => {
      expect(result.lastname).toBeDefined();
    });

    it('should return an Address with street', () => {
      expect(result.street).toBeDefined();
    });

    it('should return an Address with city', () => {
      expect(result.city).toBeDefined();
    });

    it('should return an Address with state', () => {
      expect(result.state).toBeDefined();
    });

    it('should return an Address with empty email', () => {
      expect(result.email).toEqual('');
    });

    it('should return an Address with postcode', () => {
      expect(result.postcode).toBeDefined();
    });

    it('should return an Address with telephone', () => {
      expect(result.telephone).toBeDefined();
    });
  });
});
