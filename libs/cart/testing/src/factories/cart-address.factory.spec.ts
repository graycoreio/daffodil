import { TestBed } from '@angular/core/testing';

import { DaffCartAddress } from '@daffodil/cart';

import { DaffCartAddressFactory } from './cart-address.factory';

describe('Cart | Testing | Factories | CartAddressFactory', () => {

  let cartAddressFactory: DaffCartAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCartAddressFactory]
    });

    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);
  });

  it('should be created', () => {
    expect(cartAddressFactory).toBeTruthy();
  });

  describe('createMany', () => {
    let result: DaffCartAddress[];

    it('should create as many cart addresses as desired', () => {
      result = cartAddressFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = cartAddressFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
