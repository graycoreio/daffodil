import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {
  DaffCart,
  DaffCartShippingRate,
  DaffCartShippingInformation
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryCartShippingInformationService } from './cart-shipping-information.service';

describe('Driver | In Memory | Cart | CartShippingInformationService', () => {
  let cartShippingInformationService: DaffInMemoryCartShippingInformationService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let cartShippingRateFactory: DaffCartShippingRateFactory;

  let mockCart: DaffCart;
  let mockCartShippingInfo: DaffCartShippingInformation;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryCartShippingInformationService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    cartShippingInformationService = TestBed.get(DaffInMemoryCartShippingInformationService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartShippingRateFactory = TestBed.get(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingInfo = {
      ...cartShippingRateFactory.create(),
      address_id: 0
    };
    mockCart.shipping_information = mockCartShippingInfo;
    cartId = mockCart.id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(cartShippingInformationService).toBeTruthy();
  });

  describe('get | getting a cart\'s shipping info', () => {
    it('should send a get request', done => {
      cartShippingInformationService.get(cartId).subscribe(cart => {
        done();
      });

      const req = httpMock.expectOne(`${cartShippingInformationService.url}/${cartId}`);

      expect(req.request.method).toBe('GET');

      req.flush(mockCartShippingInfo);
    });
  });

  describe('update', () => {
    const newPrice = 56.34;
    const info: Partial<DaffCartShippingRate> = {price: newPrice};

    it('should send a put request', done => {
      cartShippingInformationService.update(cartId, info).subscribe(res => {
        done();
      });

      const req = httpMock.expectOne(`${cartShippingInformationService.url}/${cartId}`);

      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(info);

      mockCart.shipping_information.price = newPrice;

      req.flush(mockCart);
    });
  });

  describe('delete | deleting the selected shipping method', () => {
    it('should send a delete request', done => {
      cartShippingInformationService.delete(cartId).subscribe(result => {
        done();
      });

      const req = httpMock.expectOne(`${cartShippingInformationService.url}/${cartId}`);

      expect(req.request.method).toBe('DELETE');

      mockCart.shipping_information = null;

      req.flush(mockCart);
    });
  });
});
