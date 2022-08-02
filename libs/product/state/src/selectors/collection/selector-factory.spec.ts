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

import {
  DaffProductFilter,
  DaffProductFilterType,
  daffProductFilterEqualOptionArrayToDict,
  daffProductFilterArrayToDict,
  DaffProductCollectionMetadata,
} from '@daffodil/product';
import {
  daffProductCollectionReducerInitialState,
  DaffProductCollectionReducerState,
} from '@daffodil/product/state';
import {
  DaffProductFilterFactory,
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductCollectionMetadataFactory,
} from '@daffodil/product/testing';

import { daffProductCollectionSelectorFactory } from './selector-factory';

interface State {
  test: DaffProductCollectionReducerState;
}

const featureSelector = createFeatureSelector<DaffProductCollectionReducerState>('test');

describe('@daffodil/product/state | daffProductCollectionSelectorFactory', () => {

  let store: MockStore<State>;
  let productFilterFactory: DaffProductFilterFactory;
  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productCollectionMetadataFactory: DaffProductCollectionMetadataFactory;

  let stubProductCollectionMetadata: DaffProductCollectionMetadata;
  const selectors = daffProductCollectionSelectorFactory(featureSelector);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ...provideMockStore<State>({
          initialState: {
            test: daffProductCollectionReducerInitialState,
          },
        }),
      ],
    });

    store = TestBed.inject(MockStore);
    productCollectionMetadataFactory = TestBed.inject(DaffProductCollectionMetadataFactory);
    productFilterFactory = TestBed.inject(DaffProductFilterFactory);
    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);

    stubProductCollectionMetadata = productCollectionMetadataFactory.create();

    store.setState({
      test: stubProductCollectionMetadata,
    });
  });

  describe('selectProductCollectionFilters', () => {
    it('selects filters of the product collection', () => {
      const selector = store.pipe(select(selectors.selectProductCollectionFilters));
      const expected = cold('a', { a: stubProductCollectionMetadata.filters });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductCollectionAppliedFilters', () => {
    it('sets applied filters to {} if there are no applied filters', () => {
      const expectedAppliedFilters: Record<DaffProductFilter['name'], DaffProductFilter> = {};

      store.setState({
        test: {
          ...stubProductCollectionMetadata,
          filters: {
            name: {
              name: 'name',
              type: DaffProductFilterType.Equal,
              label: 'labelRDaffProductFilterRequest',
              options: {
                value: {
                  applied: false,
                  label: 'optionLabel',
                  value: 'value',
                  count: 2,
                },
              },
            },
            name2: {
              name: 'name2',
              type: DaffProductFilterType.Equal,
              label: 'label2RDaffProductFilterRequest',
              options: {
                value2: {
                  applied: false,
                  label: 'optionLabel2',
                  value: 'value2',
                  count: 2,
                },
              },
            },
          },
        },
      });

      const selector = store.pipe(select(selectors.selectProductCollectionAppliedFilters));
      const expected = cold('a', { a: expectedAppliedFilters });
      expect(selector).toBeObservable(expected);
    });

    it('selects the applied filters of the product collection', () => {
      const filters = productFilterFactory.createMany(5);
      const filterEqual = productFilterEqualFactory.create({
        options: daffProductFilterEqualOptionArrayToDict(productFilterEqualOptionFactory.createMany(2, {
          applied: true,
        })),
      });
      const filterDict = daffProductFilterArrayToDict([
        ...filters,
        filterEqual,
      ]);

      const expectedAppliedFilters: Record<DaffProductFilter['name'], DaffProductFilter> = daffProductFilterArrayToDict([filterEqual]);

      store.setState({
        test: {
          ...stubProductCollectionMetadata,
          filters: filterDict,
        },
      });

      const selector = store.pipe(select(selectors.selectProductCollectionAppliedFilters));
      const expected = cold('a', { a: expectedAppliedFilters });
      expect(selector).toBeObservable(expected);
    });
  });
});
