import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {
  DaffCart,
  DaffCartShippingRate
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryCartShippingMethodsService } from './cart-shipping-methods.service';

describe('Driver | In Memory | Cart | CartShippingMethodsService', () => {
  let cartPaymentMethodsService: DaffInMemoryCartShippingMethodsService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let shippingRateFactory: DaffCartShippingRateFactory

  let mockCart: DaffCart;
  let mockCartShippingMethods: DaffCartShippingRate[];
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryCartShippingMethodsService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    cartPaymentMethodsService = TestBed.get(DaffInMemoryCartShippingMethodsService);

    cartFactory = TestBed.get(DaffCartFactory);
    shippingRateFactory = TestBed.get(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingMethods = shippingRateFactory.createMany(3);
    cartId = mockCart.id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(cartPaymentMethodsService).toBeTruthy();
  });

  describe('list | list a cart\'s payment methods', () => {
    it('should send a get request', done => {
      cartPaymentMethodsService.list(cartId).subscribe(res => {
        done();
      });

      const req = httpMock.expectOne(`${cartPaymentMethodsService.url}/${cartId}`);

      expect(req.request.method).toBe('GET');

      req.flush(mockCartShippingMethods);
    });
  });
});
