import { daffCategoryReducers } from './category-reducers';
import { daffCategoryReducer } from './category/category.reducer';
import { daffCategoryEntitiesReducer } from './category-entities/category-entities.reducer';

describe('selectCategoryState', () => {

  it('should return a reducer map with CategoryReducer', () => {
    expect(daffCategoryReducers().category).toEqual(daffCategoryReducer);
  });

  it('should return a reducer map with CategoryEntitiesReducer', () => {
    expect(daffCategoryReducers().categoryEntities).toEqual(daffCategoryEntitiesReducer);
  });
});
