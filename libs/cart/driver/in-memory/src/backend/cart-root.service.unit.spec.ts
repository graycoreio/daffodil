import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartItemInput,
	DaffCartItem,
	DaffCartItemInputType
} from '@daffodil/cart';
import { DaffInMemoryBackendCartService, DaffInMemoryBackendCartItemsService, DaffInMemoryBackendCartOrderService, DaffInMemoryBackendCartCouponService, DaffInMemoryBackendCartAddressService, DaffInMemoryBackendCartShippingAddressService, DaffInMemoryBackendCartBillingAddressService, DaffInMemoryBackendCartPaymentMethodsService, DaffInMemoryBackendCartShippingMethodsService, DaffInMemoryBackendCartPaymentService, DaffInMemoryBackendCartShippingInformationService } from '@daffodil/cart/driver/in-memory';
import {
  DaffCartFactory,
  DaffCartItemFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartRootService } from './cart-root.service';

describe('DaffInMemoryBackendCartRootService | Unit', () => {
  let service: DaffInMemoryBackendCartRootService;

  let cartBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartService>;
  let cartItemsBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartItemsService>;
  let cartOrderBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartOrderService>;
  let cartCouponBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartCouponService>;
  let cartAddressBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartAddressService>;
  let cartShippingAddressBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartShippingAddressService>;
  let cartBillingAddressBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartBillingAddressService>;
  let cartPaymentMethodsBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartPaymentMethodsService>;
  let cartShippingMethodsBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartShippingMethodsService>;
  let cartPaymentBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartPaymentService>;
  let cartShippingInformationBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartShippingInformationService>;

  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  let mockCart: DaffCart;
  let mockCartItemInput: DaffCartItemInput;
  let mockCartItem: DaffCartItem;
  let cartId;
  let reqInfoStub;
  let baseUrl;
  let cartUrl;
  let collection: DaffCart[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCartRootService,
        {
          provide: DaffInMemoryBackendCartService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartService', ['get', 'post'])
        },
        {
          provide: DaffInMemoryBackendCartItemsService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartItemsService', ['get', 'post', 'put', 'delete'])
        },
        {
          provide: DaffInMemoryBackendCartOrderService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartOrderService', ['post'])
        },
        {
          provide: DaffInMemoryBackendCartCouponService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartCouponService', ['get', 'post', 'delete'])
        },
        {
          provide: DaffInMemoryBackendCartAddressService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartAddressService', ['put'])
        },
        {
          provide: DaffInMemoryBackendCartShippingAddressService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartShippingAddressService', ['get', 'put'])
        },
        {
          provide: DaffInMemoryBackendCartBillingAddressService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartBillingAddressService', ['get', 'put'])
        },
        {
          provide: DaffInMemoryBackendCartPaymentMethodsService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartPaymentMethodsService', ['get'])
        },
        {
          provide: DaffInMemoryBackendCartShippingMethodsService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartShippingMethodsService', ['get'])
        },
        {
          provide: DaffInMemoryBackendCartPaymentService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartPaymentService', ['get', 'put', 'delete'])
        },
        {
          provide: DaffInMemoryBackendCartShippingInformationService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartShippingInformationService', ['get', 'put', 'delete'])
        }
      ]
    });
    service = TestBed.inject(DaffInMemoryBackendCartRootService);

    cartBackendServiceSpy = TestBed.inject(DaffInMemoryBackendCartService);
    cartItemsBackendServiceSpy = TestBed.inject(DaffInMemoryBackendCartItemsService);
    cartOrderBackendServiceSpy = TestBed.inject(DaffInMemoryBackendCartOrderService);
    cartCouponBackendServiceSpy = TestBed.inject(DaffInMemoryBackendCartCouponService);
    cartAddressBackendServiceSpy = TestBed.inject(DaffInMemoryBackendCartAddressService);
    cartShippingAddressBackendServiceSpy = TestBed.inject(DaffInMemoryBackendCartShippingAddressService);
    cartBillingAddressBackendServiceSpy = TestBed.inject(DaffInMemoryBackendCartBillingAddressService);
    cartPaymentMethodsBackendServiceSpy = TestBed.inject(DaffInMemoryBackendCartPaymentMethodsService);
    cartShippingMethodsBackendServiceSpy = TestBed.inject(DaffInMemoryBackendCartShippingMethodsService);
    cartPaymentBackendServiceSpy = TestBed.inject(DaffInMemoryBackendCartPaymentService);
    cartShippingInformationBackendServiceSpy = TestBed.inject(DaffInMemoryBackendCartShippingInformationService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItem = cartItemFactory.create();
    mockCartItemInput = {
			type: DaffCartItemInputType.Simple,
      productId: mockCartItem.product_id,
      qty: mockCartItem.qty
    };
    cartId = mockCart.id;
    baseUrl = 'api/cart';
    cartUrl = `${baseUrl}/${cartId}`;
    collection = [mockCart];
    service.carts = collection;
    reqInfoStub = {
      id: '',
      resourceUrl: baseUrl,
      collection,
      collectionName: '',
      method: '',
      req: {
        body: {}
      },
      utils: {
        createResponse$: func => func(),
        getJsonBody: req => req.body,
        findById: (ary, id) => ary.find(e => e.id === id)
      }
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('after initialization', () => {
    let result;

    beforeEach(() => {
      service.carts = [];
      result = service.createDb(reqInfoStub);
    });

    it('should have an empty array in DB', () => {
      expect(result.cart).toEqual([]);
    });
  });

  describe('processing a get request', () => {
    beforeEach(() => {
      reqInfoStub.method = 'get';
    });

    describe('when the collectionName is cart', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart service', () => {
        expect(cartBackendServiceSpy.get).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-items', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-items';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart items service', () => {
        expect(cartItemsBackendServiceSpy.get).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-coupon', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-coupon';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart coupon service', () => {
        expect(cartCouponBackendServiceSpy.get).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-shipping-address', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-shipping-address';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart shipping address service', () => {
        expect(cartShippingAddressBackendServiceSpy.get).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-billing-address', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-billing-address';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart billing address service', () => {
        expect(cartBillingAddressBackendServiceSpy.get).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-payment-methods', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-payment-methods';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart payment methods service', () => {
        expect(cartPaymentMethodsBackendServiceSpy.get).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-shipping-methods', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-shipping-methods';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart shipping methods service', () => {
        expect(cartShippingMethodsBackendServiceSpy.get).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-payment', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-payment';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart payment service', () => {
        expect(cartPaymentBackendServiceSpy.get).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-shipping-information', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-shipping-information';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart shipping information service', () => {
        expect(cartShippingInformationBackendServiceSpy.get).toHaveBeenCalledWith(reqInfoStub);
      });
    });
  });

  describe('processing a post request', () => {
    beforeEach(() => {
      reqInfoStub.method = 'post';
    });

    describe('when the collectionName is cart', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart';

        result = service.post(reqInfoStub);
      });

      it('should delegate the request to the cart service', () => {
        expect(cartBackendServiceSpy.post).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-items', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-items';

        result = service.post(reqInfoStub);
      });

      it('should delegate the request to the cart items service', () => {
        expect(cartItemsBackendServiceSpy.post).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-order', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-order';

        result = service.post(reqInfoStub);
      });

      it('should delegate the request to the cart order service', () => {
        expect(cartOrderBackendServiceSpy.post).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-coupon', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-coupon';

        result = service.post(reqInfoStub);
      });

      it('should delegate the request to the cart coupon service', () => {
        expect(cartCouponBackendServiceSpy.post).toHaveBeenCalledWith(reqInfoStub);
      });
    });
  });

  describe('processing an put request', () => {
    beforeEach(() => {
      reqInfoStub.method = 'put';
    });

    describe('when the collectionName is cart-items', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-items';

        result = service.put(reqInfoStub);
      });

      it('should delegate the request to the cart items service', () => {
        expect(cartItemsBackendServiceSpy.put).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-address', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-address';

        result = service.put(reqInfoStub);
      });

      it('should delegate the request to the cart address service', () => {
        expect(cartAddressBackendServiceSpy.put).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-shipping-address', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-shipping-address';

        result = service.put(reqInfoStub);
      });

      it('should delegate the request to the cart shipping address service', () => {
        expect(cartShippingAddressBackendServiceSpy.put).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-billing-address', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-billing-address';

        result = service.put(reqInfoStub);
      });

      it('should delegate the request to the cart billing address service', () => {
        expect(cartBillingAddressBackendServiceSpy.put).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-payment', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-payment';

        result = service.put(reqInfoStub);
      });

      it('should delegate the request to the cart payment service', () => {
        expect(cartPaymentBackendServiceSpy.put).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-shipping-information', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-shipping-information';

        result = service.put(reqInfoStub);
      });

      it('should delegate the request to the cart shipping information service', () => {
        expect(cartShippingInformationBackendServiceSpy.put).toHaveBeenCalledWith(reqInfoStub);
      });
    });
  });

  describe('processing an delete request', () => {
    beforeEach(() => {
      reqInfoStub.method = 'delete';
    });

    describe('when the collectionName is cart-items', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-items';

        result = service.delete(reqInfoStub);
      });

      it('should delegate the request to the cart items service', () => {
        expect(cartItemsBackendServiceSpy.delete).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-coupon', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-coupon';

        result = service.delete(reqInfoStub);
      });

      it('should delegate the request to the cart coupon service', () => {
        expect(cartCouponBackendServiceSpy.delete).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-payment', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-payment';

        result = service.delete(reqInfoStub);
      });

      it('should delegate the request to the cart payment service', () => {
        expect(cartPaymentBackendServiceSpy.delete).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-shipping-information', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-shipping-information';

        result = service.delete(reqInfoStub);
      });

      it('should delegate the request to the cart shipping information service', () => {
        expect(cartShippingInformationBackendServiceSpy.delete).toHaveBeenCalledWith(reqInfoStub);
      });
    });
  });
});
