import { TestBed } from '@angular/core/testing';

import { ShippingFactory, MockShippingAddress, MockShippingOption } from './shipping.factory';
import { ShippingOption } from '../../models/shipping-option';

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

  describe('createShippingAddress', () => {

    let result:MockShippingAddress;

    beforeEach(() => {
      result = shippingFactory.createShippingAddress();
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

  describe('createShippingOptions', () => {
    
    let result:ShippingOption[];

    beforeEach(() => {
      result = shippingFactory.createShippingOptions();
    });

    it('should return an array of ShippingOptions', () => {
      expect(result[0]).toEqual(jasmine.any(MockShippingOption));
    });
  });
});
