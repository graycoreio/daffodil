import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

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

describe('DaffCategoryPageSelectors', () => {

  let store: Store<DaffCategoryStateRootSlice>;
  let categoryFactory: DaffCategoryFactory;
  let categoryFilterFactory: DaffFilterFactory;
  let categoryFilterEqualFactory: DaffFilterEqualFactory;
  let categoryFilterEqualOptionFactory: DaffFilterEqualOptionFactory;

  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let stubCategory: DaffCategory;
  let stubCategoryPageMetadata: DaffCategoryPageMetadata;
  const categorySelectors = getDaffCategoryPageSelectors<DaffCategory>();

  beforeEach(() => {
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
      const expected = cold('a', { a: jasmine.objectContaining({
        id: stubCategory.id,
      }) });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageProductIds', () => {

    it('selects the product_ids of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageProductIds));
      const expected = cold('a', { a: stubCategoryPageMetadata.ids });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsCategoryPageEmpty', () => {

    it('selects whether the current category page is empty of products', () => {
      const selector = store.pipe(select(categorySelectors.selectIsCategoryPageEmpty));
      const expected = cold('a', { a: !stubCategoryPageMetadata.ids.length });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCurrentCategoryId', () => {

    it('selects the id of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCurrentCategoryId));
      const expected = cold('a', { a: stubCategory.id });
      expect(selector).toBeObservable(expected);
    });
  });
});
