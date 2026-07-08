import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCategory,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
import {
  daffCategoryReducers,
  DaffCategoryPageLoadSuccess,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';

import { getDaffCategoryEntitiesSelectors } from './category-entities.selector';
import { DaffCategoryStateRootSlice } from '../../reducers/public_api';

describe('DaffCategoryEntitiesSelectors', () => {

  let store: Store<DaffCategoryStateRootSlice>;
  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let stubCategory: DaffCategory;
  let stubMetadata: DaffCategoryPageMetadata;
  let scheduler: TestScheduler;
  const categorySelectors = getDaffCategoryEntitiesSelectors<DaffCategory>();

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CATEGORY_STORE_FEATURE_KEY]: combineReducers(daffCategoryReducers),
        }),
      ],
    });

    categoryFactory = TestBed.inject(DaffCategoryFactory);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    stubCategory = categoryFactory.create();
    stubMetadata = categoryPageMetadataFactory.create();
    store = TestBed.inject(Store);

    store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubMetadata, products: null }));
  });

  describe('selectCategoryIds', () => {

    it('returns all category ids', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryIds));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: [stubCategory.id]});
      });
    });
  });

  describe('selectCategoryEntities', () => {

    it('returns the categories as a dictionary object', () => {
      const expectedDictionary = new Object();
      expectedDictionary[stubCategory.id] = stubCategory;

      const selector = store.pipe(select(categorySelectors.selectCategoryEntities));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: expectedDictionary });
      });
    });
  });

  describe('selectAllCategories', () => {

    it('returns all categories as an array', () => {
      const selector = store.pipe(select(categorySelectors.selectAllCategories));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: [stubCategory]});
      });
    });
  });

  describe('selectCategoryTotal', () => {

    it('returns the total number of categories', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryTotal));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: 1 });
      });
    });
  });
});
