import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffTestingCartService } from './cart.service';

describe('Driver | Testing | Cart | CartService', () => {
  let service: DaffTestingCartService;
  let cartFactory: DaffCartFactory;

  let mockCart: DaffCart;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartService
      ]
    });

    service = TestBed.get(DaffTestingCartService);

    cartFactory = TestBed.get(DaffCartFactory);

    mockCart = cartFactory.create();
    cartId = mockCart.id;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a cart', () => {
    it('should return an object and not throw an error', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.get(cartId)).toBeObservable(expected);
    });
  });

  describe('create | creating a cart', () => {
    it('should return a cart ID and not throw an error', () => {
      const expected = cold('(a|)', {a: jasmine.objectContaining({
        id: jasmine.any(Number)
      })});
      expect(service.create()).toBeObservable(expected);
    });
  });

  describe('clear | clearing all items from the cart', () => {
    it('should return an object and not throw an error', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.clear(cartId)).toBeObservable(expected);
    });
  });
});
