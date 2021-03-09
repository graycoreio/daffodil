import {
  daffCategoryReducer,
  daffCategoryEntitiesReducer,
} from '@daffodil/category/state';

import { daffCategoryReducers } from './category-reducers';

describe('selectCategoryState', () => {

  it('should return a reducer map with CategoryReducer', () => {
    expect(daffCategoryReducers.category).toEqual(daffCategoryReducer);
  });

  it('should return a reducer map with CategoryEntitiesReducer', () => {
    expect(daffCategoryReducers.categoryEntities).toEqual(daffCategoryEntitiesReducer);
  });
});
