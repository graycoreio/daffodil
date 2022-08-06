import { TestBed } from '@angular/core/testing';

import {
  daffProductFilterArrayToDict,
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
    let result: DaffProductCollectionReducerState;

    describe('when null filters are passed', () => {
      beforeEach(() => {
        productCollectionMetadata = {
          ...productCollectionMetadata,
          filters: null,
        };

        result = adapter.setMetadata(productCollectionMetadata, initialState);
      });

      it('should set the filters to an empty object', () => {
        expect(result.filters).toEqual({});
      });
    });

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
