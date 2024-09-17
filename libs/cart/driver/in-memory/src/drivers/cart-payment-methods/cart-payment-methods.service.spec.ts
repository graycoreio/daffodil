import {
 provideHttpClient,
withInterceptorsFromDi,
} from '@angular/common/http';
import {
 HttpTestingController,
provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartPaymentMethod,
} from '@daffodil/cart';
import {
  DaffCartPaymentFactory,
  DaffCartFactory,
} from '@daffodil/cart/testing';

import { DaffInMemoryCartPaymentMethodsService } from './cart-payment-methods.service';

describe('Driver | In Memory | Cart | CartPaymentMethodsService', () => {
  let cartPaymentMethodsService: DaffInMemoryCartPaymentMethodsService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let paymentFactory: DaffCartPaymentFactory;

  let mockCart: DaffCart;
  let mockCartPaymentMethods: DaffCartPaymentMethod[];
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [
        DaffInMemoryCartPaymentMethodsService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ],
});

    httpMock = TestBed.inject(HttpTestingController);
    cartPaymentMethodsService = TestBed.inject(DaffInMemoryCartPaymentMethodsService);

    cartFactory = TestBed.inject(DaffCartFactory);
    paymentFactory = TestBed.inject(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockCartPaymentMethods = paymentFactory.createMany(3);
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

      req.flush(mockCartPaymentMethods);
    });
  });
});
