import { categoryReducers } from './category-reducers';
import { categoryReducer } from './category/category.reducer';
import { categoryEntitiesReducer } from './category-entities/category-entities.reducer';

describe('selectCategoryState', () => {

  it('should return a reducer map with CategoryReducer', () => {
    expect(categoryReducers.category).toEqual(categoryReducer);
  });

  it('should return a reducer map with CategoryEntitiesReducer', () => {
    expect(categoryReducers.categoryEntities).toEqual(categoryEntitiesReducer);
  });
});
