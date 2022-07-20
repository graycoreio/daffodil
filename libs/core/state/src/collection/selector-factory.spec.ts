import { TestBed } from '@angular/core/testing';
import {
  select,
  createFeatureSelector,
} from '@ngrx/store';
import {
  provideMockStore,
  MockStore,
} from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import { DaffCollectionMetadata } from '@daffodil/core';
import { daffCollectionReducerInitialState } from '@daffodil/core/state';
import { DaffCollectionMetadataFactory } from '@daffodil/core/testing';

import { daffCollectionSelectorFactory } from './selector-factory';

interface State {
  test: DaffCollectionMetadata;
}

const featureSelector = createFeatureSelector<DaffCollectionMetadata>('test');

describe('@daffodil/core/state | daffCollectionSelectorFactory', () => {

  let store: MockStore<State>;
  let productCollectionMetadataFactory: DaffCollectionMetadataFactory;

  let stubCollectionMetadata: DaffCollectionMetadata;
  const selectors = daffCollectionSelectorFactory(featureSelector);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ...provideMockStore<State>({
          initialState: {
            test: daffCollectionReducerInitialState,
          },
        }),
      ],
    });

    store = TestBed.inject(MockStore);
    productCollectionMetadataFactory = TestBed.inject(DaffCollectionMetadataFactory);

    stubCollectionMetadata = productCollectionMetadataFactory.create();

    store.setState({
      test: stubCollectionMetadata,
    });
  });

  describe('selectCollectionMetadata', () => {
    it('selects the product collection metadata', () => {
      const selector = store.pipe(select(selectors.selectCollectionMetadata));
      const expected = cold('a', { a: stubCollectionMetadata });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionRequest', () => {
    it('builds a product collection request', () => {
      const selector = store.pipe(select(selectors.selectCollectionRequest));
      const expected = cold('a', { a: {
        appliedSortOption: stubCollectionMetadata.appliedSortOption,
        appliedSortDirection: stubCollectionMetadata.appliedSortDirection,
        currentPage: stubCollectionMetadata.currentPage,
        pageSize: stubCollectionMetadata.pageSize,
      }});
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionCount', () => {
    it('selects the current page of the product collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionCount));
      const expected = cold('a', { a: stubCollectionMetadata.count });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionCurrentPage', () => {
    it('selects the current page of the product collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionCurrentPage));
      const expected = cold('a', { a: stubCollectionMetadata.currentPage });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionTotalPages', () => {
    it('selects the total pages of products of the product collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionTotalPages));
      const expected = cold('a', { a: stubCollectionMetadata.totalPages });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionPageSize', () => {
    it('selects the page size of the product collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionPageSize));
      const expected = cold('a', { a: stubCollectionMetadata.pageSize });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionSortOptions', () => {
    it('selects the sort options of the product collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionSortOptions));
      const expected = cold('a', { a: stubCollectionMetadata.sortOptions.options });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionAppliedSortOption', () => {
    it('selects the applied sort option of the product collection page', () => {
      const selector = store.pipe(select(selectors.selectCollectionAppliedSortOption));
      const expected = cold('a', { a: stubCollectionMetadata.appliedSortOption });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionAppliedSortDirection', () => {
    it('selects the applied sort direction of the product collection page', () => {
      const selector = store.pipe(select(selectors.selectCollectionAppliedSortDirection));
      const expected = cold('a', { a: stubCollectionMetadata.appliedSortDirection });
      expect(selector).toBeObservable(expected);
    });
  });
});
