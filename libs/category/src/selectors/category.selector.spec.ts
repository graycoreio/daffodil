import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffCategoryLoadSuccess } from '../actions/category.actions';
import { 
  selectSelectedCategoryId, 
  selectCategoryLoading, 
  selectCategoryErrors, 
  selectCategoryIds, 
  selectCategoryEntities, 
  selectAllCategories, 
  selectCategoryTotal, 
  selectCategoryPageConfigurationState,
  selectCategoryState 
} from './category.selector';
import { DaffCategory } from '../models/category';
import { CategoryReducersState } from '../reducers/category-reducers.interface';
import { categoryReducers } from '../reducers/category-reducers';

describe('DaffCategorySelectors', () => {

  let store: Store<CategoryReducersState>;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const categoryPageConfigurationFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  let stubCategory: DaffCategory;
  const stubCategoryPageConfigurationState = categoryPageConfigurationFactory.create();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          category: combineReducers(categoryReducers),
        })
      ]
    });

    stubCategory = categoryFactory.create();
    store = TestBed.get(Store);

    store.dispatch(new DaffCategoryLoadSuccess({ category: stubCategory, categoryPageConfigurationState: stubCategoryPageConfigurationState, products: null }));
  });

  describe('selectCategoryState', () => {
    
    it('selects CategoryReducerState for category', () => {
      const expectedFeatureState = {
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        loading: false,
        errors: []
      }
      const selector = store.pipe(select(selectCategoryState));
      const expected = cold('a', { a: expectedFeatureState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageConfigurationState', () => {

    it('selects the selected categoryId state', () => {
      const selector = store.pipe(select(selectCategoryPageConfigurationState));
      const expected = cold('a', { a: stubCategoryPageConfigurationState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectSelectedCategoryId', () => {

    it('selects the selected categoryId state', () => {
      const selector = store.pipe(select(selectSelectedCategoryId));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.id });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryLoading', () => {

    it('selects the loading state of the category', () => {
      const selector = store.pipe(select(selectCategoryLoading));
      const expected = cold('a', { a: false });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryErrors', () => {

    it('returns the selected category id', () => {
      const selector = store.pipe(select(selectCategoryErrors));
      const expected = cold('a', { a: [] });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryIds', () => {

    it('returns all category ids', () => {
      const selector = store.pipe(select(selectCategoryIds));
      const expected = cold('a', { a: [stubCategory.id] });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryEntities', () => {

    it('returns the categories as a dictionary object', () => {
      const expectedDictionary = new Object();
      expectedDictionary[stubCategory.id] = stubCategory;

      const selector = store.pipe(select(selectCategoryEntities));
      const expected = cold('a', { a: expectedDictionary });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAllCategories', () => {

    it('returns all categories as an array', () => {
      const selector = store.pipe(select(selectAllCategories));
      const expected = cold('a', { a: [stubCategory] });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryTotal', () => {

    it('returns the total number of categories', () => {
      const selector = store.pipe(select(selectCategoryTotal));
      const expected = cold('a', { a: 1 });
      expect(selector).toBeObservable(expected);
    });
  });
});
