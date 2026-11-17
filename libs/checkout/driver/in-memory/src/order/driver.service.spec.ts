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

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffCheckoutOrderResult } from '@daffodil/checkout';

import { DaffInMemoryCheckoutOrderService } from './driver.service';

describe('@daffodil/checkout/driver/in-memory | CheckoutOrderService', () => {
  let service: DaffInMemoryCheckoutOrderService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;

  let mockCart: DaffCart;
  let mockCheckoutOrderResult: DaffCheckoutOrderResult;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryCheckoutOrderService,
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
    service = TestBed.inject(DaffInMemoryCheckoutOrderService);

    cartFactory = TestBed.inject(DaffCartFactory);

    mockCart = cartFactory.create();
    mockCheckoutOrderResult = {
      orderId: 'orderId',
      cartId: 'cartId',
    };
    cartId = mockCart.id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('placeOrder | placing an order and getting an order result', () => {
    it('should send a post request and return the order result', done => {
      service.placeOrder(cartId).subscribe(res => {
        expect(res).toEqual(mockCheckoutOrderResult);
        done();
      });

      const req = httpMock.expectOne(service['url']);

      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(jasmine.objectContaining({ cartId }));
      req.flush(mockCheckoutOrderResult);
    });
  });
});
