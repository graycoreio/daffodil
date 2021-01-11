import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffOrder,
} from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';

import { DaffTestingOrderService } from './order.service';

describe('Driver | Testing | Order | OrderService', () => {
  let service: DaffTestingOrderService;

  let orderCreateSpy: jasmine.Spy;
  let orderCreateManySpy: jasmine.Spy;
  let orderFactoryService: DaffOrderFactory;

  let orderFactory: DaffOrderFactory;

  let mockOrder: DaffOrder;
  let orderId: DaffOrder['id'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingOrderService
      ]
    });

    service = TestBed.inject(DaffTestingOrderService);
    orderFactoryService = TestBed.inject(DaffOrderFactory);

    orderFactory = new DaffOrderFactory();

    mockOrder = orderFactory.create();
    orderId = mockOrder.id;

    orderCreateSpy = spyOn(orderFactoryService, 'create');
    orderCreateManySpy = spyOn(orderFactoryService, 'createMany');
    orderCreateSpy.and.returnValue(mockOrder);
    orderCreateManySpy.and.returnValue([mockOrder]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should return a DaffOrder', () => {
      const expected = cold('(a|)', { a: mockOrder });
      expect(service.get(orderId)).toBeObservable(expected);
    });
  });

  describe('list', () => {
    it('should return a list of DaffOrders', () => {
      const expected = cold('(a|)', { a: [mockOrder] });
      expect(service.list()).toBeObservable(expected);
    });
  });
});
