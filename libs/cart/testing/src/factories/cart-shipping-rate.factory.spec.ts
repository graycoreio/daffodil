import { TestBed } from '@angular/core/testing';

import { DaffCartShippingInformation } from '@daffodil/cart';

import { DaffCartShippingInformationFactory } from './cart-shipping-information.factory';

describe('@daffodil/cart/testing | DaffCartShippingInformationFactory', () => {

  let cartShippingInformationFactory: DaffCartShippingInformationFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCartShippingInformationFactory],
    });

    cartShippingInformationFactory = TestBed.inject(DaffCartShippingInformationFactory);
  });

  it('should be created', () => {
    expect(cartShippingInformationFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCartShippingInformation;

    beforeEach(() => {
      result = cartShippingInformationFactory.create();
    });

    xit('should return a CartShippingInformation with all required fields defined', () => {

    });
  });

  describe('createMany', () => {
    let result: DaffCartShippingInformation[];

    it('should create as many cart shipping rates as desired', () => {
      result = cartShippingInformationFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = cartShippingInformationFactory.createMany(3);
      expect(result.length).toEqual(3);
    });
  });
});
