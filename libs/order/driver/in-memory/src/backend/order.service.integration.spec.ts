import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';

import { DaffInMemoryBackendOrderService } from './order.service';

describe('@daffodil/order/driver/in-memory | DaffInMemoryBackendOrderService | Integration', () => {
  let httpClient: HttpClient;

  let orderFactory: DaffOrderFactory;

  let mockOrder: DaffOrder;
  let orderId: DaffOrder['id'];

  beforeEach(done => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryBackendOrderService, { delay: 0 })),
      ],
    });

    httpClient = TestBed.inject(HttpClient);

    orderFactory = TestBed.inject(DaffOrderFactory);

    mockOrder = orderFactory.create();
    orderId = mockOrder.id;

    httpClient.post<any>('commands/resetDb', { orders: [mockOrder]}).subscribe(() => done());
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
      httpClient.post<DaffOrderCollection>(`/api/orders/`, {}).subscribe(result => {
        expect(result.data[mockOrder.id]).toEqual(mockOrder);
        expect(result.metadata.ids).toEqual([mockOrder.id]);
        done();
      });
    });
  });
});
