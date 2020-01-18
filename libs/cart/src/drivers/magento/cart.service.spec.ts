import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { of } from 'rxjs';

import { DaffProductDriver } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffMagentoCartService } from './cart.service';
import { cartPaymentMethodResponseFactory } from './testing/factories/cart-payment-method-response';
import { cartResponseFactory } from './testing/factories/cart-response';
import { cartTotalsResponseFactory } from './testing/factories/cart-totals-response';
import { CartResponse } from './models/cart-response';
import { CartTotalsResponse } from './models/cart-totals-response';
import { CartPaymentMethod } from './models/cart-payment-method';
import { DaffCartTransformer } from '../injection-tokens/cart-transformer.token';

describe('Driver | Magento | Cart | CartService', () => {
  let cartService: DaffMagentoCartService;
  let cartFactory: DaffCartFactory;
  let controller: HttpTestingController;

  let mockCartResponse: CartResponse
  let mockCartTotalsResponse: CartTotalsResponse
  let mockCartPaymentMethodResponse: CartPaymentMethod

  const cartId = '11';
  const uri = 'uri';
  const guestCartURI = `${uri}/guest-carts`
  const cartURI = `${uri}/guest-carts/${cartId}`;
  const cartTotalsURI = `${uri}/guest-carts/${cartId}/totals`;
  const cartItemsURI = `${uri}/guest-carts/${cartId}/items`;
  const cartPaymentMethodURI = `${uri}/guest-carts/${cartId}/selected-payment-method`;

  const daffProductFactory = new DaffProductFactory()

  const magentoCartResponseTransformerServiceSpy = jasmine.createSpyObj('DaffMagentoCartTransformerService', ['transform'])
  const magentoProductServiceSpy = jasmine.createSpyObj('DaffMagentoProductService', ['get'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffMagentoCartService,
        { provide: DaffCartTransformer, useValue: magentoCartResponseTransformerServiceSpy },
        { provide: DaffProductDriver, useValue: magentoProductServiceSpy },
      ]
    });

    controller = TestBed.get(HttpTestingController);

    cartService = TestBed.get(DaffMagentoCartService);
    cartFactory = TestBed.get(DaffCartFactory);

    cartService.cartId = of(cartId)
    cartService.uri = uri

    mockCartResponse = cartResponseFactory()
    mockCartTotalsResponse = cartTotalsResponseFactory()
    mockCartPaymentMethodResponse = cartPaymentMethodResponseFactory()
  });

  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });

  describe('get | getting a single cart', () => {
    beforeEach(() => {

    })

    it('should call the transformer with the correct argument', () => {
      const method = 'testPaymentMethod';
      const id = 34;
      const subtotal = 109.78
      mockCartPaymentMethodResponse.method = method;
      mockCartResponse.id = id;
      mockCartTotalsResponse.subtotal = subtotal;

      cartService.get().subscribe((result) => {
        // expect(result.id).toEqual(cart.id);
      });

      const cartOp = controller.expectOne(cartURI);
      const cartTotalsOp = controller.expectOne(cartTotalsURI);
      const cartPaymentMethodOp = controller.expectOne(cartPaymentMethodURI);

      cartOp.flush(mockCartResponse);
      cartTotalsOp.flush(mockCartTotalsResponse);
      cartPaymentMethodOp.flush(mockCartPaymentMethodResponse);

      // check mocked transformer service
      const cartTransformArgs = magentoCartResponseTransformerServiceSpy.transform.calls.mostRecent().args[0];

      expect(cartTransformArgs.id).toEqual(id);
      expect(cartTransformArgs.method).toEqual(method);
      expect(cartTransformArgs.subtotal).toEqual(subtotal);
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('addToCart | adding a product to the cart', () => {

    beforeEach(() => {

    })

    it('should send a post request to the cart items url with the correct payload', () => {
      const product = daffProductFactory.create();
      const qty = 3;

      magentoProductServiceSpy.get.withArgs(product.id).and.returnValue(of(product));

      cartService.addToCart(product.id, qty).subscribe((result) => {
        // expect(result.id).toEqual(product.id);
      });

      const {
        method,
        body
      } = controller.expectOne(cartItemsURI).request;

      expect(method).toEqual('POST')
      expect(body.qty).toEqual(qty)
      expect(body.id).toEqual(product.id)
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('clear | remove all items from the cart', () => {
    beforeEach(() => {

    })

    it('should call #deleteItem() for each item returned from #getItems()', () => {
      const items = [
        {item_id: 1},
        {item_id: 2},
      ];
      const deleteItemSpy = spyOn<any>(cartService, 'deleteItem');

      spyOn<any>(cartService, 'getItems').and.returnValue(of(items));
      deleteItemSpy.and.returnValue(of(true))

      cartService.clear().subscribe((result) => {
        // expect(result.id).toEqual(cart.id);
      });

      const calls = deleteItemSpy.calls;

      expect(calls.count()).toEqual(items.length);

      items.forEach(item => {
        expect(calls.allArgs()).toContain([item.item_id])
      })
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('getItems | get all items in the cart', () => {
    beforeEach(() => {

    })

    it('should send a get request to the cart items endpoint', () => {
      (cartService as any).getItems().subscribe((result) => {
        // expect(result.id).toEqual(cart.id);
      });

      const {
        method,
        body
      } = controller.expectOne(cartItemsURI).request;

      expect(method).toEqual('GET')
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('deleteItem | deletes an item from the cart', () => {
    beforeEach(() => {

    })

    it('should send a delete request to the cart item endpoint', () => {
      const cartItemID = 5;
      const cartItemURI = `${cartItemsURI}/${cartItemID}`;
      (cartService as any).deleteItem(cartItemID).subscribe((result) => {
        // expect(result.id).toEqual(cart.id);
      });

      const {
        method,
        body
      } = controller.expectOne(cartItemURI).request;

      expect(method).toEqual('DELETE')
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('createCart | creates the cart', () => {
    beforeEach(() => {

    })

    it('should send a post request to the cart endpoint', () => {
      (cartService as any).createCart().subscribe((result) => {
        // expect(result.id).toEqual(cart.id);
      });

      const {
        method,
        body
      } = controller.expectOne(guestCartURI).request;

      expect(method).toEqual('POST')
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
