import { TestBed } from '@angular/core/testing';

import { ShippingRateNode } from '../../models/shipping-rate-node';
import { ShippingRateNodeFactory } from './shipping-rate-node.factory';

describe('Driver | Shopify | Cart | Testing | Factories | ShippingRateNodeFactory', () => {

  let shippingRateNodeFactory: ShippingRateNodeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShippingRateNodeFactory]
    });

    shippingRateNodeFactory = TestBed.get(ShippingRateNodeFactory);
  });

  it('should be created', () => {
    expect(shippingRateNodeFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: ShippingRateNode;

    beforeEach(() => {
      result = shippingRateNodeFactory.create();
    });

    it('should return a ShippingRateNode with all required fields defined', () => {
      expect(result.handle).toBeDefined();
      expect(result.priceV2).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: ShippingRateNode[];

    it('should create as many cart shipping rates as desired', () => {
      result = shippingRateNodeFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = shippingRateNodeFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
