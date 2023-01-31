import { TestBed } from '@angular/core/testing';

import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';
import {
  DaffOrderLoadSuccess,
  DaffOrderListSuccess,
  daffOrderEntitiesInitialState as initialState,
} from '@daffodil/order/state';
import { DaffOrderCollectionFactory } from '@daffodil/order/testing';

import { daffOrderEntitiesReducer as reducer } from './order-entities.reducer';

describe('@daffodil/order/state | daffOrderEntitiesReducer', () => {
  let orderCollectionFactory: DaffOrderCollectionFactory;
  let mockOrderCollection: DaffOrderCollection;
  let mockOrder: DaffOrder;
  let orderId: DaffOrder['id'];

  beforeEach(() => {
    orderCollectionFactory = TestBed.inject(DaffOrderCollectionFactory);

    mockOrderCollection = orderCollectionFactory.create();
    mockOrder = Object.values(mockOrderCollection.data)[0];
    orderId = mockOrder.id;
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when OrderLoadSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      const orderLoadSuccess = new DaffOrderLoadSuccess<DaffOrder>(mockOrder);

      result = reducer(initialState, orderLoadSuccess);
    });

    it('should set order from action.payload', () => {
      expect(result.entities[orderId]).toEqual(mockOrder);
    });
  });

  describe('when OrderListSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      const orderListSuccess = new DaffOrderListSuccess(mockOrderCollection);

      result = reducer(initialState, orderListSuccess);
    });

    it('should set orders from action.payload', () => {
      expect(result.entities[orderId]).toEqual(mockOrder);
    });
  });
});
