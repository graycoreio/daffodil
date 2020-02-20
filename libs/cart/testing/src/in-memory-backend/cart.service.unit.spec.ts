import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';

import { DaffProductImage } from '@daffodil/product';
import { DaffProductImageFactory } from '@daffodil/product/testing';
import { DaffCart } from '@daffodil/cart';

import { DaffInMemoryBackendCartService } from './cart.service';
import { DaffCartFactory } from '../../../testing/src';

describe('Driver | Cart | In Memory | CartService | Unit', () => {
  let cartTestingService: DaffInMemoryBackendCartService;
  let stubCart: DaffCart;
  let cartId;
  let stubProductImage: DaffProductImage;
  let daffCartFactory: jasmine.SpyObj<DaffCartFactory>;
  let daffProductImageFactory: jasmine.SpyObj<DaffProductImageFactory>;

  beforeEach(() => {
    const daffCartFactorySpy = jasmine.createSpyObj('DaffCartFactory', ['create']);
    const daffProductImageFactorySpy = jasmine.createSpyObj('DaffProductImageFactory', ['create']);
    stubProductImage = new DaffProductImageFactory().create();
    stubCart = new DaffCartFactory().create({image: stubProductImage});
    cartId = stubCart.id;

    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCartService,
        { provide: DaffCartFactory, useValue: daffCartFactorySpy},
        { provide: DaffProductImageFactory, useValue: daffProductImageFactorySpy}
      ]
    });

    daffCartFactory = TestBed.get(DaffCartFactory);
    daffProductImageFactory = TestBed.get(DaffProductImageFactory);
    daffProductImageFactory.create.and.returnValue(stubProductImage);
    daffCartFactory.create.and.returnValue(stubCart);

    cartTestingService = TestBed.get(DaffInMemoryBackendCartService);
  });

  it('should be created', () => {
    expect(cartTestingService).toBeTruthy();
  });

  describe('after initialization', () => {
    let result;

    beforeEach(() => {
      result = cartTestingService.createDb();
    });

    it('should have an empty array in DB', () => {
      result = cartTestingService.createDb();
      expect(result.cart).toEqual([]);
    });
  });

  describe('processing a create request', () => {
    let reqInfoStub;
    let result;

    beforeEach(() => {
      reqInfoStub = {
        id: 'create',
        req: {
          body: {}
        },
        utils: {
          createResponse$: func => {
            return func();
          }
        }
      };

      cartTestingService.carts.push(stubCart);
    });

    it('should return a partial with id', () => {
      result = cartTestingService.post(reqInfoStub);

      const id = result.body.id;

      expect(id).toBeDefined();
    });

    it('should store a cart in the DB', () => {
      result = cartTestingService.post(reqInfoStub);

      const id = result.body.id;

      expect(cartTestingService.carts.find(cart => cart.id === id)).toBeTruthy()
    });
  });

  describe('processing a clear request', () => {
    let reqInfoStub;
    let result;

    beforeEach(() => {
      cartTestingService.carts.push(stubCart);
      //add cartItems
      cartTestingService.post({
        id: 'addToCart',
        req: {
          body: {
            cartId,
            productId: 'replaceme',
            qty: 4
          }
        },
        utils: {
          createResponse$: func => {
            return func();
          }
        }
      });

      //test clear endpoint
      reqInfoStub = {
        id: 'clear',
        req: {
          body: {
            cartId
          }
        },
        utils: {
          createResponse$: func => {
            return func();
          }
        }
      };
    });

    it('should remove the items in the cart', () => {
      result = cartTestingService.post(reqInfoStub);

      expect(result.body.items.length).toEqual(0);
    });
  });

  describe('processing an addToCart request', () => {
    let reqInfoStub;
    let result;
    let productIdValue;

    beforeEach(() => {
      reqInfoStub = {
        id: 'addToCart',
        req: {
          body: {
            cartId,
            productId: 'replaceme',
            qty: 4
          }
        },
        utils: {
          createResponse$: func => {
            return func();
          }
        }
      };

      cartTestingService.carts.push(stubCart);
    });

    describe('and product is unique', () => {
      it('should add an item to the cart', () => {
        reqInfoStub.req.body.productId = 'addToCartTest';
        result = cartTestingService.post(reqInfoStub);

        expect(result.body.items.length).toEqual(1);
      });

      it('should set qty of the cartItem to the given qty value', () => {
        reqInfoStub.req.body.productId = 'qtyTest';
        reqInfoStub.req.body.qty = 2;

        result = cartTestingService.post(reqInfoStub);

        expect(result.body.items[0].qty).toEqual(2);
      });

      it('should set productId of the cartItem to the given productId value', () => {
        productIdValue = 'productIdTest';
        reqInfoStub.req.body.productId = productIdValue;

        result = cartTestingService.post(reqInfoStub);

        expect(result.body.items[0].product_id).toEqual(productIdValue);
      });

      it('should set an image on cartItem', () => {
        productIdValue = 'imageTest';

        result = cartTestingService.post(reqInfoStub);

        expect(result.body.items[0].image).toEqual(stubProductImage);
      });
    });

    describe('and product is not unique', () => {
      it('should add given qty to existing product', () => {
        reqInfoStub.req.body.productId = 'qtyTest';
        reqInfoStub.req.body.qty = 2;

        result = cartTestingService.post(reqInfoStub);

        expect(result.body.items[0].qty).toEqual(2);

        result = cartTestingService.post(reqInfoStub);

        expect(result.body.items[0].qty).toEqual(4);
      });
    });
  });

  describe('processing a post request', () => {
    let reqInfoStub;
    let result;

    beforeEach(() => {
      reqInfoStub = {
        req: {
          body: {
            cartId
          }
        },
        utils: {
          createResponse$: func => {
            return func();
          }
        }
      };
      cartTestingService.carts.push(stubCart);
      result = cartTestingService.post(reqInfoStub);
    });

    it('should return the correct cart with an OK status', () => {
      expect(result).toEqual({
        body: stubCart,
        status: STATUS.OK
      });
    });
  });
});
