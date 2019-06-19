import { TestBed } from '@angular/core/testing';

import { DaffCartAddressFactory } from './cart-address.factory';
import { DaffCartAddress } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartAddressFactory', () => {
  
  let cartAddressFactory: DaffCartAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCartAddressFactory]
    });

    cartAddressFactory = TestBed.get(DaffCartAddressFactory);
  });

  it('should be created', () => {
    expect(cartAddressFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCartAddress;

    beforeEach(() => {
      result = cartAddressFactory.create();
    });
    
    xit('should return a CartAddress with all required fields defined', () => {

    });
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
