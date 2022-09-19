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
  DaffCategoryIdRequest,
} from '@daffodil/category';
import {
  DaffCategoryStateRootSlice,
  daffCategoryReducers,
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoad,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
  DaffCategoryPageChangePageSize,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { DaffState } from '@daffodil/core/state';
import {
  DaffFilterFactory,
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
} from '@daffodil/core/testing';

import { DaffCategoryReducerState } from '../../reducers/public_api';
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
      const expectedFeatureState: DaffCategoryReducerState = {
        daffState: DaffState.Stable,
        categoryLoading: false,
        productsLoading: false,
        errors: [],
        id: stubCategory.id,
      };
      const selector = store.pipe(select(categorySelectors.selectCategoryState));
      const expected = cold('a', { a: jasmine.objectContaining(expectedFeatureState) });
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

  describe('selectCategoryPageState', () => {

    it('selects the daffState of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageState));
      const expected = cold('a', { a: DaffState.Stable });
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

  describe('selectCategoryLoading', () => {

    it('selects the loading state of the category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryLoading));
      const expected = cold('a', { a: false });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryProductsLoading', () => {

    it('selects the loading state of the category products', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryProductsLoading));
      const expected = cold('a', { a: false });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryErrors', () => {

    it('returns errors associated with loading the category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryErrors));
      const expected = cold('a', { a: []});
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsCategoryPageMutating', () => {
    describe('when the category page is mutating', () => {
      beforeEach(() => {
        store.dispatch(new DaffCategoryPageChangePageSize(10));
      });

      it('returns true', () => {
        const selector = store.pipe(select(categorySelectors.selectIsCategoryPageMutating));
        const expected = cold('a', { a: true });
        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the category page is not mutating', () => {
      it('returns false', () => {
        const selector = store.pipe(select(categorySelectors.selectIsCategoryPageMutating));
        const expected = cold('a', { a: false });
        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectIsCategoryPageResolving', () => {
    describe('when the category page is resolving', () => {
      beforeEach(() => {
        store.dispatch(new DaffCategoryPageLoad(<DaffCategoryIdRequest>{}));
      });

      it('returns true', () => {
        const selector = store.pipe(select(categorySelectors.selectIsCategoryPageResolving));
        const expected = cold('a', { a: true });
        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the category page is not resolving', () => {
      it('returns false', () => {
        const selector = store.pipe(select(categorySelectors.selectIsCategoryPageResolving));
        const expected = cold('a', { a: false });
        expect(selector).toBeObservable(expected);
      });
    });
  });
});
