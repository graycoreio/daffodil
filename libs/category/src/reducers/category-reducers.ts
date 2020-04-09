import { daffCategoryReducer } from './category/category.reducer';
import { daffCategoryEntitiesReducer } from './category-entities/category-entities.reducer';

export const daffCategoryReducers = {
	category: daffCategoryReducer,
	categoryEntities: daffCategoryEntitiesReducer
};
