import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCategory } from '@daffodil/category';
import {
  DaffCategoryReducersState,
  daffCategoryReducers,
  DaffCategoryPageLoadSuccess,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
  DaffStatefulCategoryPageConfigurationState,
} from '@daffodil/category/state';
import { DaffStatefulCategoryPageConfigurationStateFactory } from '@daffodil/category/state/testing';
import { DaffCategoryFactory } from '@daffodil/category/testing';

import { getDaffCategoryEntitiesSelectors } from './category-entities.selector';

describe('DaffCategoryEntitiesSelectors', () => {

  let store: Store<DaffCategoryReducersState<DaffCategory>>;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const categoryPageConfigurationFactory: DaffStatefulCategoryPageConfigurationStateFactory = new DaffStatefulCategoryPageConfigurationStateFactory();
  let stubCategory: DaffCategory;
  const stubCategoryPageConfigurationState: DaffStatefulCategoryPageConfigurationState = categoryPageConfigurationFactory.create();
  const categorySelectors = getDaffCategoryEntitiesSelectors<DaffCategory>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CATEGORY_STORE_FEATURE_KEY]: combineReducers(daffCategoryReducers),
        }),
      ],
    });

    stubCategory = categoryFactory.create();
    store = TestBed.inject(Store);

    store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageConfigurationState: stubCategoryPageConfigurationState, products: null }));
  });

  describe('selectCategoryIds', () => {

    it('returns all category ids', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryIds));
      const expected = cold('a', { a: [stubCategory.id]});
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryEntities', () => {

    it('returns the categories as a dictionary object', () => {
      const expectedDictionary = new Object();
      expectedDictionary[stubCategory.id] = stubCategory;

      const selector = store.pipe(select(categorySelectors.selectCategoryEntities));
      const expected = cold('a', { a: expectedDictionary });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAllCategories', () => {

    it('returns all categories as an array', () => {
      const selector = store.pipe(select(categorySelectors.selectAllCategories));
      const expected = cold('a', { a: [stubCategory]});
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryTotal', () => {

    it('returns the total number of categories', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryTotal));
      const expected = cold('a', { a: 1 });
      expect(selector).toBeObservable(expected);
    });
  });
});
