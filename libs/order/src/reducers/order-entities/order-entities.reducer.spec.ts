import { DaffOrderFactory } from '@daffodil/order/testing';

import {
  DaffOrderLoadSuccess,
  DaffOrderListSuccess,
} from '../../actions/order.actions';
import {
  daffOrderEntitiesReducer as reducer,
} from './order-entities.reducer';
import { daffOrderEntitiesInitialState as initialState } from './order-entities-initial-state';
import { DaffOrder } from '../../models/order';

describe('Order | Reducer | OrderEntities', () => {
  let orderFactory: DaffOrderFactory;
  let order: DaffOrder;
  let orderId: DaffOrder['id'];

  beforeEach(() => {
    orderFactory = new DaffOrderFactory();

    order = orderFactory.create();
    orderId = order.id;
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when OrderLoadSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      const orderLoadSuccess = new DaffOrderLoadSuccess<DaffOrder>(order);

      result = reducer(initialState, orderLoadSuccess);
    });

    it('should set order from action.payload', () => {
      expect(result.entities[orderId]).toEqual(order)
    });
  });

  describe('when OrderListSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      const orderListSuccess = new DaffOrderListSuccess([order]);

      result = reducer(initialState, orderListSuccess);
    });

    it('should set countries from action.payload', () => {
      expect(result.entities).toEqual({[orderId]: order})
    });
  });
});
