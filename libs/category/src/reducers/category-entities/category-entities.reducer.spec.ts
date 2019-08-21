import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffCategoryLoadSuccess } from "../../actions/category.actions";
import { initialState, categoryEntitiesReducer } from "./category-entities.reducer";
import { DaffCategory } from "../../models/category";

describe('Category | Category Entities Reducer', () => {

  let categoryFactory: DaffCategoryFactory;

  beforeEach(() => {
    categoryFactory = new DaffCategoryFactory();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = categoryEntitiesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CategoryLoadSuccessAction is triggered', () => {
    
    let category: DaffCategory;
    let result;
    let categoryId;

    beforeEach(() => {
      category = categoryFactory.create();
      categoryId = category.id;
      
      const categoryLoadSuccess = new DaffCategoryLoadSuccess(category);
      
      result = categoryEntitiesReducer(initialState, categoryLoadSuccess);
    });

    it('sets expected category on state', () => {
      expect(result.entities[categoryId]).toEqual(category);
    });
  });
});
