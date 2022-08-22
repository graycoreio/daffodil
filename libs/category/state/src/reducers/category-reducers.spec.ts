import {
  daffCategoryReducer,
  daffCategoryEntitiesReducer,
} from '@daffodil/category/state';

import { daffCategoryReducers } from './category-reducers';
import { daffCategoryPageMetadataReducer } from './page-metadata/reducer';

describe('selectCategoryState', () => {

  it('should return a reducer map with CategoryReducer', () => {
    expect(daffCategoryReducers.category).toEqual(daffCategoryReducer);
  });

  it('should return a reducer map with CategoryEntitiesReducer', () => {
    expect(daffCategoryReducers.categoryEntities).toEqual(daffCategoryEntitiesReducer);
  });

  it('should return a reducer map with the page metadata reducer', () => {
    expect(daffCategoryReducers.pageMetadata).toEqual(daffCategoryPageMetadataReducer);
  });
});
