import { TestBed } from '@angular/core/testing';

import {
  DaffCollectionRequest,
  daffFilterArrayToDict,
  DaffFilterEqual,
  DaffFilterEqualOption,
  daffFilterEqualOptionArrayToDict,
  DaffFilterEqualRequest,
} from '@daffodil/core';
import { daffCollectionReducerInitialState } from '@daffodil/core/state';
import {
  DaffCollectionRequestFactory,
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRequestEqualFactory,
} from '@daffodil/core/testing';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';
import {
  DaffOrderList,
  DaffOrderListSuccess,
  DaffOrderListFailure,
  DaffOrderCollectionReducerState,
  DaffOrderCollectionChangeFilter,
} from '@daffodil/order/state';
import { DaffOrderCollectionFactory } from '@daffodil/order/testing';

import { daffOrdersCollectionReducer } from './reducer';


describe('@daffodil/order/state | daffOrdersCollectionReducer', () => {
  let collectionRequestFactory: DaffCollectionRequestFactory;
  let orderCollectionFactory: DaffOrderCollectionFactory;
  let equalFilterFactory: DaffFilterEqualFactory;
  let equalOptionFactory: DaffFilterEqualOptionFactory;
  let equalFilterRequestFactory: DaffFilterRequestEqualFactory;

  let mockOrderCollection: DaffOrderCollection;
  let mockOrder: DaffOrder;
  let mockCollectionRequest: DaffCollectionRequest;
  let cartId: string;

  beforeEach(() => {
    orderCollectionFactory = TestBed.inject(DaffOrderCollectionFactory);
    collectionRequestFactory = TestBed.inject(DaffCollectionRequestFactory);
    equalFilterFactory = TestBed.inject(DaffFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    equalFilterRequestFactory = TestBed.inject(DaffFilterRequestEqualFactory);

    mockOrderCollection = orderCollectionFactory.create();
    mockCollectionRequest = collectionRequestFactory.create();
    mockOrder = Object.values(mockOrderCollection.data)[0];
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = daffOrdersCollectionReducer(daffCollectionReducerInitialState, action);

      expect(result).toBe(daffCollectionReducerInitialState);
    });
  });

  describe('when ChangeFilterAction is triggered', () => {
    let currentEqualFilter: DaffFilterEqual;
    let currentAppliedEqualFilterOption: DaffFilterEqualOption;
    let currentUnappliedEqualFilterOption: DaffFilterEqualOption;
    let equalFilterRequest: DaffFilterEqualRequest;
    let result: DaffOrderCollectionReducerState;
    let stateUnderTest: DaffOrderCollectionReducerState;

    beforeEach(() => {
      currentAppliedEqualFilterOption = equalOptionFactory.create({
        applied: true,
      });
      currentUnappliedEqualFilterOption = equalOptionFactory.create({
        applied: false,
      });
      currentEqualFilter = equalFilterFactory.create({
        options: daffFilterEqualOptionArrayToDict([
          currentAppliedEqualFilterOption,
          currentUnappliedEqualFilterOption,
        ]),
      });
      equalFilterRequest = equalFilterRequestFactory.create({
        name: currentEqualFilter.name,
        value: [currentUnappliedEqualFilterOption.value],
      });
      stateUnderTest = {
        ...daffCollectionReducerInitialState,
        filters: daffFilterArrayToDict([
          currentEqualFilter,
        ]),
      };
      const action = new DaffOrderCollectionChangeFilter([
        equalFilterRequest,
      ]);

      result = daffOrdersCollectionReducer(stateUnderTest, action);
    });

    it('should apply the requested options', () => {
      equalFilterRequest.value.forEach(option => {
        expect(result.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
      });
    });

    it('should remove the existing options', () => {
      expect(result.filters[currentEqualFilter.name].options[currentAppliedEqualFilterOption.value].applied).toBeFalse();
    });
  });

  describe('when ReviewsProductListAction is triggered', () => {
    let result: DaffOrderCollectionReducerState;

    beforeEach(() => {
      const productLoadAction: DaffOrderList = new DaffOrderList(cartId, mockCollectionRequest);

      result = daffOrdersCollectionReducer(daffCollectionReducerInitialState, productLoadAction);
    });

    it('stores the request', () => {
      expect(result.currentPage).toEqual(mockCollectionRequest.currentPage);
      expect(result.appliedSortDirection).toEqual(mockCollectionRequest.appliedSortDirection);
      expect(result.appliedSortOption).toEqual(mockCollectionRequest.appliedSortOption);
      expect(result.pageSize).toEqual(mockCollectionRequest.pageSize);
    });
  });

  describe('when ReviewsProductListSuccessAction is triggered', () => {
    let result: DaffOrderCollectionReducerState;
    let state: DaffOrderCollectionReducerState;

    beforeEach(() => {
      state = {
        ...daffCollectionReducerInitialState,
      };

      const productLoadSuccess = new DaffOrderListSuccess(mockOrderCollection);
      result = daffOrdersCollectionReducer(state, productLoadSuccess);
    });

    it('sets metadata', () => {
      expect(result.ids).toEqual(mockOrderCollection.metadata.ids);
      expect(result.count).toEqual(mockOrderCollection.metadata.count);
      expect(result.currentPage).toEqual(mockOrderCollection.metadata.currentPage);
      expect(result.pageSize).toEqual(mockOrderCollection.metadata.pageSize);
      expect(result.sortOptions).toEqual(mockOrderCollection.metadata.sortOptions);
      expect(result.totalPages).toEqual(mockOrderCollection.metadata.totalPages);
      expect(result.appliedSortOption).toEqual(mockOrderCollection.metadata.appliedSortOption);
      expect(result.appliedSortDirection).toEqual(mockOrderCollection.metadata.appliedSortDirection);
    });
  });

  describe('when ReviewsProductListFailureAction is triggered', () => {

    const error = {
      code: 'error code',
      message: 'error message',
    };
    let result: DaffOrderCollectionReducerState;
    let state: DaffOrderCollectionReducerState;

    beforeEach(() => {
      state = {
        ...daffCollectionReducerInitialState,
        ids: ['an ID'],
      };

      const productLoadFailure = new DaffOrderListFailure(error);

      result = daffOrdersCollectionReducer(state, productLoadFailure);
    });

    it('resets state', () => {
      expect(result).toEqual(daffCollectionReducerInitialState);
    });
  });
});
