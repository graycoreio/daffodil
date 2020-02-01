import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import { of } from 'rxjs';

import { DaffProductDriver } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffShopifyCartService } from './cart.service';
import { DaffCartTransformer } from '../injection-tokens/cart-transformer.token';
import { DaffShopifyCartGraphQlQueryManagerService } from './queries/cart-query-manager.service';
import { CheckoutLineItemInput } from './models/checkout-line-item-input';
import { CheckoutCreateInput } from './models/checkout-create-input';
import { DaffCartQueryManager } from '../injection-tokens/cart-query-manager.token';
import { CartItemFactory } from './testing/factories/cart-item.factory';
import { CartFactory } from './testing/factories/cart.factory';
import { Cart } from './models/cart';

describe('Driver | Shopify | Cart | CartService', () => {
  let cartService: DaffShopifyCartService;
  let controller: ApolloTestingController;

  let mockCart: Cart;
  let mockCartResponse;
  let mockCartItems;
  let mockCartItemsResponse;
  let mockLineItemInputs: CheckoutLineItemInput[];

  const daffProductFactory = new DaffProductFactory();
  const cartItemsFactory = new CartItemFactory();
  const cartFactory = new CartFactory();

  const checkoutId = '11';
  const accessToken = 'customerAccessToken';

  let cartGraphQlQueryManagerService: DaffShopifyCartGraphQlQueryManagerService;

  const shopifyCartResponseTransformerServiceSpy = jasmine.createSpyObj('DaffShopifyCartTransformerService', ['transform']);
  const shopifyProductServiceSpy = jasmine.createSpyObj('DaffShopifyProductService', ['get']);

  const mockCheckoutCreateInput: CheckoutCreateInput = {
    allowPartialAddresses: true,
    customAttributes: [],
    email: '',
    lineItems: [],
    note: '',
    presentmentCurrencyCode: '',
    shippingAddress: null,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffShopifyCartService,
        {
          provide: DaffCartTransformer,
          useValue: shopifyCartResponseTransformerServiceSpy
        },
        {
          provide: DaffProductDriver,
          useValue: shopifyProductServiceSpy
        },
        {
          provide: DaffCartQueryManager,
          useExisting: DaffShopifyCartGraphQlQueryManagerService
        }
      ]
    });

    controller = TestBed.get(ApolloTestingController);

    cartService = TestBed.get(DaffShopifyCartService);

    cartGraphQlQueryManagerService = TestBed.get(DaffShopifyCartGraphQlQueryManagerService);

    cartService['checkoutId'] = of(checkoutId);
    cartService['accessToken'] = accessToken;

    mockCart = cartFactory.create();
    mockCartItems = cartItemsFactory.createMany(3);
    mockLineItemInputs = mockCartItems.map(node => ({
      variantId: node.variant.id,
      quantity: node.quantity
    }))
    mockCartItemsResponse = {
      node: {
        lineItems: {
          edges: mockCartItems.map(item => ({node: item}))
        }
      }
    };
    mockCartResponse = {
      customer: {
        id: '32'
      },
      node: mockCart,
    };
  });

  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });

  describe('get | getting a single cart', () => {
    const id = '34';
    const subtotal = 109.78;

    beforeEach(() => {
      mockCartResponse.node.id = id;
      mockCartResponse.node.subtotalPriceV2.amount = subtotal;
    })

    it('should call the transformer with the correct argument', done => {
      cartService.get().subscribe((result) => {
        // check mocked transformer service
        const cartTransformArgs = shopifyCartResponseTransformerServiceSpy.transform.calls.mostRecent().args[0];

        expect(cartTransformArgs.id).toEqual(id);
        expect(cartTransformArgs.subtotalPriceV2.amount).toEqual(subtotal);

        done();
      });

      const op = controller.expectOne(cartGraphQlQueryManagerService.getTheCartQuery(accessToken, checkoutId).query);

      op.flush({
        data: mockCartResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('addToCart | adding a product to the cart', () => {
    let setCartItemsSpy: jasmine.Spy;
    let getCheckoutLineItemInputsSpy: jasmine.Spy;
    let getSpy: jasmine.Spy;

    const product = daffProductFactory.create();
    const qty = 3;

    beforeEach(() => {
      setCartItemsSpy = spyOn<any>(cartService, 'setCartItems');
      getCheckoutLineItemInputsSpy = spyOn<any>(cartService, 'getCheckoutLineItemInputs');
      getSpy = spyOn(cartService, 'get');

      getCheckoutLineItemInputsSpy.and.returnValue(of(mockLineItemInputs));
      getSpy.and.returnValue(of(mockCartResponse));
      setCartItemsSpy.and.returnValue(of(null))
    })

    it('should call #setCartItems with the new item added', done => {
      shopifyProductServiceSpy.get.withArgs(product.id).and.returnValue(of(product));

      cartService.addToCart(product.id, qty).subscribe((result) => {
        expect(setCartItemsSpy.calls.mostRecent().args[0]).toEqual([
          ...mockLineItemInputs,
          {
            variantId: product.id,
            quantity: qty
          }
        ]);

        done();
      });
    });
  });

  describe('clear | remove all items from the cart', () => {
    let setCartItemsSpy: jasmine.Spy;

    beforeEach(() => {
      setCartItemsSpy = spyOn<any>(cartService, 'setCartItems');
      setCartItemsSpy.and.returnValue(of(null));
    })

    it('should call #setCartItems with an empty array', done => {
      cartService.clear().subscribe((result) => {
        expect(setCartItemsSpy.calls.mostRecent().args[0]).toEqual([]);

        done();
      });
    });
  });

  describe('getCheckoutLineItemInputs | get all items inputs in the cart', () => {
    it('should return the items', done => {
      cartService['getCheckoutLineItemInputs']().subscribe((result) => {
        expect(result).toEqual(mockLineItemInputs);

        done();
      });

      const op = controller.expectOne(cartGraphQlQueryManagerService.getCheckoutLineItemInputsQuery(checkoutId).query);

      op.flush({
        data: mockCartItemsResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('setCartItems | sets the cart items', () => {
    it('should request the correct mutation from the query manager', done => {
      cartService['setCartItems'](mockLineItemInputs).subscribe((result) => done());

      const op = controller.expectOne(cartGraphQlQueryManagerService.setCartItemsMutation(mockLineItemInputs, checkoutId).mutation);

      op.flush({
        data: {}
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('createCart | creates the cart', () => {
    it('should return the checkout id', done => {
      cartService['createCart']().subscribe((result) => {
        expect(result).toEqual(checkoutId);

        done();
      });

      const op = controller.expectOne(cartGraphQlQueryManagerService.getCreateCartMutation(mockCheckoutCreateInput).mutation);

      op.flush({
        data: {
          checkoutCreate: {
            checkout: {
              id: checkoutId
            }
          }
        }
      })
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
