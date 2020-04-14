import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { DaffGenericCategory } from '../../models/generic-category';
import { DaffCategory } from '../../models/category';

export function daffCategoryEntitiesAdapter<T extends DaffGenericCategory<T> = DaffCategory>(): EntityAdapter<T> {
	return createEntityAdapter<T>();
} 