import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  Store,
  createFeatureSelector,
} from '@ngrx/store';
import {
  MockStore,
  provideMockStore,
} from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import { Dict } from '@daffodil/core';
import {
  DaffProductCollectionMetadata,
  DaffProductFilter,
  daffProductFilterArrayToDict,
  daffProductFiltersToRequests,
} from '@daffodil/product';
import {
  daffProductCollectionReducerInitialState,
  DaffProductCollectionReducerState,
  daffProductCollectionSelectorFactory,
} from '@daffodil/product/state';
import {
  DaffProductCollectionMetadataFactory,
  DaffProductFilterFactory,
} from '@daffodil/product/testing';

import { DaffProductCollectionFacade } from './facade';

interface State {
  test: DaffProductCollectionReducerState;
}

const featureSelector = createFeatureSelector<DaffProductCollectionReducerState>('test');
const selectors = daffProductCollectionSelectorFactory(featureSelector);

@Injectable()
class TestFacade extends DaffProductCollectionFacade<State> {
  constructor(
    store: Store<State>,
  ) {
    super(store, selectors);
  }
}

describe('@daffodil/product/state | DaffProductCollectionFacade', () => {
  let store: MockStore<State>;
  let facade: DaffProductCollectionFacade<State>;
  let productCollectionMetadataFactory: DaffProductCollectionMetadataFactory;
  let filterFactory: DaffProductFilterFactory;
  let productCollectionMetadata: DaffProductCollectionMetadata;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ...provideMockStore<State>({
          initialState: {
            test: daffProductCollectionReducerInitialState,
          },
        }),
        TestFacade,
      ],
    });

    store = TestBed.inject(MockStore);
    facade = TestBed.inject(TestFacade);

    productCollectionMetadataFactory = TestBed.inject(DaffProductCollectionMetadataFactory);
    filterFactory = TestBed.inject(DaffProductFilterFactory);

    productCollectionMetadata = productCollectionMetadataFactory.create();
    productCollectionMetadata.filters = daffProductFilterArrayToDict(filterFactory.createMany());

    store.setState({
      test: productCollectionMetadata,
    });
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('currentPage$', () => {
    it('should return an observable of the current page', () => {
      const expected = cold('a', { a: productCollectionMetadata.current_page });
      expect(facade.currentPage$).toBeObservable(expected);
    });
  });

  describe('metadata$', () => {
    it('should return an observable of the product collection metadata', () => {
      const expected = cold('a', { a: productCollectionMetadata });
      expect(facade.metadata$).toBeObservable(expected);
    });
  });

  describe('request$', () => {
    it('should return an observable of the product collection request', () => {
      const expected = cold('a', { a: {
        filter_requests: daffProductFiltersToRequests(productCollectionMetadata.filters),
        applied_sort_option: productCollectionMetadata.applied_sort_option,
        applied_sort_direction: productCollectionMetadata.applied_sort_direction,
        current_page: productCollectionMetadata.current_page,
        page_size: productCollectionMetadata.page_size,
      }});
      expect(facade.request$).toBeObservable(expected);
    });
  });

  describe('totalPages$', () => {
    it('should return an observable of the total number of pages', () => {
      const expected = cold('a', { a: productCollectionMetadata.total_pages });
      expect(facade.totalPages$).toBeObservable(expected);
    });
  });

  describe('totalProducts$', () => {
    it('should return an observable of the total number of products', () => {
      const expected = cold('a', { a: productCollectionMetadata.total_products });
      expect(facade.totalProducts$).toBeObservable(expected);
    });
  });

  describe('pageSize$', () => {
    it('should return an observable of the page size', () => {
      const expected = cold('a', { a: productCollectionMetadata.page_size });
      expect(facade.pageSize$).toBeObservable(expected);
    });
  });

  describe('filters$', () => {
    it('should return an observable of the filters', () => {
      const expected = cold('a', { a: productCollectionMetadata.filters });
      expect(facade.filters$).toBeObservable(expected);
    });
  });

  describe('sortOptions$', () => {
    it('should return an observable of the sort options', () => {
      const expected = cold('a', { a: productCollectionMetadata.sort_options.options });
      expect(facade.sortOptions$).toBeObservable(expected);
    });
  });

  describe('appliedFilters$', () => {
    it('should return an observable of the applied filters', () => {
      const expectedFilters: Dict<DaffProductFilter> = {};

      const expected = cold('a', { a: expectedFilters });
      expect(facade.appliedFilters$).toBeObservable(expected);
    });
  });

  describe('appliedSortOption$', () => {
    it('should return an observable of the applied sort option', () => {
      const expected = cold('a', { a: productCollectionMetadata.applied_sort_option });
      expect(facade.appliedSortOption$).toBeObservable(expected);
    });
  });

  describe('appliedSortDirection$', () => {
    it('should return an observable of the applied sort direction', () => {
      const expected = cold('a', { a: productCollectionMetadata.applied_sort_direction });
      expect(facade.appliedSortDirection$).toBeObservable(expected);
    });
  });
});
