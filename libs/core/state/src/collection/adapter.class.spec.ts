import { TestBed } from '@angular/core/testing';

import { DaffSortDirectionEnum } from '@daffodil/core';
import {
  DaffCollectionRequest,
  DaffCollectionMetadata,
} from '@daffodil/core';
import { daffCollectionReducerInitialState as initialState } from '@daffodil/core/state';
import { DaffCollectionMetadataFactory } from '@daffodil/core/testing';

import {
  getCollectionStateAdapter,
  DaffCollectionStateAdapter,
} from './adapter.class';


describe('@daffodil/core/state | getCollectionStateAdapter', () => {
  let adapter: DaffCollectionStateAdapter;
  let productCollectionMetadataFactory: DaffCollectionMetadataFactory;

  let productCollectionMetadata: DaffCollectionMetadata;

  beforeEach(() => {
    adapter = getCollectionStateAdapter();

    productCollectionMetadataFactory = TestBed.inject(DaffCollectionMetadataFactory);

    productCollectionMetadata = productCollectionMetadataFactory.create();
  });

  describe('setPageSize', () => {
    let result: DaffCollectionMetadata;

    beforeEach(() => {
      result = adapter.setPageSize(3, initialState);
    });

    it('should set the product collection metadata page size', () => {
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

    it('should set the product collection metadata current page', () => {
      expect(result.currentPage).toEqual(3);
    });
  });

  describe('setSort', () => {
    let result: DaffCollectionMetadata;

    beforeEach(() => {
      result = adapter.setSort('option', DaffSortDirectionEnum.Ascending, initialState);
    });

    it('should set the product collection metadata applied sort option', () => {
      expect(result.appliedSortOption).toEqual('option');
    });

    it('should set the product collection metadata applied sort direction', () => {
      expect(result.appliedSortDirection).toEqual(DaffSortDirectionEnum.Ascending);
    });
  });

  describe('storeRequest', () => {
    let result: DaffCollectionMetadata;
    let productCollectionRequest: DaffCollectionRequest;

    beforeEach(() => {
      productCollectionRequest = {
        pageSize: productCollectionMetadata.pageSize,
        appliedSortOption: productCollectionMetadata.appliedSortOption,
        appliedSortDirection: productCollectionMetadata.appliedSortDirection,
        currentPage: productCollectionMetadata.currentPage,
      };

      result = adapter.storeRequest(productCollectionRequest, initialState);
    });

    it('sets the included parameters on productCollectionMetadata from the request', () => {
      expect(result.pageSize).toEqual(productCollectionRequest.pageSize);
      expect(result.currentPage).toEqual(productCollectionRequest.currentPage);
      expect(result.appliedSortDirection).toEqual(productCollectionRequest.appliedSortDirection);
      expect(result.appliedSortOption).toEqual(productCollectionRequest.appliedSortOption);
    });

    describe('when fields are missing from the request', () => {
      beforeEach(() => {
        productCollectionRequest = {};

        result = adapter.storeRequest(productCollectionRequest, initialState);
      });

      it('sets the missing parameters on productCollectionMetadata from initial state', () => {
        expect(result.pageSize).toEqual(initialState.pageSize);
        expect(result.currentPage).toEqual(initialState.currentPage);
        expect(result.appliedSortDirection).toEqual(initialState.appliedSortDirection);
        expect(result.appliedSortOption).toEqual(initialState.appliedSortOption);
      });
    });
  });

  describe('setMetadata', () => {
    let result: DaffCollectionMetadata;

    describe('when an appliedSortOption is not supplied', () => {
      beforeEach(() => {
        productCollectionMetadata = {
          ...productCollectionMetadata,
          appliedSortOption: null,
        };

        result = adapter.setMetadata(productCollectionMetadata, initialState);
      });

      it('sets productCollectionMetadata with the initial sorting option', () => {
        expect(result.appliedSortOption).toEqual(initialState.appliedSortOption);
      });
    });

    describe('when an appliedSortOption is supplied', () => {
      let selectedOption;

      beforeEach(() => {
        selectedOption = 'selectedOption';
        productCollectionMetadata = {
          ...productCollectionMetadata,
          appliedSortOption: selectedOption,
        };

        result = adapter.setMetadata(productCollectionMetadata, initialState);
      });

      it('sets the product collection metadata with the appliedSortOption', () => {
        expect(result.appliedSortOption).toEqual(selectedOption);
      });
    });
  });
});
