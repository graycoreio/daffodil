import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {
  DaffOrder,
} from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';

import { DaffInMemoryOrderService } from './order.service';

describe('Driver | In Memory | Order | OrderService', () => {
  let service: DaffInMemoryOrderService;
  let httpMock: HttpTestingController;
  let orderFactory: DaffOrderFactory;

  let mockOrder: DaffOrder;
  let orderId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryOrderService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    orderFactory = TestBed.get(DaffOrderFactory);
    service = TestBed.get(DaffInMemoryOrderService);

    mockOrder = orderFactory.create();
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

      const req = httpMock.expectOne(`${service.url}/${orderId}`);

      expect(req.request.method).toBe('GET');
      req.flush(mockOrder);
		});
  });

  describe('list | getting all orders', () => {
    it('should send a get request and return the list of orders', done => {
      service.list().subscribe(res => {
        expect(res).toEqual([mockOrder]);
        done();
      });

      const req = httpMock.expectOne(`${service.url}/`);

      expect(req.request.method).toBe('GET');
      req.flush([mockOrder]);
		});
  });
});
