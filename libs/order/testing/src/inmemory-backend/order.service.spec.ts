import { TestBed } from '@angular/core/testing';

import { DaffOrder } from '@daffodil/order';
import {
  DaffOrderFactory,
  isOrder
} from '@daffodil/order/testing';

import { DaffInMemoryBackendOrderService } from './order.service';

describe('DaffInMemoryBackendOrderService | Unit', () => {
  let service: DaffInMemoryBackendOrderService;

  let orderFactory: DaffOrderFactory;

  let mockOrder: DaffOrder;
  let orderId;
  let reqInfoStub;
  let baseUrl;
  let collection: DaffOrder[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendOrderService,
      ]
    });
    service = TestBed.get(DaffInMemoryBackendOrderService);

    orderFactory = TestBed.get(DaffOrderFactory);

    mockOrder = orderFactory.create();
    collection = [mockOrder];
    orderId = mockOrder.id;
    baseUrl = 'api/orders/';
    reqInfoStub = {
      resourceUrl: baseUrl,
      collection,
      req: {
        body: {}
      },
      utils: {
        createResponse$: func => func(),
        getJsonBody: req => req.body,
        findById: (ary, id) => ary.find(e => e.id === id)
      }
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('processing a get order request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = `${baseUrl}${orderId}/`;
      reqInfoStub.id = orderId;

      result = service.get(reqInfoStub);
    });

    it('should return the order', () => {
      expect(result.body).toEqual(mockOrder);
    });
  });

  describe('processing a list orders request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = baseUrl;

      result = service.get(reqInfoStub);
    });

    it('should return the order list', () => {
      expect(result.body).toEqual([mockOrder]);
    });
  });

  describe('createDb', () => {
    let result;

    beforeEach(() => {
      result = service.createDb(reqInfoStub);
    });

    it('should return a object with an array of more than 2 orders', () => {
      expect(Array.isArray(result.orders)).toEqual(true);
      expect(result.orders.length).toBeGreaterThan(2);
      result.orders.forEach(order => {
        expect(isOrder(order)).toBeTruthy();
      });
    });

    describe('when seed data is passed', () => {
      beforeEach(() => {
        reqInfoStub.req.body.orders = collection;
        result = service.createDb(reqInfoStub);
      });

      it('should create the database with that seed data', () => {
        expect(result.orders).toEqual(collection);
      });
    });
  });
});
