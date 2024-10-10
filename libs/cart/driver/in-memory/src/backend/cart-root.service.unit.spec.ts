import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartItemInput,
  DaffCartItem,
  DaffCartItemInputType,
} from '@daffodil/cart';
import {
  DaffInMemoryBackendCartService,
  DaffInMemoryBackendCartItemsService,
  DaffInMemoryBackendCartOrderService,
  DaffInMemoryBackendCartCouponService,
  DaffInMemoryBackendCartAddressService,
  DaffInMemoryBackendCartShippingAddressService,
  DaffInMemoryBackendCartBillingAddressService,
  DaffInMemoryBackendCartPaymentMethodsService,
  DaffInMemoryBackendCartShippingMethodsService,
  DaffInMemoryBackendCartPaymentService,
  DaffInMemoryBackendCartShippingInformationService,
} from '@daffodil/cart/driver/in-memory';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';
import { DaffProductTestingModule } from '@daffodil/product/testing';

import { DaffInMemoryBackendCartRootService } from './cart-root.service';

describe('DaffInMemoryBackendCartRootService | Unit', () => {
  let service: DaffInMemoryBackendCartRootService;

  let cartBackendService: DaffInMemoryBackendCartService;
  let cartItemsBackendService: DaffInMemoryBackendCartItemsService;
  let cartOrderBackendService: DaffInMemoryBackendCartOrderService;
  let cartCouponBackendService: DaffInMemoryBackendCartCouponService;
  let cartAddressBackendService: DaffInMemoryBackendCartAddressService;
  let cartShippingAddressBackendService: DaffInMemoryBackendCartShippingAddressService;
  let cartBillingAddressBackendService: DaffInMemoryBackendCartBillingAddressService;
  let cartPaymentMethodsBackendService: DaffInMemoryBackendCartPaymentMethodsService;
  let cartShippingMethodsBackendService: DaffInMemoryBackendCartShippingMethodsService;
  let cartPaymentBackendService: DaffInMemoryBackendCartPaymentService;
  let cartShippingInformationBackendService: DaffInMemoryBackendCartShippingInformationService;

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

  let cartGetSpy: jasmine.Spy;
  let cartPostSpy: jasmine.Spy;
  let cartItemsGetSpy: jasmine.Spy;
  let cartItemsPostSpy: jasmine.Spy;
  let cartItemsPutSpy: jasmine.Spy;
  let cartItemsDeleteSpy: jasmine.Spy;
  let cartOrderPostSpy: jasmine.Spy;
  let cartCouponGetSpy: jasmine.Spy;
  let cartCouponPostSpy: jasmine.Spy;
  let cartCouponDeleteSpy: jasmine.Spy;
  let cartAddressPutSpy: jasmine.Spy;
  let cartShippingAddressGetSpy: jasmine.Spy;
  let cartShippingAddressPutSpy: jasmine.Spy;
  let cartBillingAddressGetSpy: jasmine.Spy;
  let cartBillingAddressPutSpy: jasmine.Spy;
  let cartPaymentMethodsGetSpy: jasmine.Spy;
  let cartShippingMethodsGetSpy: jasmine.Spy;
  let cartPaymentGetSpy: jasmine.Spy;
  let cartPaymentPutSpy: jasmine.Spy;
  let cartPaymentDeleteSpy: jasmine.Spy;
  let cartShippingInformationGetSpy: jasmine.Spy;
  let cartShippingInformationPutSpy: jasmine.Spy;
  let cartShippingInformationDeleteSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
      providers: [
        DaffInMemoryBackendCartRootService,
      ],
    });
    service = TestBed.inject(DaffInMemoryBackendCartRootService);

    cartBackendService = TestBed.inject(DaffInMemoryBackendCartService);
    cartItemsBackendService = TestBed.inject(DaffInMemoryBackendCartItemsService);
    cartOrderBackendService = TestBed.inject(DaffInMemoryBackendCartOrderService);
    cartCouponBackendService = TestBed.inject(DaffInMemoryBackendCartCouponService);
    cartAddressBackendService = TestBed.inject(DaffInMemoryBackendCartAddressService);
    cartShippingAddressBackendService = TestBed.inject(DaffInMemoryBackendCartShippingAddressService);
    cartBillingAddressBackendService = TestBed.inject(DaffInMemoryBackendCartBillingAddressService);
    cartPaymentMethodsBackendService = TestBed.inject(DaffInMemoryBackendCartPaymentMethodsService);
    cartShippingMethodsBackendService = TestBed.inject(DaffInMemoryBackendCartShippingMethodsService);
    cartPaymentBackendService = TestBed.inject(DaffInMemoryBackendCartPaymentService);
    cartShippingInformationBackendService = TestBed.inject(DaffInMemoryBackendCartShippingInformationService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItem = cartItemFactory.create();
    mockCartItemInput = {
      type: DaffCartItemInputType.Simple,
      productId: mockCartItem.product_id,
      qty: mockCartItem.qty,
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
        body: {},
      },
      utils: {
        createResponse$: func => func(),
        getJsonBody: req => req.body,
        findById: (ary, id) => ary.find(e => e.id === id),
      },
    };

    cartGetSpy = spyOn(cartBackendService, 'get');
    cartPostSpy = spyOn(cartBackendService, 'post');
    cartItemsGetSpy = spyOn(cartItemsBackendService, 'get');
    cartItemsPostSpy = spyOn(cartItemsBackendService, 'post');
    cartItemsPutSpy = spyOn(cartItemsBackendService, 'put');
    cartItemsDeleteSpy = spyOn(cartItemsBackendService, 'delete');
    cartOrderPostSpy = spyOn(cartOrderBackendService, 'post');
    cartCouponGetSpy = spyOn(cartCouponBackendService, 'get');
    cartCouponPostSpy = spyOn(cartCouponBackendService, 'post');
    cartCouponDeleteSpy = spyOn(cartCouponBackendService, 'delete');
    cartAddressPutSpy = spyOn(cartAddressBackendService, 'put');
    cartShippingAddressGetSpy = spyOn(cartShippingAddressBackendService, 'get');
    cartShippingAddressPutSpy = spyOn(cartShippingAddressBackendService, 'put');
    cartBillingAddressGetSpy = spyOn(cartBillingAddressBackendService, 'get');
    cartBillingAddressPutSpy = spyOn(cartBillingAddressBackendService, 'put');
    cartPaymentMethodsGetSpy = spyOn(cartPaymentMethodsBackendService, 'get');
    cartShippingMethodsGetSpy = spyOn(cartShippingMethodsBackendService, 'get');
    cartPaymentGetSpy = spyOn(cartPaymentBackendService, 'get');
    cartPaymentPutSpy = spyOn(cartPaymentBackendService, 'put');
    cartPaymentDeleteSpy = spyOn(cartPaymentBackendService, 'delete');
    cartShippingInformationGetSpy = spyOn(cartShippingInformationBackendService, 'get');
    cartShippingInformationPutSpy = spyOn(cartShippingInformationBackendService, 'put');
    cartShippingInformationDeleteSpy = spyOn(cartShippingInformationBackendService, 'delete');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('after initialization', () => {
    let result: ReturnType<DaffInMemoryBackendCartRootService['createDb']>;

    beforeEach(() => {
      service.carts = [];
      result = service.createDb(reqInfoStub);
    });

    it('should have an empty array in DB', (done) => {
      result.subscribe((res) => {
        expect(res.cart).toEqual([]);
        done();
      });
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
        expect(cartGetSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-items', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-items';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart items service', () => {
        expect(cartItemsGetSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-coupon', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-coupon';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart coupon service', () => {
        expect(cartCouponGetSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-shipping-address', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-shipping-address';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart shipping address service', () => {
        expect(cartShippingAddressGetSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-billing-address', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-billing-address';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart billing address service', () => {
        expect(cartBillingAddressGetSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-payment-methods', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-payment-methods';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart payment methods service', () => {
        expect(cartPaymentMethodsGetSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-shipping-methods', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-shipping-methods';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart shipping methods service', () => {
        expect(cartShippingMethodsGetSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-payment', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-payment';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart payment service', () => {
        expect(cartPaymentGetSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-shipping-information', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-shipping-information';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart shipping information service', () => {
        expect(cartShippingInformationGetSpy).toHaveBeenCalledWith(reqInfoStub);
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
        expect(cartPostSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-items', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-items';

        result = service.post(reqInfoStub);
      });

      it('should delegate the request to the cart items service', () => {
        expect(cartItemsPostSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-order', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-order';

        result = service.post(reqInfoStub);
      });

      it('should delegate the request to the cart order service', () => {
        expect(cartOrderPostSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-coupon', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-coupon';

        result = service.post(reqInfoStub);
      });

      it('should delegate the request to the cart coupon service', () => {
        expect(cartCouponPostSpy).toHaveBeenCalledWith(reqInfoStub);
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
        expect(cartItemsPutSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-address', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-address';

        result = service.put(reqInfoStub);
      });

      it('should delegate the request to the cart address service', () => {
        expect(cartAddressPutSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-shipping-address', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-shipping-address';

        result = service.put(reqInfoStub);
      });

      it('should delegate the request to the cart shipping address service', () => {
        expect(cartShippingAddressPutSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-billing-address', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-billing-address';

        result = service.put(reqInfoStub);
      });

      it('should delegate the request to the cart billing address service', () => {
        expect(cartBillingAddressPutSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-payment', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-payment';

        result = service.put(reqInfoStub);
      });

      it('should delegate the request to the cart payment service', () => {
        expect(cartPaymentPutSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-shipping-information', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-shipping-information';

        result = service.put(reqInfoStub);
      });

      it('should delegate the request to the cart shipping information service', () => {
        expect(cartShippingInformationPutSpy).toHaveBeenCalledWith(reqInfoStub);
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
        expect(cartItemsDeleteSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-coupon', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-coupon';

        result = service.delete(reqInfoStub);
      });

      it('should delegate the request to the cart coupon service', () => {
        expect(cartCouponDeleteSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-payment', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-payment';

        result = service.delete(reqInfoStub);
      });

      it('should delegate the request to the cart payment service', () => {
        expect(cartPaymentDeleteSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-shipping-information', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-shipping-information';

        result = service.delete(reqInfoStub);
      });

      it('should delegate the request to the cart shipping information service', () => {
        expect(cartShippingInformationDeleteSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });
  });
});
