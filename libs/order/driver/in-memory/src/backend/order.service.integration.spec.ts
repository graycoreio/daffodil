import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, } from 'angular-in-memory-web-api';

import { DaffOrder } from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';

import { DaffInMemoryBackendOrderService } from './order.service';

describe('DaffInMemoryBackendOrderService | Integration', () => {
  let httpClient: HttpClient;

  let orderFactory: DaffOrderFactory;

  let mockOrder: DaffOrder;
  let orderId: DaffOrder['id'];

  beforeEach(done => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryBackendOrderService, {delay: 0}),
      ],
    });

    httpClient = TestBed.get(HttpClient);

    orderFactory = TestBed.get(DaffOrderFactory);

    mockOrder = orderFactory.create();
    orderId = mockOrder.id;

    httpClient.post<any>('commands/resetDb', {orders: [mockOrder]}).subscribe(() => done());
  });

  describe('processing a order load request', () => {
    it('should return the correct order', done => {
      httpClient.get<any>(`/api/orders/${orderId}`).subscribe(result => {
        expect(result).toEqual(mockOrder);
        done();
      });
    });
  });

  describe('processing a order list request', () => {
    it('should return the correct orders', done => {
      httpClient.get<any>(`/api/orders/`).subscribe(result => {
        expect(result).toEqual([mockOrder]);
        done();
      });
    });
  });
});
