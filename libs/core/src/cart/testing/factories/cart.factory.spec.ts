import { TestBed, inject } from '@angular/core/testing';

import { CartFactory } from './cart.factory';
import { Cart } from '../../model/Cart';

describe('Core | Cart | Testing | CartFactory', () => {
  
  let cartFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartFactory]
    });

    cartFactory = TestBed.get(CartFactory);
  });

  it('should be created', () => {
    expect(cartFactory).toBeTruthy();
  });

  describe('create', () => {

    let result:Cart;

    beforeEach(() => {
      result = cartFactory.create();
    });

    it('should return a Cart with a random id under 1000', () => {
      expect(result.id).toBeLessThan(1000);
    });
  });
});
