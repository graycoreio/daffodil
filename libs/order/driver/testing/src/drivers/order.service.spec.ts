import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffOrder } from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';

import { DaffTestingOrderService } from './order.service';

describe('Driver | Testing | Order | OrderService', () => {
  let service: DaffTestingOrderService;

  let orderCreateSpy: jasmine.Spy;
  let orderCreateManySpy: jasmine.Spy;
  let orderFactory: DaffOrderFactory;

  let mockOrder: DaffOrder;
  let orderId: DaffOrder['id'];

  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingOrderService,
      ],
    });

    service = TestBed.inject(DaffTestingOrderService);
    orderFactory = TestBed.inject(DaffOrderFactory);

    mockOrder = orderFactory.create();
    orderId = mockOrder.id;

    orderCreateSpy = spyOn(orderFactory, 'create');
    orderCreateManySpy = spyOn(orderFactory, 'createMany');
    orderCreateSpy.and.returnValue(mockOrder);
    orderCreateManySpy.and.returnValue([mockOrder]);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should return a DaffOrder', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.get(orderId)).toBe('(a|)', { a: mockOrder });
      });
    });
  });

  describe('list', () => {
    it('should return a list of DaffOrders', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.list()).toBe('(a|)', { a: jasmine.objectContaining({ data: { [orderId]: mockOrder }}) });
      });
    });
  });
});
