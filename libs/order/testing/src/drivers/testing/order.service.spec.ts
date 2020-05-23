import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffOrder,
} from '@daffodil/order';

import { DaffOrderFactory } from '../../factories/order.factory';
import { DaffTestingOrderService } from './order.service';

describe('Driver | Testing | Order | OrderService', () => {
  let service: DaffTestingOrderService;

  let orderFactorySpy: jasmine.SpyObj<DaffOrderFactory>;

  let orderFactory: DaffOrderFactory;

  let mockOrder: DaffOrder;
  let orderId: DaffOrder['id'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffOrderFactory,
          useValue: jasmine.createSpyObj('DaffOrderFactory', ['create', 'createMany'])
        },
        DaffTestingOrderService
      ]
    });

    service = TestBed.get(DaffTestingOrderService);
    orderFactorySpy = TestBed.get(DaffOrderFactory);

    orderFactory = new DaffOrderFactory();

    mockOrder = orderFactory.create();
    orderId = mockOrder.id;

    orderFactorySpy.create.and.returnValue(mockOrder);
    orderFactorySpy.createMany.and.returnValue([mockOrder]);
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
