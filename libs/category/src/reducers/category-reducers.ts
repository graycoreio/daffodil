import { daffCategoryEntitiesReducer } from './category-entities/category-entities.reducer';
import { daffCategoryReducer } from './category/category.reducer';

export const daffCategoryReducers = {
  category: daffCategoryReducer,
  categoryEntities: daffCategoryEntitiesReducer,
};
