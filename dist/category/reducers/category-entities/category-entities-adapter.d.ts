import { EntityAdapter } from '@ngrx/entity';
import { DaffGenericCategory } from '../../models/generic-category';
import { DaffCategory } from '../../models/category';
export declare function daffCategoryEntitiesAdapter<T extends DaffGenericCategory<T> = DaffCategory>(): EntityAdapter<T>;
