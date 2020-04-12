import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';
import { daffCategoryReducers } from '../../reducers/category-reducers';
import { DaffCategoryReducersState } from '../../reducers/category-reducers.interface';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffCategory } from '../../models/category';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { getDaffCategoryEntitiesSelectors } from './category-entities.selector';
import { DaffCategoryLoadSuccess } from '../../actions/category.actions';

describe('DaffCategoryEntitiesSelectors', () => {

  let store: Store<DaffCategoryReducersState<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>>>;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const categoryPageConfigurationFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
	let stubCategory: DaffCategory;
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState<DaffCategoryRequest> = categoryPageConfigurationFactory.create();
	const categorySelectors = getDaffCategoryEntitiesSelectors<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          category: combineReducers(daffCategoryReducers)
        })
      ]
    });
    
    stubCategory = categoryFactory.create();
    store = TestBed.get(Store);

    store.dispatch(new DaffCategoryLoadSuccess({ category: stubCategory, categoryPageConfigurationState: stubCategoryPageConfigurationState, products: null }));
  });

  describe('selectCategoryIds', () => {

    it('returns all category ids', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryIds));
      const expected = cold('a', { a: [stubCategory.id] });
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
      const expected = cold('a', { a: [stubCategory] });
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
