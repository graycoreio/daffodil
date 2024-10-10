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
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';
import {
  DaffOrderCollectionFactory,
  DaffOrderFactory,
} from '@daffodil/order/testing';

import { DaffInMemoryOrderService } from './order.service';

describe('@daffodil/order/driver/in-memory | DaffInMemoryOrderService', () => {
  let service: DaffInMemoryOrderService;
  let httpMock: HttpTestingController;
  let orderCollectionFactory: DaffOrderCollectionFactory;

  let mockOrderCollection: DaffOrderCollection;
  let mockOrder: DaffOrder;
  let orderId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryOrderService,
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
    orderCollectionFactory = TestBed.inject(DaffOrderCollectionFactory);
    service = TestBed.inject(DaffInMemoryOrderService);

    mockOrderCollection = orderCollectionFactory.create();
    mockOrder = Object.values(mockOrderCollection.data)[0];
    orderId = mockOrder.id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a order', () => {
    it('should send a get request and return the order', done => {
      service.get(orderId).subscribe(order => {
        expect(order).toEqual(mockOrder);
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${orderId}`);

      expect(req.request.method).toBe('GET');
      req.flush(mockOrder);
    });
  });

  describe('list | getting all orders', () => {
    it('should send a get request and return the list of orders', done => {
      service.list().subscribe(res => {
        expect(res).toEqual(mockOrderCollection);
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/`);

      expect(req.request.method).toBe('POST');
      req.flush(mockOrderCollection);
    });
  });
});
