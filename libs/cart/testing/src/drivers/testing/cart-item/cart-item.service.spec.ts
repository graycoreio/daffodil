import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffCart, DaffCartItem, DaffCartItemInputType, DaffCartItemInput } from '@daffodil/cart';

import { DaffCartFactory } from '../../../factories/cart.factory';
import { DaffTestingCartItemService } from './cart-item.service';
import { DaffCartItemFactory } from '@daffodil/cart/testing';

describe('Driver | Testing | Cart | CartItemService', () => {
  let service: DaffTestingCartItemService;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  let mockCart: DaffCart;
  let mockCartItem: DaffCartItem;
  let cartId;
  let itemId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartItemService
      ]
    });

    service = TestBed.get(DaffTestingCartItemService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItem = cartItemFactory.create();
    mockCart.items = [mockCartItem];
    cartId = mockCart.id;
    itemId = mockCartItem.item_id;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | getting all the cart items', () => {
    it('should return the cart\'s items', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.list(cartId)).toBeObservable(expected);
    });
  });

  describe('get | getting a cart item', () => {
    it('should return the cart item', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.get(cartId, itemId)).toBeObservable(expected);
    });
  });

  describe('add | adding an item to the cart', () => {
		let cartItemInput: DaffCartItemInput;
		let type;
    let productId;
    let qty;

    beforeEach(() => {
			type = DaffCartItemInputType.Simple;
      productId = 4;
      qty = 2;
      cartItemInput = {
				type,
        productId,
        qty
      };
    });

    it('should return a cart', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.add(cartId, cartItemInput)).toBeObservable(expected);
    });
  });

  describe('update | updating a cart item', () => {
    let newCartItem: DaffCartItem;

    beforeEach(() => {
      newCartItem = cartItemFactory.create();
      newCartItem.item_id = itemId;
      mockCart.items = [newCartItem];
    });

    it('should return a cart', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.update(cartId, itemId, newCartItem)).toBeObservable(expected);
    });
  });

  describe('delete | removing an item from the cart', () => {
    it('should return a cart', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.delete(cartId, itemId)).toBeObservable(expected);
    });
  });
});
