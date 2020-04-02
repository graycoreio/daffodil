import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffCategoryLoadSuccess } from '../../actions/category.actions';
import { categoryEntitiesReducer } from './category-entities.reducer';
import { DaffCategory } from '../../models/category';
import { categoryEntitiesAdapter } from './category-entities-adapter';

describe('Category | Category Entities Reducer', () => {

  let categoryFactory: DaffCategoryFactory;

  beforeEach(() => {
    categoryFactory = new DaffCategoryFactory();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = categoryEntitiesReducer(categoryEntitiesAdapter<DaffCategory>().getInitialState(), action);

      expect(result).toEqual(categoryEntitiesAdapter<DaffCategory>().getInitialState());
    });
  });

  describe('when CategoryLoadSuccessAction is triggered', () => {
    
    let category: DaffCategory;
    let result;
    let categoryId;

    beforeEach(() => {
      category = categoryFactory.create();
      categoryId = category.id;
      
      const categoryLoadSuccess = new DaffCategoryLoadSuccess({category: category, categoryPageConfigurationState: null, products: null});
      
      result = categoryEntitiesReducer(categoryEntitiesAdapter<DaffCategory>().getInitialState(), categoryLoadSuccess);
    });

    it('sets expected category on state', () => {
      expect(result.entities[categoryId]).toEqual(category);
    });
  });
});
