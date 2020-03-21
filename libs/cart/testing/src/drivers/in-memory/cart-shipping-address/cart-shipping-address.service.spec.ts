import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {
  DaffCart,
  DaffCartAddress
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryCartShippingAddressService } from './cart-shipping-address.service';

describe('Driver | In Memory | Cart | CartService', () => {
  let cartShippingAddressService: DaffInMemoryCartShippingAddressService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let mockCart: DaffCart;
  let mockCartAddress: DaffCartAddress;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryCartShippingAddressService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    cartFactory = TestBed.get(DaffCartFactory);
    cartAddressFactory = TestBed.get(DaffCartAddressFactory);
    cartShippingAddressService = TestBed.get(DaffInMemoryCartShippingAddressService);

    mockCart = cartFactory.create();
    mockCartAddress = cartAddressFactory.create();
    cartId = mockCart.id;
    mockCart.shipping_address = mockCartAddress;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(cartShippingAddressService).toBeTruthy();
  });

  describe('get | getting a cart shipping address', () => {
    it('should send a get request', done => {
      cartShippingAddressService.get(cartId).subscribe(res => {
        done();
      });

      const req = httpMock.expectOne(`${cartShippingAddressService.url}/${cartId}`);

      expect(req.request.method).toBe('GET');
      req.flush(mockCartAddress);
    });
  });

  describe('update', () => {
    let mockCartAddressUpdate: DaffCartAddress;

    beforeEach(() => {
      mockCartAddressUpdate = cartAddressFactory.create();
      mockCart.shipping_address = mockCartAddressUpdate;
    });

    it('should send a put request', done => {
      cartShippingAddressService.update(cartId, mockCartAddressUpdate).subscribe(cart => {
        done();
      });

      const req = httpMock.expectOne(`${cartShippingAddressService.url}/${cartId}`);

      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(mockCartAddressUpdate);

      req.flush(mockCart);
    });
  });
});
