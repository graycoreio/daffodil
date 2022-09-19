import { TestBed } from '@angular/core/testing';

import {
  DaffFilter,
  daffFilterArrayToDict,
  DaffSortDirectionEnum,
} from '@daffodil/core';
import {
  DaffCollectionRequest,
  DaffCollectionMetadata,
} from '@daffodil/core';
import { daffCollectionReducerInitialState as initialState } from '@daffodil/core/state';
import {
  DaffCollectionMetadataFactory,
  DaffFilterFactory,
  DaffFilterRequestFactory,
} from '@daffodil/core/testing';

import {
  getCollectionStateAdapter,
  DaffCollectionStateAdapter,
} from './adapter.class';


describe('@daffodil/core/state | getCollectionStateAdapter', () => {
  let adapter: DaffCollectionStateAdapter;
  let collectionMetadataFactory: DaffCollectionMetadataFactory;
  let filterFactory: DaffFilterFactory;
  let filterRequestFactory: DaffFilterRequestFactory;

  let collectionMetadata: DaffCollectionMetadata;

  beforeEach(() => {
    adapter = getCollectionStateAdapter();

    collectionMetadataFactory = TestBed.inject(DaffCollectionMetadataFactory);
    filterFactory = TestBed.inject(DaffFilterFactory);
    filterRequestFactory = TestBed.inject(DaffFilterRequestFactory);

    collectionMetadata = collectionMetadataFactory.create();
  });

  describe('setFilters', () => {
    let result: DaffCollectionMetadata;
    let filters: DaffFilter[];

    beforeEach(() => {
      filters = filterFactory.createMany(3);
      result = adapter.setFilters(daffFilterArrayToDict(filters), initialState);
    });

    it('should set the filters', () => {
      expect(Object.values(result.filters)).toEqual(jasmine.arrayContaining(filters));
    });

    it('should reset current page', () => {
      expect(result.currentPage).toEqual(1);
    });

    describe('when null is passed', () => {
      beforeEach(() => {
        result = adapter.setFilters(null, initialState);
      });

      it('should set the filters to an empty object', () => {
        expect(result.filters).toEqual({});
      });
    });
  });

  describe('setMetadata', () => {
    let result: DaffCollectionMetadata;

    describe('when null filters are passed', () => {
      beforeEach(() => {
        collectionMetadata = {
          ...collectionMetadata,
          filters: null,
        };

        result = adapter.setMetadata(collectionMetadata, initialState);
      });

      it('should set the filters to an empty object', () => {
        expect(result.filters).toEqual({});
      });
    });

    describe('when an appliedSortOption is not supplied', () => {
      beforeEach(() => {
        collectionMetadata = {
          ...collectionMetadata,
          appliedSortOption: null,
        };

        result = adapter.setMetadata(collectionMetadata, initialState);
      });

      it('sets collectionMetadata with the initial sorting option', () => {
        expect(result.appliedSortOption).toEqual(initialState.appliedSortOption);
      });
    });

    describe('when an appliedSortOption is supplied', () => {
      let selectedOption;

      beforeEach(() => {
        selectedOption = 'selectedOption';
        collectionMetadata = {
          ...collectionMetadata,
          appliedSortOption: selectedOption,
        };

        result = adapter.setMetadata(collectionMetadata, initialState);
      });

      it('sets the collection metadata with the appliedSortOption', () => {
        expect(result.appliedSortOption).toEqual(selectedOption);
      });
    });
  });

  describe('setPageSize', () => {
    let result: DaffCollectionMetadata;

    beforeEach(() => {
      result = adapter.setPageSize(3, initialState);
    });

    it('should set the collection metadata page size', () => {
      expect(result.pageSize).toEqual(3);
    });

    it('should reset current page', () => {
      expect(result.currentPage).toEqual(1);
    });
  });

  describe('setCurrentPage', () => {
    let result: DaffCollectionMetadata;

    beforeEach(() => {
      result = adapter.setCurrentPage(3, initialState);
    });

    it('should set the collection metadata current page', () => {
      expect(result.currentPage).toEqual(3);
    });
  });

  describe('setSort', () => {
    let result: DaffCollectionMetadata;

    beforeEach(() => {
      result = adapter.setSort('option', DaffSortDirectionEnum.Ascending, initialState);
    });

    it('should set the collection metadata applied sort option', () => {
      expect(result.appliedSortOption).toEqual('option');
    });

    it('should set the collection metadata applied sort direction', () => {
      expect(result.appliedSortDirection).toEqual(DaffSortDirectionEnum.Ascending);
    });
  });

  describe('storeRequest', () => {
    let result: DaffCollectionMetadata;
    let collectionRequest: DaffCollectionRequest;

    beforeEach(() => {
      collectionRequest = {
        pageSize: collectionMetadata.pageSize,
        appliedSortOption: collectionMetadata.appliedSortOption,
        appliedSortDirection: collectionMetadata.appliedSortDirection,
        currentPage: collectionMetadata.currentPage,
      };

      result = adapter.storeRequest(collectionRequest, initialState);
    });

    it('sets the included parameters on collectionMetadata from the request', () => {
      expect(result.pageSize).toEqual(collectionRequest.pageSize);
      expect(result.currentPage).toEqual(collectionRequest.currentPage);
      expect(result.appliedSortDirection).toEqual(collectionRequest.appliedSortDirection);
      expect(result.appliedSortOption).toEqual(collectionRequest.appliedSortOption);
    });

    describe('when fields are missing from the request', () => {
      beforeEach(() => {
        collectionRequest = {};

        result = adapter.storeRequest(collectionRequest, initialState);
      });

      it('sets the missing parameters on collectionMetadata from initial state', () => {
        expect(result.pageSize).toEqual(initialState.pageSize);
        expect(result.currentPage).toEqual(initialState.currentPage);
        expect(result.appliedSortDirection).toEqual(initialState.appliedSortDirection);
        expect(result.appliedSortOption).toEqual(initialState.appliedSortOption);
      });
    });
  });
});
