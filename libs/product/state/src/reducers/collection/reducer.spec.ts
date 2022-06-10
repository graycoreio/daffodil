import { TestBed } from '@angular/core/testing';

import { DaffSortDirectionEnum } from '@daffodil/core';
import {
  daffProductFilterArrayToDict,
  daffProductFiltersToRequests,
  DaffProductCollectionRequest,
  DaffProductCollectionMetadata,
  DaffProductFilter,
} from '@daffodil/product';
import { DaffProductCollectionReducerState } from '@daffodil/product/state';
import {
  DaffProductFilterFactory,
  DaffProductFilterRequestFactory,
  DaffProductCollectionMetadataFactory,
} from '@daffodil/product/testing';

import {
  getProductCollectionStateAdapter,
  daffProductCollectionReducerInitialState as initialState,
  DaffProductCollectionStateAdapter,
} from './reducer';

describe('@daffodil/product/state | getProductCollectionStateAdapter', () => {
  let adapter: DaffProductCollectionStateAdapter;
  let productCollectionMetadataFactory: DaffProductCollectionMetadataFactory;
  let filterFactory: DaffProductFilterFactory;
  let filterRequestFactory: DaffProductFilterRequestFactory;

  let productCollectionMetadata: DaffProductCollectionMetadata;

  beforeEach(() => {
    adapter = getProductCollectionStateAdapter();

    productCollectionMetadataFactory = TestBed.inject(DaffProductCollectionMetadataFactory);
    filterFactory = TestBed.inject(DaffProductFilterFactory);
    filterRequestFactory = TestBed.inject(DaffProductFilterRequestFactory);

    productCollectionMetadata = productCollectionMetadataFactory.create();
  });

  describe('setPageSize', () => {
    let result: DaffProductCollectionReducerState;

    beforeEach(() => {
      result = adapter.setPageSize(3, initialState);
    });

    it('should set the product collection metadata page size', () => {
      expect(result.page_size).toEqual(3);
    });
  });

  describe('setCurrentPage', () => {
    let result: DaffProductCollectionReducerState;

    beforeEach(() => {
      result = adapter.setCurrentPage(3, initialState);
    });

    it('should set the product collection metadata current page', () => {
      expect(result.current_page).toEqual(3);
    });
  });

  describe('setSort', () => {
    let result: DaffProductCollectionReducerState;

    beforeEach(() => {
      result = adapter.setSort('option', DaffSortDirectionEnum.Ascending, initialState);
    });

    it('should set the product collection metadata applied sort option', () => {
      expect(result.applied_sort_option).toEqual('option');
    });

    it('should set the product collection metadata applied sort direction', () => {
      expect(result.applied_sort_direction).toEqual(DaffSortDirectionEnum.Ascending);
    });
  });

  describe('setFilters', () => {
    let result: DaffProductCollectionReducerState;
    let filters: DaffProductFilter[];

    beforeEach(() => {
      filters = filterFactory.createMany(3);
      result = adapter.setFilters(daffProductFilterArrayToDict(filters), initialState);
    });

    it('should set the filters', () => {
      expect(Object.values(result.filters)).toEqual(jasmine.arrayContaining(filters));
    });
  });

  describe('storeRequest', () => {
    let result: DaffProductCollectionReducerState;
    let productCollectionRequest: DaffProductCollectionRequest;

    beforeEach(() => {
      productCollectionRequest = {
        page_size: productCollectionMetadata.page_size,
        filter_requests: daffProductFiltersToRequests(productCollectionMetadata.filters),
        applied_sort_option: productCollectionMetadata.applied_sort_option,
        applied_sort_direction: productCollectionMetadata.applied_sort_direction,
        current_page: productCollectionMetadata.current_page,
      };

      result = adapter.storeRequest(productCollectionRequest, initialState);
    });

    it('sets the included parameters on productCollectionMetadata from the request', () => {
      expect(result.page_size).toEqual(productCollectionRequest.page_size);
      expect(result.current_page).toEqual(productCollectionRequest.current_page);
      expect(result.applied_sort_direction).toEqual(productCollectionRequest.applied_sort_direction);
      expect(result.applied_sort_option).toEqual(productCollectionRequest.applied_sort_option);
    });

    it('resets all the filters in state to an empty object', () => {
      expect(result.filters).toEqual({});
    });

    describe('when fields are missing from the request', () => {
      beforeEach(() => {
        productCollectionRequest = {};

        result = adapter.storeRequest(productCollectionRequest, initialState);
      });

      it('sets the missing parameters on productCollectionMetadata from initial state', () => {
        expect(result.page_size).toEqual(initialState.page_size);
        expect(result.current_page).toEqual(initialState.current_page);
        expect(result.applied_sort_direction).toEqual(initialState.applied_sort_direction);
        expect(result.applied_sort_option).toEqual(initialState.applied_sort_option);
      });
    });
  });

  describe('setMetadata', () => {
    let result: DaffProductCollectionReducerState;

    describe('when an applied_sort_option is not supplied', () => {
      beforeEach(() => {
        productCollectionMetadata = {
          ...productCollectionMetadata,
          applied_sort_option: null,
        };

        result = adapter.setMetadata(productCollectionMetadata, initialState);
      });

      it('sets productCollectionMetadata with the initial sorting option', () => {
        expect(result.applied_sort_option).toEqual(initialState.applied_sort_option);
      });
    });

    describe('when an applied_sort_option is supplied', () => {
      let selectedOption;

      beforeEach(() => {
        selectedOption = 'selectedOption';
        productCollectionMetadata = {
          ...productCollectionMetadata,
          applied_sort_option: selectedOption,
        };

        result = adapter.setMetadata(productCollectionMetadata, initialState);
      });

      it('sets the product collection metadata with the applied_sort_option', () => {
        expect(result.applied_sort_option).toEqual(selectedOption);
      });
    });
  });
});
