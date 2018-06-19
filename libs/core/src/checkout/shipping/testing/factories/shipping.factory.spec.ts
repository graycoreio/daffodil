import { TestBed } from '@angular/core/testing';

import { ShippingFactory, MockShipping } from './shipping.factory';

describe('Core | Shipping | Testing | ShippingFactory', () => {
  
  let shippingFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShippingFactory]
    });

    shippingFactory = TestBed.get(ShippingFactory);
  });

  it('should be created', () => {
    expect(shippingFactory).toBeTruthy();
  });

  describe('create', () => {

    let result:MockShipping;

    beforeEach(() => {
      result = shippingFactory.create();
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
