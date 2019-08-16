import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffCategoryLoadSuccess } from "../actions/category.actions";
import { initialState, reducer } from "../reducers/category-entities.reducer";
import { DaffCategory } from "../models/category";
import { DaffCategoriesLoadSuccess } from '../actions/categories.actions';

describe('Category | Category Entities Reducer', () => {

  let categoryFactory: DaffCategoryFactory;

  beforeEach(() => {
    categoryFactory = new DaffCategoryFactory();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CategoryLoadSuccessAction is triggered', () => {
    
    let category: DaffCategory;
    let result;

    beforeEach(() => {
      category = categoryFactory.create();
      
      const categoryLoadSuccess = new DaffCategoryLoadSuccess(category);
      
      result = reducer(initialState, categoryLoadSuccess);
    });

    it('sets expected category on state', () => {
      expect(result.entities[category.id]).toEqual(category);
    });
  });

  describe('when CategoriesLoadSuccessAction is triggered', () => {
    
    let categories: DaffCategory[];
    let result;

    beforeEach(() => {
      categories = categoryFactory.createMany(2);
      const categoriesLoadSuccess = new DaffCategoriesLoadSuccess(categories);
      
      result = reducer(initialState, categoriesLoadSuccess);
    });

    it('sets expected categories on state', () => {
      expect(result.entities[categories[0].id]).toEqual(categories[0]);
      expect(result.entities[categories[1].id]).toEqual(categories[1]);
    });
  });
});
