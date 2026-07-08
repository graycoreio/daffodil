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
  DaffCategoryStateRootSlice,
  daffCategoryReducers,
  DaffCategoryPageLoadSuccess,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import {
  DaffFilterFactory,
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
} from '@daffodil/core/testing';

import { getDaffCategoryPageSelectors } from './category-page.selector';

describe('@daffodil/category/state | DaffCategoryPageSelectors', () => {

  let store: Store<DaffCategoryStateRootSlice>;
  let categoryFactory: DaffCategoryFactory;
  let categoryFilterFactory: DaffFilterFactory;
  let categoryFilterEqualFactory: DaffFilterEqualFactory;
  let categoryFilterEqualOptionFactory: DaffFilterEqualOptionFactory;

  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let stubCategory: DaffCategory;
  let stubCategoryPageMetadata: DaffCategoryPageMetadata;
  let scheduler: TestScheduler;
  const categorySelectors = getDaffCategoryPageSelectors<DaffCategory>();

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
    categoryFilterFactory = TestBed.inject(DaffFilterFactory);
    categoryFilterEqualFactory = TestBed.inject(DaffFilterEqualFactory);
    categoryFilterEqualOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);

    stubCategory = categoryFactory.create();
    stubCategoryPageMetadata = categoryPageMetadataFactory.create();
    stubCategoryPageMetadata.id = stubCategory.id;

    store = TestBed.inject(Store);
    store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryPageMetadata, products: null }));
  });

  describe('selectCategoryState', () => {

    it('selects CategoryReducerState for category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryState));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: jasmine.objectContaining({
          id: stubCategory.id,
        }) });
      });
    });
  });

  describe('selectCategoryPageProductIds', () => {

    it('selects the product_ids of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageProductIds));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: stubCategoryPageMetadata.ids });
      });
    });
  });

  describe('selectIsCategoryPageEmpty', () => {

    it('selects whether the current category page is empty of products', () => {
      const selector = store.pipe(select(categorySelectors.selectIsCategoryPageEmpty));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: !stubCategoryPageMetadata.ids.length });
      });
    });
  });

  describe('selectCurrentCategoryId', () => {

    it('selects the id of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCurrentCategoryId));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: stubCategory.id });
      });
    });
  });
});
