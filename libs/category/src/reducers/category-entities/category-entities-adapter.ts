import {
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';

import { DaffCategory } from '../../models/category';
import { DaffGenericCategory } from '../../models/generic-category';

export function daffCategoryEntitiesAdapter<T extends DaffGenericCategory<T> = DaffCategory>(): EntityAdapter<T> {
  return createEntityAdapter<T>();
}
