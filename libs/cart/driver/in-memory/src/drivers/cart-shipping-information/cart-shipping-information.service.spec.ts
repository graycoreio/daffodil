import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartShippingRate,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory,
} from '@daffodil/cart/testing';

import { DaffInMemoryCartShippingInformationService } from './cart-shipping-information.service';

describe('@daffodil/cart/driver/in-memory | CartShippingInformationService', () => {
  let service: DaffInMemoryCartShippingInformationService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let cartShippingRateFactory: DaffCartShippingRateFactory;

  let mockCart: DaffCart;
  let mockCartShippingInfo: DaffCartShippingRate;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryCartShippingInformationService,
        {
          provide: InMemoryBackendConfig,
          useValue: {
            apiBase: 'api',
          },
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffInMemoryCartShippingInformationService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartShippingRateFactory = TestBed.inject(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingInfo = cartShippingRateFactory.create();
    mockCart.shipping_information = mockCartShippingInfo;
    cartId = mockCart.id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a cart\'s shipping info', () => {
    it('should send a get request', done => {
      service.get(cartId).subscribe(cart => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}`);

      expect(req.request.method).toBe('GET');

      req.flush(mockCartShippingInfo);
    });
  });

  describe('update', () => {
    const newPrice = 56.34;
    const info: Partial<DaffCartShippingRate> = { price: newPrice };

    it('should send a put request', done => {
      service.update(cartId, info).subscribe(res => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}`);

      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(info);

      mockCart.shipping_information.price = newPrice;

      req.flush(mockCart);
    });
  });

  describe('delete | deleting the selected shipping method', () => {
    it('should send a delete request', done => {
      service.delete(cartId).subscribe(result => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}`);

      expect(req.request.method).toBe('DELETE');

      mockCart.shipping_information = null;

      req.flush(mockCart);
    });
  });
});
