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
  DaffCartAddress,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';

import { DaffInMemoryCartBillingAddressService } from './cart-billing-address.service';

describe('@daffodil/cart/driver/in-memory | CartBillingAddressService', () => {
  let service: DaffInMemoryCartBillingAddressService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let mockCart: DaffCart;
  let mockCartAddress: DaffCartAddress;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryCartBillingAddressService,
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
    cartFactory = TestBed.inject(DaffCartFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);
    service = TestBed.inject(DaffInMemoryCartBillingAddressService);

    mockCart = cartFactory.create();
    mockCartAddress = cartAddressFactory.create();
    cartId = mockCart.id;
    mockCart.billing_address = mockCartAddress;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a cart billing address', () => {
    it('should send a get request', done => {
      service.get(cartId).subscribe(res => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}`);

      expect(req.request.method).toBe('GET');
      req.flush(mockCartAddress);
    });
  });

  describe('update', () => {
    let mockCartAddressUpdate: DaffCartAddress;

    beforeEach(() => {
      mockCartAddressUpdate = cartAddressFactory.create();
      mockCart.billing_address = mockCartAddressUpdate;
    });

    it('should send a put request', done => {
      service.update(cartId, mockCartAddressUpdate).subscribe(cart => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}`);

      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(mockCartAddressUpdate);

      req.flush(mockCart);
    });
  });
});
