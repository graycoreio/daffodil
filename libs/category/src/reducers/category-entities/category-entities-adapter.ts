import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { DaffGenericCategory } from '../../models/generic-category';

export function daffCategoryEntitiesAdapter<T extends DaffGenericCategory<T>>(): EntityAdapter<T> {
	return createEntityAdapter<T>();
} 