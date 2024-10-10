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

import { DaffInMemoryCartShippingMethodsService } from './cart-shipping-methods.service';

describe('@daffodil/cart/driver/in-memory | CartShippingMethodsService', () => {
  let service: DaffInMemoryCartShippingMethodsService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let shippingRateFactory: DaffCartShippingRateFactory;

  let mockCart: DaffCart;
  let mockCartShippingMethods: DaffCartShippingRate[];
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryCartShippingMethodsService,
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
    service = TestBed.inject(DaffInMemoryCartShippingMethodsService);

    cartFactory = TestBed.inject(DaffCartFactory);
    shippingRateFactory = TestBed.inject(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingMethods = shippingRateFactory.createMany(3);
    cartId = mockCart.id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | list a cart\'s payment methods', () => {
    it('should send a get request', done => {
      service.list(cartId).subscribe(res => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}`);

      expect(req.request.method).toBe('GET');

      req.flush(mockCartShippingMethods);
    });
  });
});
